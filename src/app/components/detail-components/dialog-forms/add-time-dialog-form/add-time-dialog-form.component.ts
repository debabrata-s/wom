import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-time-dialog-form',
  templateUrl: './add-time-dialog-form.component.html',
  styleUrls: ['./add-time-dialog-form.component.scss']
})
export class AddTimeDialogFormComponent implements OnInit {
  users = [];
  timerOptions = [];
  constructor(public dialogRef:MatDialogRef<AddTimeDialogFormComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
