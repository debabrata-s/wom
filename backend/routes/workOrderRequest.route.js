const express = require('express');
const app = express();
const workOrderRequestRoute = express.Router();

// WorkOrderRequest model
let WorkOrderRequest = require('../models/WorkOrderRequest');

// Add WorkOrderRequest
workOrderRequestRoute.route('/create').post((req, res, next) => {
  WorkOrderRequest.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All WorkOrderRequests
workOrderRequestRoute.route('/').get((req, res) => {
  WorkOrderRequest.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
workOrderRequestRoute.route('/read/:id').get((req, res) => {
  WorkOrderRequest.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
workOrderRequestRoute.route('/update/:id').put((req, res, next) => {
  WorkOrderRequest.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
workOrderRequestRoute.route('/delete/:id').delete((req, res, next) => {
  WorkOrderRequest.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = workOrderRequestRoute;