(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar *ngIf=\"isLoggedIn === 'true'\"></app-navbar>\r\n<!-- <app-navbar></app-navbar> -->\r\n<div class=\"container-fluid page-body-wrapper\">\r\n  <app-sidenav *ngIf=\"isLoggedIn === 'true'\"></app-sidenav>\r\n  <!-- <app-sidenav></app-sidenav> -->\r\n  <div class=\"full-width\">\r\n    <!-- <app-settings-page></app-settings-page> -->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-templates/request-form-template/request-form-template.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-templates/request-form-template/request-form-template.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h4>Request Checklist</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <h4>Form Items</h4>\r\n\r\n            <!-- add task dynamic form using formarray-->\r\n            <form [formGroup]=\"requestFormTemplateForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                <div formGroupName=\"tasks\">\r\n                    <div formArrayName=\"taskItems\"\r\n                        *ngFor=\"let task of requestFormTemplateForm.get('tasks.taskItems').controls; let i = index\">\r\n                        <div [formGroupName]=\"i\" class=\"row\">\r\n                            <div class=\"col-2\">\r\n                                <h1 class=\"display-2\">{{i+1}}</h1>\r\n                            </div>\r\n\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        Task:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"taskType\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        Question:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"question\">\r\n                                </div>\r\n\r\n                                <div class=\"form-check form-check-flat form-check-primary\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\"\r\n                                            formControlName=\"required\">Required\r\n                                        <i class=\"input-helper\"></i>\r\n                                    </label>\r\n                                </div>\r\n                                <hr>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-link btn-fw\" (click)=\"addTask()\"> + Add\r\n                        Task</button>\r\n                </div>\r\n\r\n\r\n\r\n                <!-- <div formGroupName=\"permissions\">\r\n                    <h4>Permissions</h4>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <ul class=\"list-group\">\r\n                                <li *ngFor=\"let permission of permissions\" class=\"list-group-item\">{{permission.desc}}\r\n                                    <div class=\"d-inline float-right\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                            <label class=\"btn btn-sm btn-secondary active\">\r\n                                                <input type=\"radio\" [formControlName]=\"permission.name\" value=\"optional\">\r\n                                                Optional\r\n                                            </label>\r\n                                            <label class=\"btn btn-sm btn-secondary\">\r\n                                                <input type=\"radio\" [formControlName]=\"permission.name\" value=\"hidden\">\r\n                                                Hidden\r\n                                            </label>\r\n                                            <label class=\"btn btn-sm btn-secondary\">\r\n                                                <input type=\"radio\" [formControlName]=\"permission.name\" value=\"required\">\r\n                                                Required\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br />\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div formGroupName=\"permissions\">\r\n                    <h4>Permissions</h4>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <ul class=\"list-group\">\r\n                                <li class=\"list-group-item\">Allow Requesters to set Asset</li>\r\n                                <div class=\"d-inline float-right\">\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"optional1\" type=\"radio\" class=\"custom-control-input\" value=\"optional\"\r\n                                            name=\"setAsset\" formControlName=\"setAsset\">\r\n                                        <label class=\"custom-control-label\" for=\"optional1\">Optional</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"hidden1\" type=\"radio\" class=\"custom-control-input\" value=\"hidden\"\r\n                                            name=\"setAsset\" formControlName=\"setAsset\">\r\n                                        <label class=\"custom-control-label\" for=\"hidden1\">Hidden</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"required1\" type=\"radio\" class=\"custom-control-input\" value=\"required\"\r\n                                            name=\"setAsset\" formControlName=\"setAsset\">\r\n                                        <label class=\"custom-control-label\" for=\"required1\">Required</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <li class=\"list-group-item\">Allow Requesters to set Location</li>\r\n                                <div class=\"d-inline float-right\">\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"optional2\" type=\"radio\" class=\"custom-control-input\" value=\"optional\"\r\n                                            name=\"setLocation\" formControlName=\"setLocation\">\r\n                                        <label class=\"custom-control-label\" for=\"optional2\">Optional</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"hidden2\" type=\"radio\" class=\"custom-control-input\" value=\"hidden\"\r\n                                            name=\"setLocation\" formControlName=\"setLocation\">\r\n                                        <label class=\"custom-control-label\" for=\"hidden2\">Hidden</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"required2\" type=\"radio\" class=\"custom-control-input\" value=\"required\"\r\n                                            name=\"setLocation\" formControlName=\"setLocation\">\r\n                                        <label class=\"custom-control-label\" for=\"required2\">Required</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <li class=\"list-group-item\">Allow Requesters to set Worker Assigned</li>\r\n                                <div class=\"d-inline float-right\">\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"optional3\" type=\"radio\" class=\"custom-control-input\" value=\"optional\"\r\n                                            name=\"setWorkerAssigned\" formControlName=\"setWorkerAssigned\">\r\n                                        <label class=\"custom-control-label\" for=\"optional3\">Optional</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"hidden3\" type=\"radio\" class=\"custom-control-input\" value=\"hidden\"\r\n                                            name=\"setWorkerAssigned\" formControlName=\"setWorkerAssigned\">\r\n                                        <label class=\"custom-control-label\" for=\"hidden3\">Hidden</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"required3\" type=\"radio\" class=\"custom-control-input\" value=\"required\"\r\n                                            name=\"setWorkerAssigned\" formControlName=\"setWorkerAssigned\">\r\n                                        <label class=\"custom-control-label\" for=\"required3\">Required</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <li class=\"list-group-item\">Allow Requesters to set Due Date</li>\r\n                                <div class=\"d-inline float-right\">\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"optional4\" type=\"radio\" class=\"custom-control-input\" value=\"optional\"\r\n                                            name=\"setDueDate\" formControlName=\"setDueDate\">\r\n                                        <label class=\"custom-control-label\" for=\"optional4\">Optional</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"hidden4\" type=\"radio\" class=\"custom-control-input\" value=\"hidden\"\r\n                                            name=\"setDueDate\" formControlName=\"setDueDate\">\r\n                                        <label class=\"custom-control-label\" for=\"hidden4\">Hidden</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"required4\" type=\"radio\" class=\"custom-control-input\" value=\"required\"\r\n                                            name=\"setDueDate\" formControlName=\"setDueDate\">\r\n                                        <label class=\"custom-control-label\" for=\"required4\">Required</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <li class=\"list-group-item\">Allow Requesters to set Category</li>\r\n                                <div class=\"d-inline float-right\">\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"optional5\" type=\"radio\" class=\"custom-control-input\" value=\"optional\"\r\n                                            name=\"setCategory\" formControlName=\"setCategory\">\r\n                                        <label class=\"custom-control-label\" for=\"optional5\">Optional</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"hidden5\" type=\"radio\" class=\"custom-control-input\" value=\"hidden\"\r\n                                            name=\"setCategory\" formControlName=\"setCategory\">\r\n                                        <label class=\"custom-control-label\" for=\"hidden5\">Hidden</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"required5\" type=\"radio\" class=\"custom-control-input\" value=\"required\"\r\n                                            name=\"setCategory\" formControlName=\"setCategory\">\r\n                                        <label class=\"custom-control-label\" for=\"required5\">Required</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <li class=\"list-group-item\">Allow Requesters to set Team</li>\r\n                                <div class=\"d-inline float-right\">\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"optional6\" type=\"radio\" class=\"custom-control-input\" value=\"optional\"\r\n                                            name=\"setTeam\" formControlName=\"setTeam\">\r\n                                        <label class=\"custom-control-label\" for=\"optional6\">Optional</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"hidden6\" type=\"radio\" class=\"custom-control-input\" value=\"hidden\"\r\n                                            name=\"setTeam\" formControlName=\"setTeam\">\r\n                                        <label class=\"custom-control-label\" for=\"hidden6\">Hidden</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio\">\r\n                                        <input id=\"required6\" type=\"radio\" class=\"custom-control-input\" value=\"required\"\r\n                                            name=\"setTeam\" formControlName=\"setTeam\">\r\n                                        <label class=\"custom-control-label\" for=\"required6\">Required</label>\r\n                                    </div>\r\n                                </div>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/asset-form/asset-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/asset-form/asset-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"assetForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Add an Image:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"image\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Title:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Description:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"desc\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Track Check-in/Check-out:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"track\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Model:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"model\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Barcode:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"barcode\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Category:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"category\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Location:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"location\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Area:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"area\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Parent Asset:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"parentAsset\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Worker:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"worker\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Additional Worker:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"additionalWorker\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Team:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"team\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Vendors:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"vendors\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Customers:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"customer\">\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group\">\r\n                    \r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Purchase Date\" formControlName=\"purchaseDate\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                          <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                        </mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                      \r\n                </div> -->\r\n                <div class=\"form-group\">\r\n                        <label>\r\n                          Purchase Date:\r\n                        </label>\r\n                        <div class=\"input-group date\">\r\n                          <div class=\"d-inline\">\r\n                            <input [matDatepicker]=\"picker\" type=\"text\" class=\"form-control\" formControlName=\"purchaseDate\">\r\n                          </div>\r\n                          <div class=\"d-inline\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                              <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                            </mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Placed in Service:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"placedInService\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Purchase Price:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"purchasePrice\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Warranty Expiration:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"warrantyExpiration\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Residual Price:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"residualPrice\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Useful Life:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"usefulLife\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Additional Information:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"additionalInformation\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>\r\n                        Add a file:\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"file\">\r\n                </div>\r\n\r\n\r\n                <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/custom-report-form/custom-report-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/custom-report-form/custom-report-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"customReportForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label>\r\n            Dashboard Name:\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"dashboardName\">\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/customer-form/customer-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/customer-form/customer-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmit()\">\r\n                <h4 class=\"card-title\">Add Customer</h4>\r\n                <div [formGroup]=\"customerDetails\">\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Customer Name:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Address:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Phone:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Website:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"website\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Email:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Customer Type:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"customerType\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Description:\r\n                        </label>\r\n                        <textarea class=\"form-control\" rows=\"4\" formControlName=\"desc\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <h4 class=\"card-title\">Billing Information</h4>\r\n                <div [formGroup]=\"billingInformation\">\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Name:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Address:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Address Line 2:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"addressLine2\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Address Line 3:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"addressLine3\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                            Currency:\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"currency\">\r\n                    </div>\r\n\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary mr-2\">Submit</button>\r\n                <button class=\"btn btn-light\">Cancel</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/file-form/file-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/file-form/file-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>file-form works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/location-form/location-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/location-form/location-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"locationForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <h3>Locations</h3>\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Title:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Address:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"address\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Parent Location:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"parentLocation\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Worker:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"worker\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Team:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"team\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Vendor:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendor\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Customer:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"customer\">\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-flat form-check-primary\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"isMapCordinate\">Include map cordinates: <i\r\n              class=\"input-helper\"></i></label>\r\n        </div>\r\n\r\n\r\n        <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/meter-form/meter-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/meter-form/meter-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"meterForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <h3>Add Meter</h3>\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Title:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Unit of Measurement:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"uom\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Upgrade Frequency:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"upgradeFrequency\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Category:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"category\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-sm btn-link btn-fw\" type=\"button\" [routerLink]=\"['../../categories']\">\r\n            Manage Categories\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Image:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"image\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Workers:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"workers\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Asset:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"asset\">\r\n        </div>\r\n\r\n        <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/part-form/part-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/part-form/part-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"partsInventoryForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <h3>Add Parts Inventory</h3>\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Title:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Description:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"desc\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Category:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"category\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Cost:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"cost\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Quantity:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"quantity\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Minimum Quantity:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"minQuantity\">\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-flat form-check-primary\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"nonStock\">Non-Stock<i\r\n              class=\"input-helper\"></i></label>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Barcode:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"barcode\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Area:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"area\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Additional Part Details:\r\n          </label>\r\n          <textarea class=\"form-control\" id=\"exampleTextarea1\" rows=\"4\" formControlName=\"addPartDetails\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Workers:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"workers\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Teams:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"teams\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Vendors:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendors\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Customer:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"customer\">\r\n        </div>\r\n        \r\n        <!-- Custom Data array -->\r\n        <!-- start -->\r\n        <div formArrayName=\"customDataArray\"\r\n          *ngFor=\"let customData of partsInventoryForm.get('customDataArray').controls; let i = index\">\r\n          <div [formGroupName]=\"i\" class=\"row\">\r\n            <div class=\"form-group col\">\r\n              <label>\r\n                Name:\r\n              </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>\r\n                Value:\r\n              </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"value\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>\r\n                Unit:\r\n              </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"unit\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end -->\r\n\r\n        <button class=\"btn btn-sm btn-link btn-fw\" (click)=\"addCustomData()\">+ Custom data</button>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Location:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"location\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Add a file:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"addAFile\">\r\n        </div>\r\n\r\n\r\n        <button class=\"btn btn-sm btn-link btn-fw\">+ Add File(unfinished)</button>\r\n\r\n        <div class=\"form-group\">\r\n          <label>\r\n            Add Image:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"addImage\">\r\n        </div>\r\n\r\n\r\n        <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/people-form/people-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/people-form/people-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]=\"peopleForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n                <div class=\"btn-group-vertical btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label class=\"btn btn-secondary active\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Administrator\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Technician\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Limited Technician\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> View Only\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Requester\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label>\r\n                    Enter email address:\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"emailId\">\r\n            </div>\r\n\r\n            <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n            <button class=\"btn btn-light\">Cancel</button>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/purchase-order-form/purchase-order-form.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/purchase-order-form/purchase-order-form.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <form [formGroup]=\"purchaseOrderForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\" col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Purchase Order Details</h4>\r\n                    <div formGroupName=\"purchaseOrderDetails\">\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Title:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Category:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"category\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Due Date:\r\n                            </label>\r\n                            <div class=\"input-group date\">\r\n                                <div class=\"d-inline\">\r\n                                    <input [matDatepicker]=\"picker\" type=\"text\" class=\"form-control\"\r\n                                        formControlName=\"dueDate\">\r\n                                </div>\r\n                                <div class=\"d-inline\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                                        <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                                    </mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker></mat-datepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Vendors/Third Party:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"vendors\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Additional Details:\r\n                            </label>\r\n                            <textarea class=\"form-control\" rows=\"4\" formControlName=\"additionalDetails\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Parts</h4>\r\n                    <div formGroupName=\"parts\">\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Requester Information</h4>\r\n                        <div formGroupName=\"requesterInformation\">\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Company Name:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"companyName\">\r\n                            </div>\r\n                            <div formGroupName=\"address\">\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        Address:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"address\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        City:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"city\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        State:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"state\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        Zip code:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Phone Number:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Fax Number:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"faxNumber\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-6 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Shipping Information</h4>\r\n                        <div formGroupName=\"shippingInformation\">\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Use Company Address:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"useCompanyAddress\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Ship to Name:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"shipToName\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Company Name:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"companyName\">\r\n                            </div>\r\n                            <div formGroupName=\"address\">\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        Address:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"address\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        City:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"city\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        State:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"state\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>\r\n                                        Zip code:\r\n                                    </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Phone Number:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    Fax Number:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"faxNumber\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Additional Information</h4>\r\n                    <div formGroupName=\"additionalInformation\">\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Purchase Order Date:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"purchaseOrderDate\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Requisitioner:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"requisitioner\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Shipping Method:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"shippingMethod\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                F.O.B Shipping Point:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"FOBShippingPoint\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Terms:\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"terms\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>\r\n                                Notes:\r\n                            </label>\r\n                            <textarea class=\"form-control\" rows=\"4\" formControlName=\"notes\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <button type=\"submit\" class=\"btn btn-primary mr-2\">Submit</button>\r\n                <button class=\"btn btn-light\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/request-form/request-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/request-form/request-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"requestForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div formGroupName=\"requesterInfoGroup\">\r\n          <h3>Requests</h3>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Title:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Description:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"desc\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Priority:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"priority\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Image:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"image\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              File:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"file\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-sm btn-link btn-fw\" type=\"button\">Add Uploaded File</button>\r\n        </div>\r\n\r\n        <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n        <button class=\"btn btn-light\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/team-form/team-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/team-form/team-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"teamForm\" (ngSubmit)=\"onSubmit()\">\r\n          \r\n            <h3>Create Team</h3>\r\n            <div class=\"form-group\">\r\n              <label>\r\n                Name:\r\n              </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label>\r\n                Description:\r\n              </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"desc\">\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label>\r\n                People in Team:\r\n              </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"peopleInTeam\">\r\n            </div>\r\n  \r\n  \r\n          <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n          <button class=\"btn btn-light\">Cancel</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/vendor-form/vendor-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/vendor-form/vendor-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- title for the page -->\r\n  <div class=\"page-header\">\r\n    <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n  </div>\r\n\r\n  <form [formGroup]=\"vendorForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"card p-5 w-50\">\r\n      <h4>Add Vendor</h4>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company Name\" formControlName=\"companyName\" required>\r\n        <mat-error>This field is mandatory.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Address\" formControlName=\"address\" required>\r\n        <mat-error>This field is mandatory.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n        <mat-error>This field is mandatory.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Website\" formControlName=\"website\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" required>\r\n        <mat-error>This field is mandatory.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n        <mat-error></mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Vendor Type\" formControlName=\"vendorType\">\r\n      </mat-form-field>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Description</mat-label>\r\n        <textarea matInput formControlName=\"desc\"></textarea>\r\n        <mat-hint align=\"end\">Max length 500</mat-hint>\r\n      </mat-form-field>\r\n\r\n      <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n      <button class=\"btn btn-light\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/work-order-form/work-order-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/work-order-form/work-order-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <form [formGroup]=\"workOrderForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"card p-5 w-50\">\r\n            <h4>Add Work Order</h4>\r\n            <br>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Title\" formControlName=\"title\" required>\r\n                <mat-error>This field is mandatory.</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Description</mat-label>\r\n                <textarea matInput formControlName=\"desc\"></textarea>\r\n                <mat-hint align=\"end\">Max length 500</mat-hint>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Image\" formControlName=\"image\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Due Date\" formControlName=\"dueDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"repeatingSchedule\" placeholder=\"Repeating Schedule\">\r\n                    <mat-option *ngFor=\"let repeatingSchedule of repeatingSchedules\" [value]=\"repeatingSchedule\">\r\n                        {{repeatingSchedule}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Estimated Duration\" formControlName=\"estimatedDuration\">\r\n            </mat-form-field>\r\n            <br>\r\n            <label>\r\n                Priority:\r\n                <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\"\r\n                    formControlName=\"priority\">\r\n                    <mat-button-toggle value=\"none\">None</mat-button-toggle>\r\n                    <mat-button-toggle value=\"low\">Low</mat-button-toggle>\r\n                    <mat-button-toggle value=\"midium\">Medium</mat-button-toggle>\r\n                    <mat-button-toggle value=\"high\">High</mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n            </label>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"category\" placeholder=\"Category\">\r\n                    <mat-option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"worker\" placeholder=\"Worker\">\r\n                    <mat-option *ngFor=\"let worker of workers\" [value]=\"worker\">{{worker}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-label>Additional Workers</mat-label>\r\n                <mat-select formControlName=\"additionalWorkers\" multiple>\r\n                    <mat-option *ngFor=\"let worker of workers\" [value]=\"worker\">{{worker}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"team\" placeholder=\"Team\">\r\n                    <mat-option *ngFor=\"let team of teams\" [value]=\"team\">{{team}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"location\" placeholder=\"Location\">\r\n                    <mat-option *ngFor=\"let location of locations\" [value]=\"location\">{{location}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-label>Asset</mat-label>\r\n                <mat-select formControlName=\"assets\" multiple>\r\n                    <mat-option *ngFor=\"let asset of assets\" [value]=\"asset\">{{asset}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            tasks and file\r\n            <br><br>\r\n            <mat-slide-toggle formControlName=\"signature\">Requires Signature!</mat-slide-toggle>\r\n            <br>\r\n            <button mat-raised-button [disabled]=\"workOrderForm.invalid\">Submit</button>\r\n\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/work-order-request-form/work-order-request-form.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/work-order-request-form/work-order-request-form.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h3>Create work order:</h3>\r\n      <form [formGroup]=\"workOrderRequestForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div formGroupName=\"requesterInfoGroup\">\r\n          <h4 class=\"card-title\">Requester Information</h4>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Full name:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"fullName\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Phone number:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Email:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\">\r\n          </div>\r\n        </div>\r\n        <div formGroupName=\"requestDetailsGroup\">\r\n          <h4 class=\"card-title\">Requester Details</h4>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Title:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Description:\r\n            </label>\r\n            <textarea class=\"form-control\" id=\"exampleTextarea1\" rows=\"4\" formControlName=\"desc\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Due Date:\r\n            </label>\r\n            <div class=\"input-group date\">\r\n              <div class=\"input-group\">\r\n                <input [matDatepicker]=\"picker\" type=\"text\" class=\"form-control\" formControlName=\"dueDate\">\r\n                <!-- <input matInput [matDatepicker]=\"picker\" placeholder=\"Due Date\" formControlName=\"dueDate\"> -->\r\n              \r\n              <div class=\"input-group-append\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                  <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n                </mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div formGroupName=\"filesGroup\">\r\n          <h4 class=\"card-title\">Files</h4>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Image:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"image\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              File:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"file\">\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary mr-2\">Submit</button>\r\n        <button class=\"btn btn-light\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\r\n    <div class=\"navbar-brand-wrapper d-flex align-items-center\">\r\n      <a class=\"navbar-brand brand-logo\" href=\"#\">\r\n        <img src=\"../../assets/images/logo.svg\" alt=\"logo\" class=\"logo-dark\">\r\n      </a>\r\n      <a class=\"navbar-brand brand-logo-mini\" href=\"../../assets/index.html\"><img src=\"../../assets/images/logo-mini.svg\" alt=\"logo\"></a>\r\n    </div>\r\n    <div class=\"navbar-menu-wrapper d-flex align-items-center flex-grow-1\">\r\n      <h5 class=\"mb-0 font-weight-medium d-none d-lg-flex\">{{title}}</h5>\r\n      <ul class=\"navbar-nav navbar-nav-right ml-auto\">      \r\n        <li class=\"nav-item\"><a href=\"assistant\" class=\"nav-link\"><i class=\"icon-bulb\"></i></a></li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link count-indicator message-dropdown\" id=\"messageDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n            <i class=\"icon-speech\"></i>\r\n            <span class=\"count\">7</span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0\" aria-labelledby=\"messageDropdown\">\r\n            <a class=\"dropdown-item py-3\">\r\n              <p class=\"mb-0 font-weight-medium float-left\">You have 7 unread mails </p>\r\n              <span class=\"badge badge-pill badge-primary float-right\">View all</span>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item preview-item\">\r\n              <div class=\"preview-thumbnail\">\r\n                <img src=\"../../assets/images/faces/face10.jpg\" alt=\"image\" class=\"img-sm profile-pic\"> </div>\r\n              <div class=\"preview-item-content flex-grow py-2\">\r\n                <p class=\"preview-subject ellipsis font-weight-medium text-dark\">Marian Garner </p>\r\n                <p class=\"font-weight-light small-text\"> The meeting is cancelled </p>\r\n              </div>\r\n            </a>\r\n            <a class=\"dropdown-item preview-item\">\r\n              <div class=\"preview-thumbnail\">\r\n                <img src=\"../../assets/images/faces/face12.jpg\" alt=\"image\" class=\"img-sm profile-pic\"> </div>\r\n              <div class=\"preview-item-content flex-grow py-2\">\r\n                <p class=\"preview-subject ellipsis font-weight-medium text-dark\">David Grey </p>\r\n                <p class=\"font-weight-light small-text\"> The meeting is cancelled </p>\r\n              </div>\r\n            </a>\r\n            <a class=\"dropdown-item preview-item\">\r\n              <div class=\"preview-thumbnail\">\r\n                <img src=\"../../assets/images/faces/face1.jpg\" alt=\"image\" class=\"img-sm profile-pic\"> </div>\r\n              <div class=\"preview-item-content flex-grow py-2\">\r\n                <p class=\"preview-subject ellipsis font-weight-medium text-dark\">Travis Jenkins </p>\r\n                <p class=\"font-weight-light small-text\"> The meeting is cancelled </p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </li>\r\n        \r\n        <li class=\"nav-item dropdown d-none d-xl-inline-flex user-dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"UserDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n            <img class=\"img-xs rounded-circle ml-2\" src=\"../../assets/images/faces/face8.jpg\" alt=\"Profile image\"> <span class=\"font-weight-normal\"> Henry Klein </span></a>\r\n          <div class=\"dropdown-menu dropdown-menu-right navbar-dropdown\" aria-labelledby=\"UserDropdown\">\r\n            <div class=\"dropdown-header text-center\">\r\n              <img class=\"img-md rounded-circle\" src=\"../../assets/images/faces/face8.jpg\" alt=\"Profile image\">\r\n              <p class=\"mb-1 mt-3\">Allen Moreno</p>\r\n              <p class=\"font-weight-light text-muted mb-0\">allenmoreno@gmail.com</p>\r\n            </div>\r\n            <a class=\"dropdown-item\"><i class=\"dropdown-item-icon icon-user text-primary\"></i> My Profile <span class=\"badge badge-pill badge-danger\">1</span></a>\r\n            <a class=\"dropdown-item\"><i class=\"dropdown-item-icon icon-speech text-primary\"></i> Messages</a>\r\n            <a class=\"dropdown-item\"><i class=\"dropdown-item-icon icon-energy text-primary\"></i> Activity</a>\r\n            <a class=\"dropdown-item\"><i class=\"dropdown-item-icon icon-question text-primary\"></i> FAQ</a>\r\n            <a class=\"dropdown-item\" href=\"/login\"><i class=\"dropdown-item-icon icon-power text-primary\"></i>Sign Out</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\r\n        <span class=\"icon-menu\"></span>\r\n      </button>\r\n    </div>\r\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/assets-page/assets-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/assets-page/assets-page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"icon-list\"></i> Table\r\n                    View</button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"icon-grid\"></i> Grid\r\n                    View</button>\r\n            </div>\r\n            <div class=\"align-right\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [routerLink]=\"['maintenance']\">Log & Planner</button>\r\n                <div class=\"dropdown\" style=\"display: inline;\">\r\n                    <button type=\"button\" class=\"btn btn-icon\" id=\"pageMenus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"icon-options-vertical\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"pageMenus\">\r\n                        <a *ngFor=\"let pageMenu of pageMenus\" class=\"dropdown-item\" href=\"#!\">{{pageMenu}}</a>\r\n                      </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['asset-form']\">Asset</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/assistant-page/assistant-page.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/assistant-page/assistant-page.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Assistant Page</h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/categories-page/categories-page.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/categories-page/categories-page.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab1'\"\r\n                    rel=\"tab1\" (click)=\"viewMode ='tab1'\">Work orders</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab2'\"\r\n                    rel=\"tab2\" (click)=\"viewMode ='tab2'\">Asset Status</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab3'\"\r\n                    rel=\"tab3\" (click)=\"viewMode ='tab3'\">Purchase Orders</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab4'\"\r\n                    rel=\"tab4\" (click)=\"viewMode ='tab4'\">Meter</button>\r\n            </div>\r\n\r\n            <!-- <div class=\"align-right\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['category-form']\">Category</button>\r\n            </div> -->\r\n\r\n            <div class=\"align-right\">\r\n                <button class=\"btn btn-sm btn-danger btn-rounded btn-fw\" type=\"button\" data-toggle=\"modal\"\r\n                    data-target=\"#myModal\">\r\n                    Category\r\n                </button>\r\n                <div class=\"modal fade\" id=\"myModal\">\r\n                    <div class=\"modal-dialog\">\r\n                        <div class=\"modal-content\">\r\n\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title\">Add a new Category</h4>\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                            </div>\r\n                            <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\">\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>\r\n                                            Category Name:\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"categoryName\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Modal footer -->\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\r\n                                    <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n                                </div>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <ul>\r\n                                <li *ngFor=\" let workOrderCategory of workOrderCategories\">{{workOrderCategory}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <ul>\r\n                                <li *ngFor=\" let assetStatus of assetStatus\">{{assetStatus}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab3'\">\r\n                            <ul>\r\n                                <li *ngFor=\" let purchaseOrder of purchaseOrders\">{{purchaseOrder}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div id=\"tab4\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab4'\">\r\n                            <ul>\r\n                                <li *ngFor=\" let meter of meters\">{{meter}}</li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact-us-page/contact-us-page.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact-us-page/contact-us-page.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact-us-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/files-page/files-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/files-page/files-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab1'\"\r\n                    rel=\"tab1\" (click)=\"viewMode ='tab1'\">Files</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab2'\"\r\n                    rel=\"tab2\" (click)=\"viewMode ='tab2'\">Summaries</button>\r\n            </div>\r\n\r\n            <div class=\"align-right\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['file-form']\">File</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <h2>Files Tab</h2>\r\n                            <p>Toggle switch style tab navigation. Currently only works with two tabs.</p>\r\n                            <p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus\r\n                                auctor\r\n                                fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\r\n                                vestibulum. Nullam\r\n                                id\r\n                                dolor id nibh ultricies vehicula ut id elit. Nulla\r\n                                vitae elit libero, a pharetra augue.</p>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <h2>Summaries Tab</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/locations-page/locations-page.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/locations-page/locations-page.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" [class.active]=\"viewMode == 'tab1'\"\r\n                    rel=\"tab1\" (click)=\"viewMode ='tab1'\"><i class=\"icon-list\"></i> List\r\n                    View</button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" [class.active]=\"viewMode == 'tab2'\"\r\n                    rel=\"tab2\" (click)=\"viewMode ='tab2'\"><i class=\"icon-map\"></i> Map\r\n                    View</button>\r\n            </div>\r\n\r\n\r\n            <div class=\"align-right\">\r\n                <div class=\"dropdown\" style=\"display: inline;\">\r\n                    <button type=\"button\" class=\"btn btn-icon\" id=\"pageMenus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"icon-options-vertical\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"pageMenus\">\r\n                        <a *ngFor=\"let pageMenu of pageMenus\" class=\"dropdown-item\" href=\"#!\">{{pageMenu}}</a>\r\n                      </div>\r\n                </div>\r\n                \r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['location-form']\">Location</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <h2>List View</h2>\r\n                            <p>Toggle switch style tab navigation. Currently only works with two tabs.</p>\r\n                            <p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus\r\n                                auctor\r\n                                fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\r\n                                vestibulum. Nullam\r\n                                id\r\n                                dolor id nibh ultricies vehicula ut id elit. Nulla\r\n                                vitae elit libero, a pharetra augue.</p>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <h2>Map View</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>log-and-planner-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/meters-page/meters-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/meters-page/meters-page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"align-right\">\r\n                <div class=\"dropdown\" style=\"display: inline;\">\r\n                    <button type=\"button\" class=\"btn btn-icon\" id=\"pageMenus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"icon-options-vertical\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"pageMenus\">\r\n                        <a *ngFor=\"let pageMenu of pageMenus\" class=\"dropdown-item\" href=\"#!\">{{pageMenu}}</a>\r\n                      </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['meter-form']\">Meter</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- title for the page -->\r\n<div class=\"page-header\">\r\n    <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n</div>\r\n<p>page-not-found works!</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/parts-page/parts-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/parts-page/parts-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"icon-list\"></i> Table\r\n                    View</button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"icon-grid\"></i> Grid\r\n                    View</button>\r\n            </div>\r\n            <div class=\"align-right\">\r\n                <div class=\"dropdown\" style=\"display: inline;\">\r\n                    <button type=\"button\" class=\"btn btn-icon\" id=\"pageMenus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"icon-options-vertical\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"pageMenus\">\r\n                        <a *ngFor=\"let pageMenu of pageMenus\" class=\"dropdown-item\" href=\"#!\">{{pageMenu}}</a>\r\n                      </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['part-form']\">Part</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/people-page/people-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/people-page/people-page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab1'\"\r\n                    rel=\"tab1\" (click)=\"viewMode ='tab1'\">People</button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab2'\"\r\n                    rel=\"tab2\" (click)=\"viewMode ='tab2'\">Teams</button>\r\n            </div>\r\n\r\n            <div class=\"align-right\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-link btn-fw\">Import</button>\r\n                <span [ngSwitch]=\"viewMode\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                        [routerLink]=\"['people-form']\" *ngSwitchCase=\"'tab1'\">Person\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                        [routerLink]=\"['team-form']\" *ngSwitchCase=\"'tab2'\">Team\r\n                    </button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <h2>People Tab</h2>\r\n                            <p>Toggle switch style tab navigation. Currently only works with two tabs.</p>\r\n                            <p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus\r\n                                auctor\r\n                                fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\r\n                                vestibulum. Nullam\r\n                                id\r\n                                dolor id nibh ultricies vehicula ut id elit. Nulla\r\n                                vitae elit libero, a pharetra augue.</p>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <h2>Teams Tab</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"align-right\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-link btn-fw\">Export</button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                    [routerLink]=\"['purchase-order-form']\">Purchase Order</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"filterbar\">\r\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-sm\"><i class=\"icon-magic-wand\"></i>\r\n                Filter</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/reports-page/reports-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/reports-page/reports-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab1'\"\r\n                    rel=\"tab1\" (click)=\"viewMode ='tab1'\">\r\n                    Leaderboard\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab2'\"\r\n                    rel=\"tab2\" (click)=\"viewMode ='tab2'\">\r\n                    Dashboard\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab3'\"\r\n                    rel=\"tab3\" (click)=\"viewMode ='tab3'\">\r\n                    Ratings\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"align-right\">\r\n                <button class=\"btn btn-sm btn-link btn-fw\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n                    + Add Custom Report\r\n                </button>\r\n                <div class=\"modal fade\" id=\"myModal\">\r\n                    <div class=\"modal-dialog\">\r\n                        <div class=\"modal-content\">\r\n                            <form [formGroup]=\"customReportForm\" (ngSubmit)=\"onSubmit()\">\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title\">Add Customizable Reporting</h4>\r\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label>\r\n                                            Dashboard Name:\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"dashboardName\">\r\n                                    </div>\r\n                                </div>\r\n                                <!-- Modal footer -->\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\r\n                                    <button class=\"btn btn-primary mr-2\" type=\"submit\">Submit</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"fliterbar\">\r\n            <button class=\"btn btn-light\" (click)=\"start.open()\">\r\n                <i class=\"icon-star d-block mb-1\"></i> Start\r\n            </button>\r\n            <button class=\"btn btn-light\" (click)=\"end.open()\">\r\n                <i class=\"icon-star d-block mb-1\"></i> End\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-light\">\r\n                <i class=\"icon-user d-block mb-1\"></i> Work Order Type\r\n            </button>\r\n\r\n        </div>\r\n        <div style=\"visibility: hidden;\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"start\" style=\"visibility: hidden;\">\r\n                <mat-datepicker #start></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"end\" style=\"visibility: hidden;\">\r\n                <mat-datepicker #end></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <h2>Leaderboard</h2>\r\n                            <p>Toggle switch style tab navigation. Currently only works with two tabs.</p>\r\n                            <p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus\r\n                                auctor\r\n                                fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\r\n                                vestibulum. Nullam\r\n                                id\r\n                                dolor id nibh ultricies vehicula ut id elit. Nulla\r\n                                vitae elit libero, a pharetra augue.</p>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <h2>Dashboard</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab3'\">\r\n                            <h2>Ratings</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/request-portal-page/request-portal-page.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/request-portal-page/request-portal-page.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Company Request Portal</h4>\r\n                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit officiis voluptatem adipisci harum\r\n                    corporis totam assumenda, vitae odit doloremque veniam et temporibus ullam incidunt dolorum\r\n                    voluptate. Temporibus nostrum neque maxime.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Work Order Requests</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"workOrderRequestUrl\" disabled>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Copy URL</button>\r\n                    </div>\r\n                </div>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi cupiditate molestiae inventore\r\n                    aliquam necessitatibus aperiam, voluptate, harum itaque saepe dolor id officia est vitae commodi,\r\n                    explicabo neque alias provident.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <button type=\"button\" class=\"btn btn-light btn-rounded\">Customize URL</button>\r\n        <button type=\"button\" class=\"btn btn-light btn-rounded\">Edit Public Request Form Items</button>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Log in to view requests</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"viewRequestUrl\" disabled>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Copy URL</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <p>Submit work requests by sending an email to your company's unique wom email address.</p>\r\n                <h4 class=\"card-title\">Create via Email</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"createRequestEmail\" disabled>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Copy URL</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <button type=\"button\" class=\"btn btn-light btn-rounded\"><i class=\"icon-note\"></i> Update Email ID</button>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <p>Submit work requests by sending an email to your company's unique wom email address.</p>\r\n                <h4 class=\"card-title\">Create via Request Portal</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"createRequestEmail\" disabled>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Copy URL</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <p>Submit work requests by sending an email to your company's unique wom email address.</p>\r\n                <h4 class=\"card-title\">Create via Email</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"createRequestEmail\" disabled>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Copy URL</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 grid-margin stretch-card\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">View Requests</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"viewRequestUrl\" disabled>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Copy URL</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/requests-page/requests-page.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/requests-page/requests-page.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- title for the page -->\r\n  <div class=\"page-header\">\r\n    <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n  </div>\r\n  <div class=\"card card-secondary\">\r\n    <div class=\"toolbar\">\r\n\r\n      <div class=\"align-right\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-link btn-fw\"\r\n          [routerLink]=\"['../form-templates/request-form-template']\">Edit request form</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\" [routerLink]=\"['request-form']\">Request\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"card card-secondary\">\r\n    <div class=\"filterbar\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded btn-sm\"><i class=\"icon-magic-wand\"></i>\r\n        Filter</button>\r\n\r\n      <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle btn-sm\" data-toggle=\"dropdown\"\r\n          aria-expanded=\"false\">Sort by:</button>\r\n        <div class=\"dropdown-menu\" x-placement=\"top-start\"\r\n          style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -110px, 0px);\">\r\n          <a class=\"dropdown-item\">Due Date</a>\r\n          <a class=\"dropdown-item\">Date Created</a>\r\n          <a class=\"dropdown-item\">Last Updated</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle btn-sm\" data-toggle=\"dropdown\"\r\n          aria-expanded=\"false\">Show:</button>\r\n        <div class=\"dropdown-menu\" x-placement=\"top-start\"\r\n          style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -110px, 0px);\">\r\n          <a class=\"dropdown-item\">All</a>\r\n          <a class=\"dropdown-item\">Reactive</a>\r\n          <a class=\"dropdown-item\">Repeating</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Hoverable Table</h4>\r\n      <p class=\"card-description\"> Add class <code>.table-hover</code>\r\n      </p>\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>User</th>\r\n            <th>Product</th>\r\n            <th>Sale</th>\r\n            <th>Status</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>Jacob</td>\r\n            <td>Photoshop</td>\r\n            <td class=\"text-danger\"> 28.76% <i class=\"icon-arrow-down-circle\"></i></td>\r\n            <td><label class=\"badge badge-danger\">Pending</label></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Messsy</td>\r\n            <td>Flash</td>\r\n            <td class=\"text-danger\"> 21.06% <i class=\"icon-arrow-down-circle\"></i></td>\r\n            <td><label class=\"badge badge-warning\">In progress</label></td>\r\n          </tr>\r\n          <tr>\r\n            <td>John</td>\r\n            <td>Premier</td>\r\n            <td class=\"text-danger\"> 35.00% <i class=\"icon-arrow-down-circle\"></i></td>\r\n            <td><label class=\"badge badge-info\">Fixed</label></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Peter</td>\r\n            <td>After effects</td>\r\n            <td class=\"text-success\"> 82.00% <i class=\"icon-arrow-up-circle\"></i></td>\r\n            <td><label class=\"badge badge-success\">Completed</label></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Dave</td>\r\n            <td>53275535</td>\r\n            <td class=\"text-success\"> 98.05% <i class=\"icon-arrow-up-circle\"></i></td>\r\n            <td><label class=\"badge badge-warning\">In progress</label></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-page></app-settings-page>\r\n<p>authentication-tab-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-page></app-settings-page>\r\n<p>automated-workflows-tab-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-page></app-settings-page>\r\n<p>checklists-tab-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-page></app-settings-page>\r\n<p>general-settings-tab-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/settings-page.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/settings-page.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav mat-tab-nav-bar>\r\n    <a mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.link\" routerLinkActive #rla=\"routerLinkActive\"\r\n        [active]=\"rla.isActive\">\r\n        {{link.label}}\r\n    </a>\r\n</nav>\r\n<!-- backup -->\r\n<!-- <nav mat-tab-nav-bar>\r\n        <a mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.link\" routerLinkActive #rla=\"routerLinkActive\"\r\n            [active]=\"rla.isActive\">\r\n            {{link.label}}\r\n        </a>\r\n    </nav> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-page></app-settings-page>\r\n<p>webhooks-tab-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-page></app-settings-page>\r\n<p>work-order-configuration-tab-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card card-secondary\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" [class.active]=\"viewMode == 'tab1'\"\r\n                                rel=\"tab1\" (click)=\"viewMode ='tab1'\">\r\n                                <i class=\"icon-star d-block mb-1\"></i> Shared with me </button>\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" [class.active]=\"viewMode == 'tab2'\"\r\n                                rel=\"tab2\" (click)=\"viewMode ='tab2'\">\r\n                                <i class=\"icon-reload d-block mb-1\"></i> Shared with others </button>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <h2>Shared with me</h2>\r\n                            <p>Toggle switch style tab navigation. Currently only works with two tabs.</p>\r\n                            <p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus\r\n                                auctor\r\n                                fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\r\n                                vestibulum. Nullam\r\n                                id\r\n                                dolor id nibh ultricies vehicula ut id elit. Nulla\r\n                                vitae elit libero, a pharetra augue.</p>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <h2>Shared with others</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/vendors-page/vendors-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/vendors-page/vendors-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n    <!-- title for the page -->\r\n    <div class=\"page-header\">\r\n        <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n    </div>\r\n    <div class=\"card card-secondary\">\r\n        <div class=\"toolbar\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab1'\"\r\n                    rel=\"tab1\" (click)=\"viewMode ='tab1'\">\r\n                    Vendors\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" [class.active]=\"viewMode == 'tab2'\"\r\n                    rel=\"tab2\" (click)=\"viewMode ='tab2'\">\r\n                    Customer\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"align-right\">\r\n                <div class=\"dropdown\" style=\"display: inline;\">\r\n                    <div class=\"dropdown\" style=\"display: inline;\">\r\n                        <button type=\"button\" class=\"btn btn-icon\" id=\"pageMenus\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"icon-options-vertical\"></i>\r\n                    </button>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"pageMenus\">\r\n                            <a *ngFor=\"let pageMenu of pageMenus\" class=\"dropdown-item\" href=\"#!\">{{pageMenu}}</a>\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n                <span [ngSwitch]=\"viewMode\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                        [routerLink]=\"['vendor-form']\" *ngSwitchCase=\"'tab1'\">Vendor\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n                        [routerLink]=\"['customer-form']\" *ngSwitchCase=\"'tab2'\">Customer\r\n                    </button>\r\n                </span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main-content\">\r\n        <!-- demo content -->\r\n        <div class=\"col-12 grid-margin stretch-card\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-slider--container\" [ngSwitch]=\"viewMode\">\r\n                        <div id=\"tab1\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab1'\">\r\n                            <h2>Vendors Tab</h2>\r\n                            <p>Toggle switch style tab navigation. Currently only works with two tabs.</p>\r\n                            <p>Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus\r\n                                auctor\r\n                                fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis\r\n                                vestibulum. Nullam\r\n                                id\r\n                                dolor id nibh ultricies vehicula ut id elit. Nulla\r\n                                vitae elit libero, a pharetra augue.</p>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-slider--body\" *ngSwitchCase=\"'tab2'\">\r\n                            <h2>Customers Tab</h2>\r\n                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                                Cras mattis\r\n                                consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras\r\n                                mattis\r\n                                consectetur purus sit amet fermentum. Aenean eu leo\r\n                                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/work-orders-page/work-orders-page.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/work-orders-page/work-orders-page.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- title for the page -->\r\n  <div class=\"page-header\">\r\n    <app-page-title [pageTitle]=\"pageTitle\"></app-page-title>\r\n  </div>\r\n\r\n  <div class=\"card card-secondary\">\r\n    <div class=\"toolbar\">\r\n      <div class=\"align-right\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-link btn-fw\" id=\"importWorkOrder\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Import/Export</button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"importWorkOrder\">\r\n          <a *ngFor=\"let importMenu of importMenus\" class=\"dropdown-item \" href=\"#\">{{importMenu}}</a>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-sm btn-link btn-fw\" routerLink=\"#\">Automate Workflows</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-danger btn-rounded btn-fw\"\r\n          [routerLink]=\"['work-order-form']\">Create work order</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card card-secondary\">\r\n    <div class=\"filterbar\">\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-rounded btn-icon\"><i class=\"icon-home\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw\"><i class=\"icon-people\"></i> Everyone</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw\"><i class=\"icon-map\"></i> Anywhere</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw\"><i class=\"icon-calendar\"></i> Any Day</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw\"><i class=\"icon-options\"></i> By Status</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw\"><i class=\"icon-chart\"></i> Any Priority</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw\"><i class=\"icon-tag\"></i> Bookmarked</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-light btn-fw align-right\"><i class=\"icon-energy\"></i> Quick\r\n        Filter</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"main-content\">\r\n    <!-- demo content -->\r\n    <div class=\"col-lg-12 grid-margin stretch-card\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Striped Table</h4>\r\n          <p class=\"card-description\"> Add class <code>.table-striped</code>\r\n          </p>\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th> User </th>\r\n                <th> First name </th>\r\n                <th> Progress </th>\r\n                <th> Amount </th>\r\n                <th> Deadline </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\">\r\n                </td>\r\n                <td> Herman Beck </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $ 77.99 </td>\r\n                <td> May 15, 2015 </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-2.png\" alt=\"image\">\r\n                </td>\r\n                <td> Messsy Adam </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $245.30 </td>\r\n                <td> July 1, 2015 </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-3.png\" alt=\"image\">\r\n                </td>\r\n                <td> John Richards </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $138.00 </td>\r\n                <td> Apr 12, 2015 </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-4.png\" alt=\"image\">\r\n                </td>\r\n                <td> Peter Meggik </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $ 77.99 </td>\r\n                <td> May 15, 2015 </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\">\r\n                </td>\r\n                <td> Edward </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"35\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $ 160.25 </td>\r\n                <td> May 03, 2015 </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-2.png\" alt=\"image\">\r\n                </td>\r\n                <td> John Doe </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $ 123.21 </td>\r\n                <td> April 05, 2015 </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"py-1\">\r\n                  <img src=\"../../assets/images/faces-clipart/pic-3.png\" alt=\"image\">\r\n                </td>\r\n                <td> Henry Tom </td>\r\n                <td>\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\"\r\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td> $ 150.00 </td>\r\n                <td> June 16, 2015 </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<button (click)=\"showData()\">show data</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenav/sidenav.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenav/sidenav.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\r\n    <ul class=\"nav\">\r\n        <li class=\"nav-item nav-profile\">\r\n            <a routerLink=\"#\" class=\"nav-link\">\r\n                <div class=\"profile-image\">\r\n                    <img class=\"img-xs rounded-circle\" src=\"../../assets/images/faces/face8.jpg\" alt=\"profile image\">\r\n                    <div class=\"dot-indicator bg-success\"></div>\r\n                </div>\r\n                <div class=\"text-wrapper\">\r\n                    <p class=\"profile-name\">Allen Moreno</p>\r\n                    <p class=\"designation\">Administrator</p>\r\n                </div>\r\n                <div class=\"icon-container\">\r\n                    <i class=\"icon-bubbles\"></i>\r\n                    <div class=\"dot-indicator bg-danger\"></div>\r\n                </div>\r\n            </a>\r\n        </li>\r\n\r\n        <!-- sidenav lists -->\r\n        <li class=\"nav-item nav-category\">\r\n            <span class=\"nav-link\">></span>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"work-orders\">\r\n                <span class=\"menu-title\">Work Orders</span>\r\n                <i class=\" icon-book-open menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"reports\">\r\n                <span class=\"menu-title\">Reports</span>\r\n                <i class=\"icon-graph menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"requests\">\r\n                <span class=\"menu-title\">Requests</span>\r\n                <i class=\" icon-drawer menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"shared-work-order\">\r\n                <span class=\"menu-title\">Shared Work Order</span>\r\n                <i class=\"icon-share-alt menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item nav-category\">\r\n            <span class=\"nav-link\">></span>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"locations\">\r\n                <span class=\"menu-title\">Locations</span>\r\n                <i class=\"icon-location-pin menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"assets\">\r\n                <span class=\"menu-title\">Assets</span>\r\n                <i class=\"icon-chemistry menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"parts\">\r\n                <span class=\"menu-title\">Parts/Inventory</span>\r\n                <i class=\"icon-wrench menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"purchase-orders\">\r\n                <span class=\"menu-title\">Purchase Orders</span>\r\n                <i class=\"icon-book-open menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"meters\">\r\n                <span class=\"menu-title\">Meters</span>\r\n                <i class=\"icon-speedometer menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item nav-category\">\r\n            <span class=\"nav-link\">></span>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"people\">\r\n                <span class=\"menu-title\">People & Teams</span>\r\n                <i class=\"icon-people menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"vendors\">\r\n                <span class=\"menu-title\">Vendors & Customers</span>\r\n                <i class=\"icon-people menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item nav-category\">\r\n            <span class=\"nav-link\">></span>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"categories\">\r\n                <span class=\"menu-title\">Categories</span>\r\n                <i class=\"icon-tag menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"files\">\r\n                <span class=\"menu-title\">Files</span>\r\n                <i class=\"icon-docs menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"request-portal\">\r\n                <span class=\"menu-title\">Request Portal</span>\r\n                <i class=\"icon-drawer menu-icon\"></i>\r\n            </a>\r\n        </li>\r\n\r\n    </ul>\r\n    <!-- <div style=\"padding: 20px;\">\r\n        <a href=\"/settings\" style=\"color: inherit; text-decoration:none;\"><i class=\"icon-settings icon-lg\"></i></a>\r\n    </div> -->\r\n    <div class=\"d-flex justify-content-around\">\r\n        <div class=\"p-2\"><a href=\"/settings\" style=\"color: inherit; text-decoration:none;\"><i\r\n                    class=\"icon-settings icon-md\"></i></a></div>\r\n        <div class=\"p-2\"><a href=\"/contact-info\" style=\"color: inherit; text-decoration:none;\"><i\r\n                    class=\"icon-info icon-md\"></i></a></div>\r\n    </div>\r\n\r\n\r\n\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test/test.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test/test.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/full-layout-pages/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/full-layout-pages/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\" style=\"margin-top:0px; height: 100%;\">\r\n    <div class=\"row flex-grow\">\r\n        <div class=\"col-lg-4 mx-auto\">\r\n            <div *ngIf=\"invalid\" class=\"alert alert-danger\" role=\"alert\">\r\n                invalid credential!\r\n            </div>\r\n            <div class=\"card\" style=\"border-radius: 5px;\">\r\n                <div class=\"auth-form-light text-left p-5\">\r\n                    <div class=\"brand-logo\">\r\n                        <img src=\"\" alt=\"\" srcset=\"\">\r\n                    </div>\r\n                    <h3>Login</h3>\r\n                    <br>\r\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"userId\" placeholder=\"email\" />\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"password\" />\r\n                        <br>\r\n                        <button class=\"btn btn-success btn-sm m-0 w-100\" type=\"submit\">Login</button>\r\n                    </form>\r\n                    <br>\r\n                    <p>Don't have an account?<a [routerLink]=\"['../register']\">Sign up</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/full-layout-pages/register/register.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/full-layout-pages/register/register.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\" style=\"margin-top:0px; height: 100%;\">\r\n    <div class=\"row flex-grow\">\r\n        <div class=\"col-lg-6 mx-auto\">\r\n            <div class=\"card\" style=\"border-radius: 5px;\">\r\n                <div class=\"auth-form-light text-left p-5\">\r\n                    <h3>Sign up!</h3>\r\n                    <br>\r\n                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n                        <label for=\"firstname\">First Name:</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\"/>\r\n                        <br>\r\n                        <label for=\"lastname\">Last Name:</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\"/>\r\n                        <br>\r\n                        <label for=\"email\">Email:</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\"/>\r\n                        <br>\r\n                        <label for=\"password\">Password:</label>\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\"/>\r\n                        <br>\r\n                        <label for=\"phone\">Phone Number:</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"phone\"/>\r\n                        <br>\r\n                        <label for=\"business-type\">Business Type</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"business_type\"/>\r\n                        <br>\r\n                        <label for=\"role\">Role:</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"role\"/>\r\n                        <br>\r\n                        <button class=\"btn btn-success btn-sm m-0 w-100\" type=\"submit\">Register</button>\r\n                    </form>\r\n                    <br>\r\n                    <footer>\r\n                        <p>Already have an account? <a [routerLink]=\"['../login']\">login</a></p>\r\n                    </footer>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_pages_work_orders_page_work_orders_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/work-orders-page/work-orders-page.component */ "./src/app/components/pages/work-orders-page/work-orders-page.component.ts");
/* harmony import */ var _components_pages_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/requests-page/requests-page.component */ "./src/app/components/pages/requests-page/requests-page.component.ts");
/* harmony import */ var _components_pages_reports_page_reports_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/reports-page/reports-page.component */ "./src/app/components/pages/reports-page/reports-page.component.ts");
/* harmony import */ var _components_pages_shared_work_orders_page_shared_work_orders_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/shared-work-orders-page/shared-work-orders-page.component */ "./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.ts");
/* harmony import */ var _components_pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/locations-page/locations-page.component */ "./src/app/components/pages/locations-page/locations-page.component.ts");
/* harmony import */ var _components_pages_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/assets-page/assets-page.component */ "./src/app/components/pages/assets-page/assets-page.component.ts");
/* harmony import */ var _components_pages_parts_page_parts_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/parts-page/parts-page.component */ "./src/app/components/pages/parts-page/parts-page.component.ts");
/* harmony import */ var _components_pages_purchase_orders_page_purchase_orders_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/purchase-orders-page/purchase-orders-page.component */ "./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.ts");
/* harmony import */ var _components_pages_meters_page_meters_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/meters-page/meters-page.component */ "./src/app/components/pages/meters-page/meters-page.component.ts");
/* harmony import */ var _components_pages_people_page_people_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/people-page/people-page.component */ "./src/app/components/pages/people-page/people-page.component.ts");
/* harmony import */ var _components_pages_vendors_page_vendors_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/vendors-page/vendors-page.component */ "./src/app/components/pages/vendors-page/vendors-page.component.ts");
/* harmony import */ var _components_pages_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/categories-page/categories-page.component */ "./src/app/components/pages/categories-page/categories-page.component.ts");
/* harmony import */ var _components_pages_files_page_files_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/files-page/files-page.component */ "./src/app/components/pages/files-page/files-page.component.ts");
/* harmony import */ var _components_forms_work_order_request_form_work_order_request_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forms/work-order-request-form/work-order-request-form.component */ "./src/app/components/forms/work-order-request-form/work-order-request-form.component.ts");
/* harmony import */ var _components_forms_request_form_request_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/forms/request-form/request-form.component */ "./src/app/components/forms/request-form/request-form.component.ts");
/* harmony import */ var _components_forms_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/forms/location-form/location-form.component */ "./src/app/components/forms/location-form/location-form.component.ts");
/* harmony import */ var _components_forms_asset_form_asset_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/forms/asset-form/asset-form.component */ "./src/app/components/forms/asset-form/asset-form.component.ts");
/* harmony import */ var _components_forms_people_form_people_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/forms/people-form/people-form.component */ "./src/app/components/forms/people-form/people-form.component.ts");
/* harmony import */ var _components_forms_vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/forms/vendor-form/vendor-form.component */ "./src/app/components/forms/vendor-form/vendor-form.component.ts");
/* harmony import */ var _components_forms_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/forms/customer-form/customer-form.component */ "./src/app/components/forms/customer-form/customer-form.component.ts");
/* harmony import */ var _components_forms_part_form_part_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forms/part-form/part-form.component */ "./src/app/components/forms/part-form/part-form.component.ts");
/* harmony import */ var _components_forms_purchase_order_form_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forms/purchase-order-form/purchase-order-form.component */ "./src/app/components/forms/purchase-order-form/purchase-order-form.component.ts");
/* harmony import */ var _components_forms_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/forms/meter-form/meter-form.component */ "./src/app/components/forms/meter-form/meter-form.component.ts");
/* harmony import */ var _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/page-not-found/page-not-found.component */ "./src/app/components/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_pages_request_portal_page_request_portal_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/request-portal-page/request-portal-page.component */ "./src/app/components/pages/request-portal-page/request-portal-page.component.ts");
/* harmony import */ var _components_form_templates_request_form_template_request_form_template_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/form-templates/request-form-template/request-form-template.component */ "./src/app/components/form-templates/request-form-template/request-form-template.component.ts");
/* harmony import */ var _components_forms_team_form_team_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/forms/team-form/team-form.component */ "./src/app/components/forms/team-form/team-form.component.ts");
/* harmony import */ var _components_pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/pages/contact-us-page/contact-us-page.component */ "./src/app/components/pages/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _components_pages_settings_page_authentication_tab_page_authentication_tab_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/pages/settings-page/authentication-tab-page/authentication-tab-page.component */ "./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_automated_workflows_tab_page_automated_workflows_tab_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component */ "./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_checklists_tab_page_checklists_tab_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/pages/settings-page/checklists-tab-page/checklists-tab-page.component */ "./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_general_settings_tab_page_general_settings_tab_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component */ "./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_webhooks_tab_page_webhooks_tab_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component */ "./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.ts");
/* harmony import */ var _components_pages_assistant_page_assistant_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/pages/assistant-page/assistant-page.component */ "./src/app/components/pages/assistant-page/assistant-page.component.ts");
/* harmony import */ var _components_pages_log_and_planner_page_log_and_planner_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/pages/log-and-planner-page/log-and-planner-page.component */ "./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.ts");
/* harmony import */ var _components_forms_work_order_form_work_order_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/forms/work-order-form/work-order-form.component */ "./src/app/components/forms/work-order-form/work-order-form.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _full_layout_pages_login_login_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./full-layout-pages/login/login.component */ "./src/app/full-layout-pages/login/login.component.ts");
/* harmony import */ var _full_layout_pages_register_register_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./full-layout-pages/register/register.component */ "./src/app/full-layout-pages/register/register.component.ts");










































