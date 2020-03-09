import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-file-dialog',
  templateUrl: './select-file-dialog.component.html',
  styleUrls: ['./select-file-dialog.component.scss']
})
export class SelectFileDialogComponent implements OnInit {
  files = ['broken_part.png','new_part.png'];
  constructor(public dialogRef: MatDialogRef<SelectFileDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
