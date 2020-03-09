import { Component, OnInit } from '@angular/core';
import { months } from 'moment';
import { MatDialog } from '@angular/material';
import { SelectChecklistDialogComponent } from '../../detail-components/dialog-forms/select-checklist-dialog/select-checklist-dialog.component';
import { PartDialogFormComponent } from '../../detail-components/dialog-forms/part-dialog-form/part-dialog-form.component';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-request-edit-form',
  templateUrl: './request-edit-form.component.html',
  styleUrls: ['./request-edit-form.component.scss']
})
export class RequestEditFormComponent implements OnInit {
  locations = ['location1', 'locations2', 'location3'];
  assets = ['asset1', 'asset2', 'asset3']
  categories = ['category1', 'category2', 'category3']
  workers = ['worker1', 'worker2', 'worker3']
  users = ['user1', 'user2', 'user3']
  teams = ['team1', 'team2', 'team3']
  schedules = ['Daily', 'Every Week', 'Every Two Weeks', 'Every months', 'Every 2 Months', 'Every 3 Months', 'Every Year']
  types = ['type1', 'type2', 'type3']
  requestEditForm: FormGroup;
  taskItems: FormArray;
  dataArray = [];
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.requestEditForm = this.fb.group({
      tasks: this.fb.group({
        taskItems: this.fb.array(this.dataArray)
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
    this.taskItems = <FormArray>this.requestEditForm.get('tasks.taskItems');
    this.taskItems.push(this.createTask());
  }
  removeTask(i) {
    this.dataArray.splice(i,1);
    this.taskItems.removeAt(i);
  }
  openChecklists() {
    const dialogRef = this.dialog.open(SelectChecklistDialogComponent);
  }
  openParts() {
    const dialogRef = this.dialog.open(PartDialogFormComponent);
  }
  openFileDialog() {
    const dialogRef = this.dialog.open(SelectFileDialogComponent);
  }
  onSubmit() { }
}