const routes = [
    { path: '', redirectTo: '/work-orders', pathMatch: 'full' },
    { path: 'login', component: _full_layout_pages_login_login_component__WEBPACK_IMPORTED_MODULE_40__["LoginComponent"] },
    { path: 'register', component: _full_layout_pages_register_register_component__WEBPACK_IMPORTED_MODULE_41__["RegisterComponent"] },
    {
        path: '', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]], children: [
            { path: 'work-orders', component: _components_pages_work_orders_page_work_orders_page_component__WEBPACK_IMPORTED_MODULE_3__["WorkOrdersPageComponent"] },
            { path: 'reports', component: _components_pages_reports_page_reports_page_component__WEBPACK_IMPORTED_MODULE_5__["ReportsPageComponent"] },
            { path: 'requests', component: _components_pages_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_4__["RequestsPageComponent"] },
            { path: 'shared-work-order', component: _components_pages_shared_work_orders_page_shared_work_orders_page_component__WEBPACK_IMPORTED_MODULE_6__["SharedWorkOrdersPageComponent"] },
            { path: 'locations', component: _components_pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_7__["LocationsPageComponent"] },
            { path: 'assets', component: _components_pages_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_8__["AssetsPageComponent"] },
            { path: 'parts', component: _components_pages_parts_page_parts_page_component__WEBPACK_IMPORTED_MODULE_9__["PartsPageComponent"] },
            { path: 'purchase-orders', component: _components_pages_purchase_orders_page_purchase_orders_page_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseOrdersPageComponent"] },
            { path: 'meters', component: _components_pages_meters_page_meters_page_component__WEBPACK_IMPORTED_MODULE_11__["MetersPageComponent"] },
            { path: 'people', component: _components_pages_people_page_people_page_component__WEBPACK_IMPORTED_MODULE_12__["PeoplePageComponent"] },
            { path: 'vendors', component: _components_pages_vendors_page_vendors_page_component__WEBPACK_IMPORTED_MODULE_13__["VendorsPageComponent"] },
            { path: 'categories', component: _components_pages_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_14__["CategoriesPageComponent"] },
            { path: 'files', component: _components_pages_files_page_files_page_component__WEBPACK_IMPORTED_MODULE_15__["FilesPageComponent"] },
            { path: 'request-portal', component: _components_pages_request_portal_page_request_portal_page_component__WEBPACK_IMPORTED_MODULE_27__["RequestPortalPageComponent"] },
            { path: 'assistant', component: _components_pages_assistant_page_assistant_page_component__WEBPACK_IMPORTED_MODULE_36__["AssistantPageComponent"] },
            { path: 'contact-info', component: _components_pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_30__["ContactUsPageComponent"] },
            { path: 'maintenance', component: _components_pages_log_and_planner_page_log_and_planner_page_component__WEBPACK_IMPORTED_MODULE_37__["LogAndPlannerPageComponent"] },
            { path: 'settings', redirectTo: 'settings/general-settings', pathMatch: 'full' },
            { path: 'settings/authentication', component: _components_pages_settings_page_authentication_tab_page_authentication_tab_page_component__WEBPACK_IMPORTED_MODULE_31__["AuthenticationTabPageComponent"] },
            { path: 'settings/automated-workflows', component: _components_pages_settings_page_automated_workflows_tab_page_automated_workflows_tab_page_component__WEBPACK_IMPORTED_MODULE_32__["AutomatedWorkflowsTabPageComponent"] },
            { path: 'settings/checklists', component: _components_pages_settings_page_checklists_tab_page_checklists_tab_page_component__WEBPACK_IMPORTED_MODULE_33__["ChecklistsTabPageComponent"] },
            { path: 'settings/general-settings', component: _components_pages_settings_page_general_settings_tab_page_general_settings_tab_page_component__WEBPACK_IMPORTED_MODULE_34__["GeneralSettingsTabPageComponent"] },
            { path: 'settings/webhooks', component: _components_pages_settings_page_webhooks_tab_page_webhooks_tab_page_component__WEBPACK_IMPORTED_MODULE_35__["WebhooksTabPageComponent"] },
            { path: 'settings/work-order-configuration', component: _components_forms_work_order_request_form_work_order_request_form_component__WEBPACK_IMPORTED_MODULE_16__["WorkOrderRequestFormComponent"] },
            // from component routing
            { path: 'work-orders/work-order-form', component: _components_forms_work_order_form_work_order_form_component__WEBPACK_IMPORTED_MODULE_38__["WorkOrderFormComponent"] },
            { path: 'requests/request-form', component: _components_forms_request_form_request_form_component__WEBPACK_IMPORTED_MODULE_17__["RequestFormComponent"] },
            { path: 'locations/location-form', component: _components_forms_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_18__["LocationFormComponent"] },
            { path: 'assets/asset-form', component: _components_forms_asset_form_asset_form_component__WEBPACK_IMPORTED_MODULE_19__["AssetFormComponent"] },
            { path: 'people/people-form', component: _components_forms_people_form_people_form_component__WEBPACK_IMPORTED_MODULE_20__["PeopleFormComponent"] },
            { path: 'vendors/vendor-form', component: _components_forms_vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_21__["VendorFormComponent"] },
            { path: 'vendors/customer-form', component: _components_forms_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_22__["CustomerFormComponent"] },
            { path: 'parts/part-form', component: _components_forms_part_form_part_form_component__WEBPACK_IMPORTED_MODULE_23__["PartFormComponent"] },
            { path: 'purchase-orders/purchase-order-form', component: _components_forms_purchase_order_form_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_24__["PurchaseOrderFormComponent"] },
            { path: 'meters/meter-form', component: _components_forms_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_25__["MeterFormComponent"] },
            { path: 'people/team-form', component: _components_forms_team_form_team_form_component__WEBPACK_IMPORTED_MODULE_29__["TeamFormComponent"] },
            { path: 'form-templates/request-form-template', component: _components_form_templates_request_form_template_request_form_template_component__WEBPACK_IMPORTED_MODULE_28__["RequestFormTemplateComponent"] }
        ]
    },
    // { path: 'settings', component: SettingsPageComponent},
    // { path: 'settings',
    //       children: [
    //           { path: 'authentication', component: AuthenticationTabPageComponent },
    //           { path: 'automated-workflows', component: AutomatedWorkflowsTabPageComponent },
    //           { path: 'checklists', component: ChecklistsTabPageComponent },
    //           { path: 'general-settings', component: GeneralSettingsTabPageComponent },
    //           { path: 'webhooks', component: WebhooksTabPageComponent },
    //           { path: 'work-order-configuration', component: WorkOrderRequestFormComponent},
    //              { path: 'work-request-configuaration', component: WorkRequestConfigurationComponent },
    //       ] },
    { path: '**', component: _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_26__["PageNotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'wom-stellar';
        this.isLoggedIn = "true";
    }
    ngOnInit() {
        //this.isLoggedIn = localStorage.getItem('isLoggedIn');
        this.id = localStorage.getItem('token');
        this.role = localStorage.getItem('role');
        this.authService.currentStatus$.subscribe(x => this.isLoggedIn = x);
    }
    // temp signout button in app component
    logout() {
        this.authService.logout();
        this.isLoggedIn = localStorage.getItem('isLoggedIn');
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_pages_reports_page_reports_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/reports-page/reports-page.component */ "./src/app/components/pages/reports-page/reports-page.component.ts");
/* harmony import */ var _components_pages_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/requests-page/requests-page.component */ "./src/app/components/pages/requests-page/requests-page.component.ts");
/* harmony import */ var _components_pages_shared_work_orders_page_shared_work_orders_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/shared-work-orders-page/shared-work-orders-page.component */ "./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.ts");
/* harmony import */ var _components_pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/locations-page/locations-page.component */ "./src/app/components/pages/locations-page/locations-page.component.ts");
/* harmony import */ var _components_pages_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/assets-page/assets-page.component */ "./src/app/components/pages/assets-page/assets-page.component.ts");
/* harmony import */ var _components_pages_work_orders_page_work_orders_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/work-orders-page/work-orders-page.component */ "./src/app/components/pages/work-orders-page/work-orders-page.component.ts");
/* harmony import */ var _components_pages_parts_page_parts_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/parts-page/parts-page.component */ "./src/app/components/pages/parts-page/parts-page.component.ts");
/* harmony import */ var _components_pages_purchase_orders_page_purchase_orders_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/purchase-orders-page/purchase-orders-page.component */ "./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.ts");
/* harmony import */ var _components_pages_meters_page_meters_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/meters-page/meters-page.component */ "./src/app/components/pages/meters-page/meters-page.component.ts");
/* harmony import */ var _components_pages_people_page_people_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/people-page/people-page.component */ "./src/app/components/pages/people-page/people-page.component.ts");
/* harmony import */ var _components_pages_vendors_page_vendors_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/vendors-page/vendors-page.component */ "./src/app/components/pages/vendors-page/vendors-page.component.ts");
/* harmony import */ var _components_pages_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/categories-page/categories-page.component */ "./src/app/components/pages/categories-page/categories-page.component.ts");
/* harmony import */ var _components_pages_files_page_files_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/files-page/files-page.component */ "./src/app/components/pages/files-page/files-page.component.ts");
/* harmony import */ var _components_pages_request_portal_page_request_portal_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/request-portal-page/request-portal-page.component */ "./src/app/components/pages/request-portal-page/request-portal-page.component.ts");
/* harmony import */ var _components_forms_work_order_request_form_work_order_request_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forms/work-order-request-form/work-order-request-form.component */ "./src/app/components/forms/work-order-request-form/work-order-request-form.component.ts");
/* harmony import */ var _components_forms_request_form_request_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/forms/request-form/request-form.component */ "./src/app/components/forms/request-form/request-form.component.ts");
/* harmony import */ var _components_forms_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/forms/location-form/location-form.component */ "./src/app/components/forms/location-form/location-form.component.ts");
/* harmony import */ var _components_forms_asset_form_asset_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/forms/asset-form/asset-form.component */ "./src/app/components/forms/asset-form/asset-form.component.ts");
/* harmony import */ var _components_forms_part_form_part_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/forms/part-form/part-form.component */ "./src/app/components/forms/part-form/part-form.component.ts");
/* harmony import */ var _components_forms_purchase_order_form_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/forms/purchase-order-form/purchase-order-form.component */ "./src/app/components/forms/purchase-order-form/purchase-order-form.component.ts");
/* harmony import */ var _components_forms_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/forms/meter-form/meter-form.component */ "./src/app/components/forms/meter-form/meter-form.component.ts");
/* harmony import */ var _components_forms_people_form_people_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/forms/people-form/people-form.component */ "./src/app/components/forms/people-form/people-form.component.ts");
/* harmony import */ var _components_forms_vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/forms/vendor-form/vendor-form.component */ "./src/app/components/forms/vendor-form/vendor-form.component.ts");
/* harmony import */ var _components_forms_file_form_file_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/forms/file-form/file-form.component */ "./src/app/components/forms/file-form/file-form.component.ts");
/* harmony import */ var _components_forms_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/forms/customer-form/customer-form.component */ "./src/app/components/forms/customer-form/customer-form.component.ts");
/* harmony import */ var _components_forms_custom_report_form_custom_report_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/forms/custom-report-form/custom-report-form.component */ "./src/app/components/forms/custom-report-form/custom-report-form.component.ts");
/* harmony import */ var _components_forms_team_form_team_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/forms/team-form/team-form.component */ "./src/app/components/forms/team-form/team-form.component.ts");
/* harmony import */ var _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/pages/page-not-found/page-not-found.component */ "./src/app/components/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_form_templates_request_form_template_request_form_template_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/form-templates/request-form-template/request-form-template.component */ "./src/app/components/form-templates/request-form-template/request-form-template.component.ts");
/* harmony import */ var _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/page-title/page-title.component */ "./src/app/components/page-title/page-title.component.ts");
/* harmony import */ var _components_pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/pages/contact-us-page/contact-us-page.component */ "./src/app/components/pages/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _components_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/pages/settings-page/settings-page.component */ "./src/app/components/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _components_pages_settings_page_general_settings_tab_page_general_settings_tab_page_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component */ "./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_automated_workflows_tab_page_automated_workflows_tab_page_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component */ "./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_checklists_tab_page_checklists_tab_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/pages/settings-page/checklists-tab-page/checklists-tab-page.component */ "./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_authentication_tab_page_authentication_tab_page_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/pages/settings-page/authentication-tab-page/authentication-tab-page.component */ "./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_webhooks_tab_page_webhooks_tab_page_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component */ "./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.ts");
/* harmony import */ var _components_pages_settings_page_work_order_configuration_tab_page_work_order_configuration_tab_page_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component */ "./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.ts");
/* harmony import */ var _components_pages_assistant_page_assistant_page_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/pages/assistant-page/assistant-page.component */ "./src/app/components/pages/assistant-page/assistant-page.component.ts");
/* harmony import */ var _components_pages_log_and_planner_page_log_and_planner_page_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/pages/log-and-planner-page/log-and-planner-page.component */ "./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.ts");
/* harmony import */ var _components_forms_work_order_form_work_order_form_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/forms/work-order-form/work-order-form.component */ "./src/app/components/forms/work-order-form/work-order-form.component.ts");
/* harmony import */ var _imports_module_material_material_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./imports-module/material/material.module */ "./src/app/imports-module/material/material.module.ts");
/* harmony import */ var _full_layout_pages_login_login_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./full-layout-pages/login/login.component */ "./src/app/full-layout-pages/login/login.component.ts");
/* harmony import */ var _full_layout_pages_register_register_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./full-layout-pages/register/register.component */ "./src/app/full-layout-pages/register/register.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");


























































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["SidenavComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _components_pages_reports_page_reports_page_component__WEBPACK_IMPORTED_MODULE_12__["ReportsPageComponent"],
            _components_pages_requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_13__["RequestsPageComponent"],
            _components_pages_shared_work_orders_page_shared_work_orders_page_component__WEBPACK_IMPORTED_MODULE_14__["SharedWorkOrdersPageComponent"],
            _components_pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_15__["LocationsPageComponent"],
            _components_pages_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_16__["AssetsPageComponent"],
            _components_pages_work_orders_page_work_orders_page_component__WEBPACK_IMPORTED_MODULE_17__["WorkOrdersPageComponent"],
            _components_pages_parts_page_parts_page_component__WEBPACK_IMPORTED_MODULE_18__["PartsPageComponent"],
            _components_pages_purchase_orders_page_purchase_orders_page_component__WEBPACK_IMPORTED_MODULE_19__["PurchaseOrdersPageComponent"],
            _components_pages_meters_page_meters_page_component__WEBPACK_IMPORTED_MODULE_20__["MetersPageComponent"],
            _components_pages_people_page_people_page_component__WEBPACK_IMPORTED_MODULE_21__["PeoplePageComponent"],
            _components_pages_vendors_page_vendors_page_component__WEBPACK_IMPORTED_MODULE_22__["VendorsPageComponent"],
            _components_pages_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_23__["CategoriesPageComponent"],
            _components_pages_files_page_files_page_component__WEBPACK_IMPORTED_MODULE_24__["FilesPageComponent"],
            _components_pages_request_portal_page_request_portal_page_component__WEBPACK_IMPORTED_MODULE_25__["RequestPortalPageComponent"],
            _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__["PageNotFoundComponent"],
            _components_forms_custom_report_form_custom_report_form_component__WEBPACK_IMPORTED_MODULE_37__["CustomReportFormComponent"],
            _components_forms_work_order_request_form_work_order_request_form_component__WEBPACK_IMPORTED_MODULE_26__["WorkOrderRequestFormComponent"],
            _components_forms_request_form_request_form_component__WEBPACK_IMPORTED_MODULE_27__["RequestFormComponent"],
            _components_forms_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_28__["LocationFormComponent"],
            _components_forms_asset_form_asset_form_component__WEBPACK_IMPORTED_MODULE_29__["AssetFormComponent"],
            _components_forms_part_form_part_form_component__WEBPACK_IMPORTED_MODULE_30__["PartFormComponent"],
            _components_forms_purchase_order_form_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_31__["PurchaseOrderFormComponent"],
            _components_forms_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_32__["MeterFormComponent"],
            _components_forms_people_form_people_form_component__WEBPACK_IMPORTED_MODULE_33__["PeopleFormComponent"],
            _components_forms_vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_34__["VendorFormComponent"],
            _components_forms_file_form_file_form_component__WEBPACK_IMPORTED_MODULE_35__["FileFormComponent"],
            _components_forms_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_36__["CustomerFormComponent"],
            _components_test_test_component__WEBPACK_IMPORTED_MODULE_40__["TestComponent"],
            _components_form_templates_request_form_template_request_form_template_component__WEBPACK_IMPORTED_MODULE_41__["RequestFormTemplateComponent"],
            _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_42__["PageTitleComponent"],
            _components_forms_team_form_team_form_component__WEBPACK_IMPORTED_MODULE_38__["TeamFormComponent"],
            _components_pages_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_43__["ContactUsPageComponent"],
            _components_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_44__["SettingsPageComponent"],
            _components_pages_settings_page_general_settings_tab_page_general_settings_tab_page_component__WEBPACK_IMPORTED_MODULE_45__["GeneralSettingsTabPageComponent"],
            _components_pages_settings_page_automated_workflows_tab_page_automated_workflows_tab_page_component__WEBPACK_IMPORTED_MODULE_46__["AutomatedWorkflowsTabPageComponent"],
            _components_pages_settings_page_checklists_tab_page_checklists_tab_page_component__WEBPACK_IMPORTED_MODULE_47__["ChecklistsTabPageComponent"],
            _components_pages_settings_page_authentication_tab_page_authentication_tab_page_component__WEBPACK_IMPORTED_MODULE_48__["AuthenticationTabPageComponent"],
            _components_pages_settings_page_webhooks_tab_page_webhooks_tab_page_component__WEBPACK_IMPORTED_MODULE_49__["WebhooksTabPageComponent"],
            _components_pages_settings_page_work_order_configuration_tab_page_work_order_configuration_tab_page_component__WEBPACK_IMPORTED_MODULE_50__["WorkOrderConfigurationTabPageComponent"],
            _components_pages_assistant_page_assistant_page_component__WEBPACK_IMPORTED_MODULE_51__["AssistantPageComponent"],
            _components_pages_log_and_planner_page_log_and_planner_page_component__WEBPACK_IMPORTED_MODULE_52__["LogAndPlannerPageComponent"],
            _components_forms_work_order_form_work_order_form_component__WEBPACK_IMPORTED_MODULE_53__["WorkOrderFormComponent"],
            _full_layout_pages_login_login_component__WEBPACK_IMPORTED_MODULE_55__["LoginComponent"],
            _full_layout_pages_register_register_component__WEBPACK_IMPORTED_MODULE_56__["RegisterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _imports_module_material_material_module__WEBPACK_IMPORTED_MODULE_54__["MaterialModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_57__["AuthGuard"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/form-templates/request-form-template/request-form-template.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/form-templates/request-form-template/request-form-template.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS10ZW1wbGF0ZXMvcmVxdWVzdC1mb3JtLXRlbXBsYXRlL3JlcXVlc3QtZm9ybS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/form-templates/request-form-template/request-form-template.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/form-templates/request-form-template/request-form-template.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RequestFormTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormTemplateComponent", function() { return RequestFormTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RequestFormTemplateComponent = class RequestFormTemplateComponent {
    constructor(fb) {
        this.fb = fb;
        this.options = ['optional', 'hidden', 'required'];
        this.permissions = [
            { name: 'setAsset', desc: 'Allow Requesters to set Asset' },
            { name: 'setLocation', desc: 'Allow Requesters to set Location' },
            { name: 'setWorkerAssigned', desc: 'Allow Requesters to set Worker Assigned' },
            { name: 'setDueDate', desc: 'Allow Requesters to set Due Date' },
            { name: 'setCategory', desc: 'Allow Requesters to set Category' },
            { name: 'setTeam', desc: 'Allow Requesters to set Team' }
        ];
    }
    ngOnInit() {
        this.requestFormTemplateForm = this.fb.group({
            tasks: this.fb.group({
                taskItems: this.fb.array([])
            }),
            permissions: this.fb.group({
                setAsset: ['optional'],
                setLocation: ['optional'],
                setWorkerAssigned: ['optional'],
                setDueDate: ['optional'],
                setCategory: ['optional'],
                setTeam: ['optional']
            })
        });
    }
    createTask() {
        return this.fb.group({
            taskType: [''],
            question: [''],
            required: false
        });
    }
    addTask() {
        this.taskItems = this.requestFormTemplateForm.get('tasks.taskItems');
        this.taskItems.push(this.createTask());
    }
    onSubmit() {
        console.log(this.requestFormTemplateForm.value);
        console.log(this.requestFormTemplateForm.value);
    }
};
RequestFormTemplateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RequestFormTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-form-template',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-form-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-templates/request-form-template/request-form-template.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-form-template.component.scss */ "./src/app/components/form-templates/request-form-template/request-form-template.component.scss")).default]
    })
], RequestFormTemplateComponent);



