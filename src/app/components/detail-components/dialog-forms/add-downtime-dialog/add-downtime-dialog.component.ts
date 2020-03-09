import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-downtime-dialog',
  templateUrl: './add-downtime-dialog.component.html',
  styleUrls: ['./add-downtime-dialog.component.scss']
})
export class AddDowntimeDialogComponent implements OnInit {
  users = ['user1', 'user2', 'user3'];
  opStatus = ['Not Operational', 'Offline: asset1', 'Offline: subasset'];
  constructor(public dialogRef:MatDialogRef<AddDowntimeDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
