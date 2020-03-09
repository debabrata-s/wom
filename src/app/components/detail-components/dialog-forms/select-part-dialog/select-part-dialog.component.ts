import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-part-dialog',
  templateUrl: './select-part-dialog.component.html',
  styleUrls: ['./select-part-dialog.component.scss']
})
export class SelectPartDialogComponent implements OnInit {
  parts = ['Compressor','Tubes'];
  constructor(public dialogRef: MatDialogRef<SelectPartDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