/***/ }),

/***/ "./src/app/components/forms/asset-form/asset-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/asset-form/asset-form.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvYXNzZXQtZm9ybS9hc3NldC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forms/asset-form/asset-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/asset-form/asset-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AssetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetFormComponent", function() { return AssetFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AssetFormComponent = class AssetFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.assetForm = this.fb.group({
            image: [''],
            title: [''],
            desc: [''],
            track: [''],
            model: [''],
            barcode: [''],
            category: [''],
            location: [''],
            area: [''],
            parentAsset: [''],
            worker: [''],
            additionalWorker: [''],
            team: [''],
            vendors: [''],
            customer: [''],
            purchaseDate: [''],
            placedInService: [''],
            purchasePrice: [''],
            warrantyExpiration: [''],
            residualPrice: [''],
            usefulLife: [''],
            additionalInformation: [''],
            file: ['']
        });
    }
    onSubmit() {
        console.log(this.assetForm);
        console.log('Saved: ' + JSON.stringify(this.assetForm.value));
    }
};
AssetFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AssetFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asset-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/asset-form/asset-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-form.component.scss */ "./src/app/components/forms/asset-form/asset-form.component.scss")).default]
    })
], AssetFormComponent);



/***/ }),

/***/ "./src/app/components/forms/custom-report-form/custom-report-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/forms/custom-report-form/custom-report-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvY3VzdG9tLXJlcG9ydC1mb3JtL2N1c3RvbS1yZXBvcnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/forms/custom-report-form/custom-report-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/forms/custom-report-form/custom-report-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomReportFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReportFormComponent", function() { return CustomReportFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomReportFormComponent = class CustomReportFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomReportFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-report-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-report-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/custom-report-form/custom-report-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-report-form.component.scss */ "./src/app/components/forms/custom-report-form/custom-report-form.component.scss")).default]
    })
], CustomReportFormComponent);



