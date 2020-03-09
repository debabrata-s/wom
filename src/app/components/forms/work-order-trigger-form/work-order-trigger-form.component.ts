import { Component, OnInit } from '@angular/core';
import { worker } from 'cluster';
import { MatDialog } from '@angular/material';
import { SelectPurchaseOrderDialogComponent } from '../../detail-components/dialog-forms/select-purchase-order-dialog/select-purchase-order-dialog.component';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-work-order-trigger-form',
  templateUrl: './work-order-trigger-form.component.html',
  styleUrls: ['./work-order-trigger-form.component.scss']
})
export class WorkOrderTriggerFormComponent implements OnInit {
  triggerTypes = ['Is Greater Than', 'Is Less Than', 'Is Equal To', 'Reaches Every'];
  workers = ['worker1', 'worker2', 'worker3'];
  teams = ['Team1', 'Team2', 'Team3'];
  categories = ['Damage','Electrical','Inspection','Meter Reading','None','Preventative','Project','Safety','Upgrade'];
  types = ['Task','Number Form Item','Text Form Item', 'Checklist Form Item', 'Multiple Choice Form']
  locations = ['location1','location2', 'location3'];
  assets = ['asset1', 'asset2', 'asset3'];
  workOrderTriggerForm: FormGroup;
  taskItems: FormArray;
  selection1 = -1;
  constructor(private dialog: MatDialog, private fb: FormBuilder, private drawerService: DrawerService) { }

  ngOnInit() {
    this.workOrderTriggerForm = this.fb.group({
      tasks: this.fb.group({
        taskItems: this.fb.array([])
      })
    });
  }
  createTask() {
    return this.fb.group({
      taskType: [''],
      question: ['']
    });
  }
  addTask() {
    this.taskItems = <FormArray>this.workOrderTriggerForm.get('tasks.taskItems');
    this.taskItems.push(this.createTask());
  }
  selectPurchaseOrder(){
    const dialogRef = this.dialog.open(SelectPurchaseOrderDialogComponent);
  }
  selectFile(){
    const dialogRef = this.dialog.open(SelectFileDialogComponent);
  }
  openMeterDetails(){
    this.drawerService.setDrawer('meterDetails');
  }
}

