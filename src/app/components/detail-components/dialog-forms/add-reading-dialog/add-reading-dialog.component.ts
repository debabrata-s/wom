import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-reading-dialog',
  templateUrl: './add-reading-dialog.component.html',
  styleUrls: ['./add-reading-dialog.component.scss']
})
export class AddReadingDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddReadingDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