/***/ }),

/***/ "./src/app/components/forms/customer-form/customer-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/customer-form/customer-form.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forms/customer-form/customer-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/customer-form/customer-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CustomerFormComponent = class CustomerFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.customerForm = this.fb.group({
            customerDetails: this.fb.group({
                name: [''],
                address: [''],
                phone: [''],
                website: [''],
                email: [''],
                customerType: [''],
                desc: ['']
            }),
            billingInformation: this.fb.group({
                name: [''],
                address: [''],
                addressLine2: [''],
                addressLine3: [''],
                currency: ['']
            })
        });
    }
    onSubmit() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
};
CustomerFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CustomerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/customer-form/customer-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-form.component.scss */ "./src/app/components/forms/customer-form/customer-form.component.scss")).default]
    })
], CustomerFormComponent);



/***/ }),

/***/ "./src/app/components/forms/file-form/file-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/file-form/file-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvZmlsZS1mb3JtL2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/forms/file-form/file-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/file-form/file-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: FileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFormComponent", function() { return FileFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileFormComponent = class FileFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
FileFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/file-form/file-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-form.component.scss */ "./src/app/components/forms/file-form/file-form.component.scss")).default]
    })
], FileFormComponent);



/***/ }),

/***/ "./src/app/components/forms/location-form/location-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/location-form/location-form.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvbG9jYXRpb24tZm9ybS9sb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forms/location-form/location-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/location-form/location-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: LocationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFormComponent", function() { return LocationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LocationFormComponent = class LocationFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.locationForm = this.fb.group({
            title: [''],
            address: [''],
            parentLocation: [''],
            worker: [''],
            team: [''],
            vendor: [''],
            customer: [''],
            isMapCordinate: ['']
        });
    }
    onSubmit() {
        console.log(this.locationForm);
        console.log('Saved: ' + JSON.stringify(this.locationForm.value));
    }
};
LocationFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LocationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/location-form/location-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location-form.component.scss */ "./src/app/components/forms/location-form/location-form.component.scss")).default]
    })
], LocationFormComponent);



