import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-change-timer-category-dialog',
  templateUrl: './change-timer-category-dialog.component.html',
  styleUrls: ['./change-timer-category-dialog.component.scss']
})
export class ChangeTimerCategoryDialogComponent implements OnInit {
  categories = []
  constructor(public dialogRef: MatDialogRef<ChangeTimerCategoryDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
