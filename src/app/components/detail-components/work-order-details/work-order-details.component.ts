import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PartDialogFormComponent } from '../dialog-forms/part-dialog-form/part-dialog-form.component';
import { AdditionalCostDialogFormComponent } from '../dialog-forms/additional-cost-dialog-form/additional-cost-dialog-form.component';
import { AddFilesDialogFormComponent } from '../dialog-forms/add-files-dialog-form/add-files-dialog-form.component';
import { DeleteWorkOrderDialogComponent } from '../dialog-confirmations/delete-work-order-dialog/delete-work-order-dialog.component';
import { EventEmitter } from 'protractor';
import { AddTimeDialogFormComponent } from '../dialog-forms/add-time-dialog-form/add-time-dialog-form.component';
import { ChangeTimerCategoryDialogComponent } from '../dialog-forms/change-timer-category-dialog/change-timer-category-dialog.component';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.scss']
})
export class WorkOrderDetailsComponent implements OnInit {
  drawerTitle = "Work Order Details"
  date = '01/30/20';
  time = '11:47 am';
  woId = '001';
  title = "Broken fridge";
  desc = 'desc about the broken fridge';
  woDetails: boolean = true;
  timerLog: boolean = false;
  showTimeFields = true;
  //bookmark status
  status: boolean = false;
  //dropdown status
  orderStatus = [{ name: 'Open', class: 'btn-danger' }, { name: 'In Progress', class: 'btn-success' }, { name: 'On Hold', class: 'btn-warning' }, { name: 'Complete', class: 'btn-secondary' },];
  selectedStatus = this.orderStatus[0];
  //parent block of work order edit and additional cost
  showOtherBlock = false;
  //switch form workorder details to cost details
  showCostDetails = false;
  //switch form workorder to work order edit form
  showWOEditForm = false;
  //log title in addtional cost details
  toggleLog: string;
  showLog = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addTimeFields() {
    console.log("add time clicked");
  }
  addPart() {
    const dialogRef = this.dialog.open(PartDialogFormComponent, {
      width: '600px',
      height: '500px'
    })
  }
  addAdditionalCost() {
    const dialogRef = this.dialog.open(AdditionalCostDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
  addFile() {
    const dialogRef = this.dialog.open(AddFilesDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
  addTime() {
    const dialogRef = this.dialog.open(AddTimeDialogFormComponent, {

    })
  }
  detailViewCost() {
    this.showOtherBlock = true;
    this.showCostDetails = true;
    this.drawerTitle = "Additional Costs"
  }
  showWorkOrderEditForm() {
    this.showOtherBlock = true;
    this.showCostDetails = false;
    this.drawerTitle = "Edit Work Order"
  }

  toggleBookmark() {
    this.status = !this.status;
  }
  showWorkOrderDetails() {
    this.showOtherBlock = false;
    this.drawerTitle = "Work Order Details"
  }
  toggleAddtionalCostLog() {
    this.showLog = !this.showLog;
  }
  deleteWorkOrder() {
    const dialogRef = this.dialog.open(DeleteWorkOrderDialogComponent, {
      width: '600px',
      height: '300px'
    })
  }
  changeTimerCategory(){
    const dialogRef = this.dialog.open(ChangeTimerCategoryDialogComponent)
  }

}