/***/ }),

/***/ "./src/app/components/forms/meter-form/meter-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/meter-form/meter-form.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvbWV0ZXItZm9ybS9tZXRlci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forms/meter-form/meter-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/meter-form/meter-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: MeterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterFormComponent", function() { return MeterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let MeterFormComponent = class MeterFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.meterForm = this.fb.group({
            title: [''],
            uom: [''],
            upgradeFrequency: [''],
            category: [''],
            image: [''],
            workers: [''],
            asset: ['']
        });
    }
    onSubmit() {
        console.log(this.meterForm);
        console.log('Saved: ' + JSON.stringify(this.meterForm.value));
    }
};
MeterFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
MeterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meter-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meter-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/meter-form/meter-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meter-form.component.scss */ "./src/app/components/forms/meter-form/meter-form.component.scss")).default]
    })
], MeterFormComponent);



/***/ }),

/***/ "./src/app/components/forms/part-form/part-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/part-form/part-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvcGFydC1mb3JtL3BhcnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/forms/part-form/part-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/part-form/part-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: PartFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartFormComponent", function() { return PartFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PartFormComponent = class PartFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.partsInventoryForm = this.fb.group({
            title: [''],
            desc: [''],
            category: [''],
            cost: [''],
            quantity: [''],
            minQuantity: [''],
            nonStock: false,
            barcode: [''],
            area: [''],
            addPartDetails: [''],
            workers: [''],
            teams: [''],
            vendors: [''],
            customer: [''],
            customDataArray: this.fb.array([]),
            location: [''],
            addAFile: [''],
            // addFile:[''],
            addImage: ['']
        });
    }
    createCustomData() {
        return this.fb.group({
            name: [''],
            value: [''],
            unit: ['']
        });
    }
    addCustomData() {
        this.customDataArray = this.partsInventoryForm.get('customDataArray');
        this.customDataArray.push(this.createCustomData());
    }
    onSubmit() {
        console.log(this.partsInventoryForm);
        console.log('Saved: ' + JSON.stringify(this.partsInventoryForm.value));
    }
};
PartFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PartFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-part-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./part-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/part-form/part-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./part-form.component.scss */ "./src/app/components/forms/part-form/part-form.component.scss")).default]
    })
], PartFormComponent);



