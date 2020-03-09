import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-restock-dialog',
  templateUrl: './restock-dialog.component.html',
  styleUrls: ['./restock-dialog.component.scss']
})
export class RestockDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RestockDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
