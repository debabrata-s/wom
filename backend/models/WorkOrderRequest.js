const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WorkOrderRequestSchema = new Schema({
    requesterInfoGroup: {
        fullName: String,
        phone: String,
        email: String
    },
    requestDetailsGroup: {
        title: String,
        desc: String,
        dueDate: String
    },
    filesGroup: {
        image: String,
        file: String
    }

});
module.exports = mongoose.model('WorkOrderRequest', WorkOrderRequestSchema)