/***/ }),

/***/ "./src/app/components/forms/people-form/people-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/people-form/people-form.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvcGVvcGxlLWZvcm0vcGVvcGxlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/forms/people-form/people-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/people-form/people-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: PeopleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleFormComponent", function() { return PeopleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PeopleFormComponent = class PeopleFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.peopleForm = this.fb.group({
            userRole: [''],
            emailId: ['']
        });
    }
    onSubmit() {
        console.log(this.peopleForm);
        console.log('Saved: ' + JSON.stringify(this.peopleForm.value));
    }
};
PeopleFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PeopleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/people-form/people-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people-form.component.scss */ "./src/app/components/forms/people-form/people-form.component.scss")).default]
    })
], PeopleFormComponent);



/***/ }),

/***/ "./src/app/components/forms/purchase-order-form/purchase-order-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/forms/purchase-order-form/purchase-order-form.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvcHVyY2hhc2Utb3JkZXItZm9ybS9wdXJjaGFzZS1vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forms/purchase-order-form/purchase-order-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/forms/purchase-order-form/purchase-order-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PurchaseOrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderFormComponent", function() { return PurchaseOrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PurchaseOrderFormComponent = class PurchaseOrderFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.purchaseOrderForm = this.fb.group({
            purchaseOrderDetails: this.fb.group({
                title: [''],
                category: [''],
                dueDate: [''],
                vendors: [''],
                additionalDetails: ['']
            }),
            //  parts: this.fb.group({}),
            requesterInformation: this.fb.group({
                companyName: [''],
                address: this.fb.group({
                    address: [''],
                    city: [''],
                    state: [''],
                    zipCode: ['']
                }),
                phoneNumber: [''],
                faxNumber: ['']
            }),
            shippingInformation: this.fb.group({
                useCompanyAddress: [''],
                shipToName: [''],
                companyName: [''],
                address: this.fb.group({
                    address: [''],
                    city: [''],
                    state: [''],
                    zipCode: ['']
                }),
                phoneNumber: [''],
                faxNumber: ['']
            }),
            additionalInformation: this.fb.group({
                purchaseOrderDate: [''],
                requisitioner: [''],
                shippingMethod: [''],
                FOBShippingPoint: [''],
                terms: [''],
                notes: ['']
            })
        });
    }
    onSubmit() {
        console.log(this.purchaseOrderForm);
        console.log('Saved: ' + JSON.stringify(this.purchaseOrderForm.value));
    }
};
PurchaseOrderFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PurchaseOrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-order-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-order-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/purchase-order-form/purchase-order-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-order-form.component.scss */ "./src/app/components/forms/purchase-order-form/purchase-order-form.component.scss")).default]
    })
], PurchaseOrderFormComponent);



/***/ }),

/***/ "./src/app/components/forms/request-form/request-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/request-form/request-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvcmVxdWVzdC1mb3JtL3JlcXVlc3QtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/forms/request-form/request-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/request-form/request-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: RequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormComponent", function() { return RequestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RequestFormComponent = class RequestFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.requestForm = this.fb.group({
            title: [''],
            desc: [''],
            priority: [''],
            image: [''],
            file: ['']
        });
    }
    onSubmit() {
        console.log(this.requestForm);
        console.log('Saved: ' + JSON.stringify(this.requestForm.value));
    }
};
RequestFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RequestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/request-form/request-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-form.component.scss */ "./src/app/components/forms/request-form/request-form.component.scss")).default]
    })
], RequestFormComponent);



/***/ }),

/***/ "./src/app/components/forms/team-form/team-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/team-form/team-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvdGVhbS1mb3JtL3RlYW0tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/forms/team-form/team-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/team-form/team-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: TeamFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamFormComponent", function() { return TeamFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let TeamFormComponent = class TeamFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.teamForm = this.fb.group({
            name: [''],
            desc: [''],
            peopleInTeam: ['']
        });
    }
    onSubmit() {
        console.log(this.teamForm);
        console.log('Saved: ' + JSON.stringify(this.teamForm.value));
    }
};
TeamFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
TeamFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/team-form/team-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-form.component.scss */ "./src/app/components/forms/team-form/team-form.component.scss")).default]
    })
], TeamFormComponent);



/***/ }),

/***/ "./src/app/components/forms/vendor-form/vendor-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/vendor-form/vendor-form.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvdmVuZG9yLWZvcm0vdmVuZG9yLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/forms/vendor-form/vendor-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/vendor-form/vendor-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: VendorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorFormComponent", function() { return VendorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let VendorFormComponent = class VendorFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.vendorForm = this.fb.group({
            companyName: [''],
            address: [''],
            phone: [''],
            website: [''],
            name: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            vendorType: [''],
            desc: ['']
        });
    }
    onSubmit() {
        console.log(this.vendorForm);
        console.log('Saved: ' + JSON.stringify(this.vendorForm.value));
    }
};
VendorFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
VendorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/vendor-form/vendor-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor-form.component.scss */ "./src/app/components/forms/vendor-form/vendor-form.component.scss")).default]
    })
], VendorFormComponent);



/***/ }),

/***/ "./src/app/components/forms/work-order-form/work-order-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/forms/work-order-form/work-order-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvd29yay1vcmRlci1mb3JtL3dvcmstb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/forms/work-order-form/work-order-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/work-order-form/work-order-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WorkOrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderFormComponent", function() { return WorkOrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_form_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/form-data.service */ "./src/app/services/form-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let WorkOrderFormComponent = class WorkOrderFormComponent {
    constructor(fb, formData) {
        this.fb = fb;
        this.formData = formData;
        this.workers = [];
        this.assets = [];
        this.categories = [];
        this.teams = [];
        this.locations = [];
        this.repeatingSchedules = [];
    }
    ngOnInit() {
        this.workOrderForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)],
            image: [''],
            dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            repeatingSchedule: [''],
            estimatedDuration: [''],
            priority: [''],
            category: [''],
            worker: [''],
            additionalWorkers: [''],
            team: [''],
            location: [''],
            assets: [''],
            signature: ['']
        });
        this.workers = this.formData.getWorkers();
        this.assets = this.formData.getAssets();
        this.categories = this.formData.getWorkOrderCategories();
        this.teams = this.formData.getTeams();
        this.locations = this.formData.getLocations();
        this.repeatingSchedules = this.formData.getRepeatingSchedules();
    }
    onSubmit() {
        console.log(this.workOrderForm.value);
    }
};
WorkOrderFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_form_data_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"] }
];
WorkOrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-order-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/work-order-form/work-order-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order-form.component.scss */ "./src/app/components/forms/work-order-form/work-order-form.component.scss")).default]
    })
], WorkOrderFormComponent);



/***/ }),

/***/ "./src/app/components/forms/work-order-request-form/work-order-request-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/forms/work-order-request-form/work-order-request-form.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvd29yay1vcmRlci1yZXF1ZXN0LWZvcm0vd29yay1vcmRlci1yZXF1ZXN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/forms/work-order-request-form/work-order-request-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/forms/work-order-request-form/work-order-request-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WorkOrderRequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderRequestFormComponent", function() { return WorkOrderRequestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let WorkOrderRequestFormComponent = class WorkOrderRequestFormComponent {
    constructor(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
        this.submitted = false;
    }
    ngOnInit() {
        this.workOrderRequestForm = this.fb.group({
            requesterInfoGroup: this.fb.group({
                fullName: [''],
                phone: [''],
                email: [''],
            }),
            requestDetailsGroup: this.fb.group({
                title: [''],
                desc: [''],
                dueDate: ['']
            }),
            filesGroup: this.fb.group({
                image: [''],
                file: ['']
            })
        });
    }
    onSubmit() {
        // console.log(this.workOrderRequestForm);
        // console.log('Saved: ' + JSON.stringify(this.workOrderRequestForm.value));
        this.submitted = true;
        if (!this.workOrderRequestForm.valid) {
            return false;
        }
        else {
            this.apiService.createWorkOrderRequest(this.workOrderRequestForm.value).subscribe((res) => {
                console.log('Work order request successfully created!');
                // this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
            }, (error) => {
                console.log(error);
            });
        }
    }
};
WorkOrderRequestFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
WorkOrderRequestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-order-request-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order-request-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/work-order-request-form/work-order-request-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order-request-form.component.scss */ "./src/app/components/forms/work-order-request-form/work-order-request-form.component.scss")).default]
    })
], WorkOrderRequestFormComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/page-title/page-title.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/page-title/page-title.component.ts ***!
  \***************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleComponent = class PageTitleComponent {
    constructor() {
        this.title = "No title";
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageTitleComponent.prototype, "pageTitle", void 0);
PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-title',
        template: `
    <h2 class="page-title">{{pageTitle}}</h2>
  `
    })
], PageTitleComponent);



/***/ }),

/***/ "./src/app/components/pages/assets-page/assets-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/assets-page/assets-page.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYXNzZXRzLXBhZ2UvYXNzZXRzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/assets-page/assets-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/assets-page/assets-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: AssetsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsPageComponent", function() { return AssetsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsPageComponent = class AssetsPageComponent {
    constructor() {
        this.pageTitle = 'Assets';
        this.pageMenus = ['Manage Templates', 'Update', 'Import', 'Export Assets to CSV', 'Generate QR codes and Print PDF'];
    }
    ngOnInit() {
    }
};
AssetsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/assets-page/assets-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-page.component.scss */ "./src/app/components/pages/assets-page/assets-page.component.scss")).default]
    })
], AssetsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/assistant-page/assistant-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/assistant-page/assistant-page.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYXNzaXN0YW50LXBhZ2UvYXNzaXN0YW50LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/assistant-page/assistant-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/assistant-page/assistant-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AssistantPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantPageComponent", function() { return AssistantPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssistantPageComponent = class AssistantPageComponent {
    constructor() {
        this.pageTitle = "Assistant";
    }
    ngOnInit() {
    }
};
AssistantPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assistant-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assistant-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/assistant-page/assistant-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assistant-page.component.scss */ "./src/app/components/pages/assistant-page/assistant-page.component.scss")).default]
    })
], AssistantPageComponent);



/***/ }),

/***/ "./src/app/components/pages/categories-page/categories-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/categories-page/categories-page.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY2F0ZWdvcmllcy1wYWdlL2NhdGVnb3JpZXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/categories-page/categories-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/categories-page/categories-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageComponent", function() { return CategoriesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CategoriesPageComponent = class CategoriesPageComponent {
    constructor(fb) {
        this.fb = fb;
        this.pageTitle = "Categories";
        this.viewMode = "tab1";
        this.workOrderCategories = [];
        this.assetStatus = [];
        this.purchaseOrders = [];
        this.meters = [];
    }
    ngOnInit() {
        this.categoryForm = this.fb.group({
            categoryName: ['']
        });
    }
    onSubmit() {
        if (this.viewMode == 'tab1') {
            this.workOrderCategories.push(this.categoryForm.value.categoryName);
        }
        else if (this.viewMode == 'tab2') {
            this.assetStatus.push(this.categoryForm.value.categoryName);
        }
        else if (this.viewMode == 'tab3') {
            this.purchaseOrders.push(this.categoryForm.value.categoryName);
        }
        else if (this.viewMode == 'tab4') {
            this.meters.push(this.categoryForm.value.categoryName);
        }
        else {
            console.error('invalid ');
        }
    }
};
CategoriesPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CategoriesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/categories-page/categories-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-page.component.scss */ "./src/app/components/pages/categories-page/categories-page.component.scss")).default]
    })
], CategoriesPageComponent);



/***/ }),

/***/ "./src/app/components/pages/contact-us-page/contact-us-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/contact-us-page/contact-us-page.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC11cy1wYWdlL2NvbnRhY3QtdXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/contact-us-page/contact-us-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/contact-us-page/contact-us-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageComponent", function() { return ContactUsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsPageComponent = class ContactUsPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact-us-page/contact-us-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us-page.component.scss */ "./src/app/components/pages/contact-us-page/contact-us-page.component.scss")).default]
    })
], ContactUsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/files-page/files-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/files-page/files-page.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZmlsZXMtcGFnZS9maWxlcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/files-page/files-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/files-page/files-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: FilesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPageComponent", function() { return FilesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilesPageComponent = class FilesPageComponent {
    constructor() {
        this.pageTitle = "Files";
        this.viewMode = "tab1";
    }
    ngOnInit() {
    }
};
FilesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./files-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/files-page/files-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./files-page.component.scss */ "./src/app/components/pages/files-page/files-page.component.scss")).default]
    })
], FilesPageComponent);



/***/ }),

/***/ "./src/app/components/pages/locations-page/locations-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/locations-page/locations-page.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9jYXRpb25zLXBhZ2UvbG9jYXRpb25zLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/locations-page/locations-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/locations-page/locations-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsPageComponent", function() { return LocationsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocationsPageComponent = class LocationsPageComponent {
    constructor() {
        this.pageTitle = "Locations";
        this.viewMode = "tab1";
        this.pageMenus = ['Import', 'Export'];
    }
    ngOnInit() {
    }
};
LocationsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locations-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locations-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/locations-page/locations-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locations-page.component.scss */ "./src/app/components/pages/locations-page/locations-page.component.scss")).default]
    })
], LocationsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9nLWFuZC1wbGFubmVyLXBhZ2UvbG9nLWFuZC1wbGFubmVyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogAndPlannerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogAndPlannerPageComponent", function() { return LogAndPlannerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogAndPlannerPageComponent = class LogAndPlannerPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogAndPlannerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-and-planner-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-and-planner-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-and-planner-page.component.scss */ "./src/app/components/pages/log-and-planner-page/log-and-planner-page.component.scss")).default]
    })
], LogAndPlannerPageComponent);



/***/ }),

/***/ "./src/app/components/pages/meters-page/meters-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/meters-page/meters-page.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbWV0ZXJzLXBhZ2UvbWV0ZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/meters-page/meters-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/meters-page/meters-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: MetersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetersPageComponent", function() { return MetersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MetersPageComponent = class MetersPageComponent {
    constructor() {
        this.pageTitle = 'Meters';
        this.pageMenus = ['Import', 'Exports'];
    }
    ngOnInit() {
    }
};
MetersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meters-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meters-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/meters-page/meters-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meters-page.component.scss */ "./src/app/components/pages/meters-page/meters-page.component.scss")).default]
    })
], MetersPageComponent);



/***/ }),

/***/ "./src/app/components/pages/page-not-found/page-not-found.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/page-not-found/page-not-found.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/page-not-found/page-not-found.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() {
        this.pageTitle = "Page Not Found";
    }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/pages/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/pages/parts-page/parts-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/parts-page/parts-page.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGFydHMtcGFnZS9wYXJ0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/parts-page/parts-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/parts-page/parts-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: PartsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsPageComponent", function() { return PartsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartsPageComponent = class PartsPageComponent {
    constructor() {
        this.pageTitle = 'Parts';
        this.pageMenus = ['Update', 'Import', 'Export parts to CSV', 'Generate QR codes and Print PDF'];
    }
    ngOnInit() {
    }
};
PartsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parts-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parts-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/parts-page/parts-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parts-page.component.scss */ "./src/app/components/pages/parts-page/parts-page.component.scss")).default]
    })
], PartsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/people-page/people-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/people-page/people-page.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGVvcGxlLXBhZ2UvcGVvcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/people-page/people-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/people-page/people-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: PeoplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePageComponent", function() { return PeoplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PeoplePageComponent = class PeoplePageComponent {
    constructor() {
        this.pageTitle = 'People and Teams';
        this.viewMode = 'tab1';
        this.pageMenus = ['Import'];
    }
    ngOnInit() {
    }
};
PeoplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/people-page/people-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people-page.component.scss */ "./src/app/components/pages/people-page/people-page.component.scss")).default]
    })
], PeoplePageComponent);



/***/ }),

/***/ "./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcHVyY2hhc2Utb3JkZXJzLXBhZ2UvcHVyY2hhc2Utb3JkZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PurchaseOrdersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersPageComponent", function() { return PurchaseOrdersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PurchaseOrdersPageComponent = class PurchaseOrdersPageComponent {
    constructor() {
        this.pageTitle = "Purchase Orders";
    }
    ngOnInit() {
    }
};
PurchaseOrdersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-orders-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-orders-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-orders-page.component.scss */ "./src/app/components/pages/purchase-orders-page/purchase-orders-page.component.scss")).default]
    })
], PurchaseOrdersPageComponent);



/***/ }),

/***/ "./src/app/components/pages/reports-page/reports-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/reports-page/reports-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVwb3J0cy1wYWdlL3JlcG9ydHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/reports-page/reports-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/reports-page/reports-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageComponent", function() { return ReportsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ReportsPageComponent = class ReportsPageComponent {
    constructor(fb) {
        this.fb = fb;
        this.pageTitle = "Reports";
        this.viewMode = "tab1";
    }
    ngOnInit() {
        this.customReportForm = this.fb.group({
            dashboardName: ['']
        });
    }
    onSubmit() {
        console.log(this.customReportForm.value.dashboardName);
    }
};
ReportsPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ReportsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/reports-page/reports-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports-page.component.scss */ "./src/app/components/pages/reports-page/reports-page.component.scss")).default]
    })
], ReportsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/request-portal-page/request-portal-page.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/request-portal-page/request-portal-page.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVxdWVzdC1wb3J0YWwtcGFnZS9yZXF1ZXN0LXBvcnRhbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/request-portal-page/request-portal-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/request-portal-page/request-portal-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RequestPortalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPortalPageComponent", function() { return RequestPortalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequestPortalPageComponent = class RequestPortalPageComponent {
    constructor() {
        this.pageTitle = "Request Portal";
        this.workOrderRequestUrl = "https://requests.wom.com/#/publicrequest/sNjUXKiHCz";
        this.viewRequestUrl = "https://requests.wom.com/#/sNjUXKiHCz/login";
        this.createRequestEmail = "notifications+{Custom ID}@wom.com";
    }
    ngOnInit() {
    }
};
RequestPortalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-portal-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-portal-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/request-portal-page/request-portal-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-portal-page.component.scss */ "./src/app/components/pages/request-portal-page/request-portal-page.component.scss")).default]
    })
], RequestPortalPageComponent);



/***/ }),

/***/ "./src/app/components/pages/requests-page/requests-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/requests-page/requests-page.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVxdWVzdHMtcGFnZS9yZXF1ZXN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/requests-page/requests-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/requests-page/requests-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageComponent", function() { return RequestsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequestsPageComponent = class RequestsPageComponent {
    constructor() {
        this.pageTitle = "Requests";
        this.pageMenus = ['Edit Request Form'];
    }
    ngOnInit() {
    }
};
RequestsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requests-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./requests-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/requests-page/requests-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./requests-page.component.scss */ "./src/app/components/pages/requests-page/requests-page.component.scss")).default]
    })
], RequestsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS9hdXRoZW50aWNhdGlvbi10YWItcGFnZS9hdXRoZW50aWNhdGlvbi10YWItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AuthenticationTabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationTabPageComponent", function() { return AuthenticationTabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationTabPageComponent = class AuthenticationTabPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticationTabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication-tab-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authentication-tab-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authentication-tab-page.component.scss */ "./src/app/components/pages/settings-page/authentication-tab-page/authentication-tab-page.component.scss")).default]
    })
], AuthenticationTabPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS9hdXRvbWF0ZWQtd29ya2Zsb3dzLXRhYi1wYWdlL2F1dG9tYXRlZC13b3JrZmxvd3MtdGFiLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AutomatedWorkflowsTabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatedWorkflowsTabPageComponent", function() { return AutomatedWorkflowsTabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutomatedWorkflowsTabPageComponent = class AutomatedWorkflowsTabPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AutomatedWorkflowsTabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-automated-workflows-tab-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./automated-workflows-tab-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./automated-workflows-tab-page.component.scss */ "./src/app/components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component.scss")).default]
    })
], AutomatedWorkflowsTabPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS9jaGVja2xpc3RzLXRhYi1wYWdlL2NoZWNrbGlzdHMtdGFiLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChecklistsTabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistsTabPageComponent", function() { return ChecklistsTabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChecklistsTabPageComponent = class ChecklistsTabPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChecklistsTabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checklists-tab-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklists-tab-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklists-tab-page.component.scss */ "./src/app/components/pages/settings-page/checklists-tab-page/checklists-tab-page.component.scss")).default]
    })
], ChecklistsTabPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS9nZW5lcmFsLXNldHRpbmdzLXRhYi1wYWdlL2dlbmVyYWwtc2V0dGluZ3MtdGFiLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: GeneralSettingsTabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsTabPageComponent", function() { return GeneralSettingsTabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneralSettingsTabPageComponent = class GeneralSettingsTabPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
GeneralSettingsTabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general-settings-tab-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-settings-tab-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-settings-tab-page.component.scss */ "./src/app/components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component.scss")).default]
    })
], GeneralSettingsTabPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/settings-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/settings-page.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/settings-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/settings-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SettingsPageComponent = class SettingsPageComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angular-material-tab-router';
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'General Settings',
                link: '/settings/general-settings',
                index: 0
            }, {
                label: 'Automated Workflows',
                link: '/settings/automated-workflows',
                index: 1
            }, {
                label: 'Checklists',
                link: '/settings/checklists',
                index: 2
            }, {
                label: 'Authentication',
                link: '/settings/authentication',
                index: 3
            }, {
                label: 'Webhooks',
                link: '/settings/webhooks',
                index: 4
            }, {
                label: 'Work Order Configuration',
                link: '/settings/work-order-configuration',
                index: 5
            }, {
                label: 'Work Request Configuration',
                link: '/settings/work-request-configuration',
                index: 6
            }
        ];
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
};
SettingsPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/settings-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/components/pages/settings-page/settings-page.component.scss")).default]
    })
], SettingsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS93ZWJob29rcy10YWItcGFnZS93ZWJob29rcy10YWItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: WebhooksTabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhooksTabPageComponent", function() { return WebhooksTabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WebhooksTabPageComponent = class WebhooksTabPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
WebhooksTabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-webhooks-tab-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./webhooks-tab-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./webhooks-tab-page.component.scss */ "./src/app/components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component.scss")).default]
    })
], WebhooksTabPageComponent);



/***/ }),

/***/ "./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MtcGFnZS93b3JrLW9yZGVyLWNvbmZpZ3VyYXRpb24tdGFiLXBhZ2Uvd29yay1vcmRlci1jb25maWd1cmF0aW9uLXRhYi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: WorkOrderConfigurationTabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderConfigurationTabPageComponent", function() { return WorkOrderConfigurationTabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkOrderConfigurationTabPageComponent = class WorkOrderConfigurationTabPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkOrderConfigurationTabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-order-configuration-tab-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order-configuration-tab-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order-configuration-tab-page.component.scss */ "./src/app/components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component.scss")).default]
    })
], WorkOrderConfigurationTabPageComponent);



/***/ }),

/***/ "./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2hhcmVkLXdvcmstb3JkZXJzLXBhZ2Uvc2hhcmVkLXdvcmstb3JkZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SharedWorkOrdersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWorkOrdersPageComponent", function() { return SharedWorkOrdersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SharedWorkOrdersPageComponent = class SharedWorkOrdersPageComponent {
    constructor() {
        this.pageTitle = "Shared Work Orders";
        this.viewMode = "tab1";
    }
    ngOnInit() {
    }
};
SharedWorkOrdersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shared-work-orders-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shared-work-orders-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shared-work-orders-page.component.scss */ "./src/app/components/pages/shared-work-orders-page/shared-work-orders-page.component.scss")).default]
    })
], SharedWorkOrdersPageComponent);



/***/ }),

/***/ "./src/app/components/pages/vendors-page/vendors-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/vendors-page/vendors-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdmVuZG9ycy1wYWdlL3ZlbmRvcnMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/vendors-page/vendors-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/vendors-page/vendors-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: VendorsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPageComponent", function() { return VendorsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VendorsPageComponent = class VendorsPageComponent {
    constructor() {
        this.pageTitle = "Vendors/Customer Page";
        this.viewMode = "tab1";
        this.pageMenus = ['Import', 'Export'];
    }
    ngOnInit() {
    }
};
VendorsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendors-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendors-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/vendors-page/vendors-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendors-page.component.scss */ "./src/app/components/pages/vendors-page/vendors-page.component.scss")).default]
    })
], VendorsPageComponent);



/***/ }),

/***/ "./src/app/components/pages/work-orders-page/work-orders-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/work-orders-page/work-orders-page.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yay1vcmRlcnMtcGFnZS93b3JrLW9yZGVycy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/work-orders-page/work-orders-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/work-orders-page/work-orders-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkOrdersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrdersPageComponent", function() { return WorkOrdersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let WorkOrdersPageComponent = class WorkOrdersPageComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageTitle = "Work Order Page";
        this.pageMenus = ['Import/Export', 'Automate Workflows'];
        this.importMenus = ['Import', 'Export to CSV', 'Export to CSV'];
        this.workOrders = [];
    }
    ngOnInit() {
    }
    showData() {
        this.apiService.getWorkOrderRequests().subscribe(x => this.workOrders.push(x));
        console.log(this.workOrders);
    }
};
WorkOrdersPageComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
WorkOrdersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-orders-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-orders-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/work-orders-page/work-orders-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-orders-page.component.scss */ "./src/app/components/pages/work-orders-page/work-orders-page.component.scss")).default]
    })
], WorkOrdersPageComponent);



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#sidebar {\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L0M6XFxVc2Vyc1xcQURNSU5cXERvY3VtZW50c1xcd29tL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFye1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTIwMHB4O1xyXG59XHJcbiIsIiNzaWRlYmFyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavComponent = class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/components/sidenav/sidenav.component.scss")).default]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/components/test/test.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/components/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/full-layout-pages/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/full-layout-pages/login/login.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bGwtbGF5b3V0LXBhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/full-layout-pages/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/full-layout-pages/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.invalid = false;
        this.model = { userId: "admin", password: "admin@123", role: "admin" };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.returnUrl = '/work-orders';
        this.authService.logout();
    }
    get f() { return this.loginForm.controls; }
    login() {
        // stop here if form is invalid  
        if (this.loginForm.invalid) {
            console.log("invalid form");
        }
        else {
            if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {
                console.log("Login successful");
                //this.authService.authLogin(this.model);  
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token', this.model.userId);
                localStorage.setItem('role', this.model.role);
                this.authService.changeStatus("true");
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.message = "Please check your userid and password";
                this.invalid = true;
            }
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/full-layout-pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/full-layout-pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/full-layout-pages/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/full-layout-pages/register/register.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bGwtbGF5b3V0LXBhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/full-layout-pages/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/full-layout-pages/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RegisterComponent = class RegisterComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            business_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    register() {
        this.registerFormValue = this.registerForm.value;
        console.log(this.registerFormValue);
        console.log(this.registerForm.valid);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/full-layout-pages/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/full-layout-pages/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (this.isLoggedIn()) {
            return true;
        }
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login']);
        return false;
    }
    isLoggedIn() {
        let status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/imports-module/material/material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/imports-module/material/material.module.ts ***!
  \************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create
    createWorkOrderRequest(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all workOrderRequests
    getWorkOrderRequests() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get workOrderRequest
    getWorkOrderRequest(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Update workOrderRequest
    updateWorkOrderRequest(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete workOrderRequest
    deleteWorkOrderRequest(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AuthService = class AuthService {
    constructor() {
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentStatus$ = this.isLoggedIn.asObservable();
    }
    logout() {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
        this.changeStatus("false");
    }
    changeStatus(status) {
        this.isLoggedIn.next(status);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/form-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/form-data.service.ts ***!
  \***********************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormDataService = class FormDataService {
    constructor() {
        this.x_workOrderCategories = ['Category1', 'Category2', 'Category3'];
        this.x_workers = ['workera', 'workerb', 'workerc'];
        this.x_teams = ['ateam', 'bteam', 'cteam'];
        this.x_locations = ['loc_a', 'loc_b', 'loc_c'];
        this.x_assets = ['a1', 'a2', 'a3', 'a4', 'a5'];
        this.x_purchaseOrders = ['PO1', 'PO2', 'PO3', 'PO4'];
        this.x_repeatingSchedules = ['schedule1', 'schedule2', 'schedule3'];
    }
    getWorkOrderCategories() {
        return this.x_workOrderCategories;
    }
    getWorkers() {
        return this.x_workers;
    }
    getTeams() {
        return this.x_teams;
    }
    getLocations() {
        return this.x_locations;
    }
    getAssets() {
        return this.x_assets;
    }
    getPurchaseOrders() {
        return this.x_purchaseOrders;
    }
    getRepeatingSchedules() {
        return this.x_repeatingSchedules;
    }
};
FormDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Documents\wom\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map