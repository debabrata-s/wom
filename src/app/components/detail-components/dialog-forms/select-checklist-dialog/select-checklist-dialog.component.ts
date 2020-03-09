import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-checklist-dialog',
  templateUrl: './select-checklist-dialog.component.html',
  styleUrls: ['./select-checklist-dialog.component.scss']
})
export class SelectChecklistDialogComponent implements OnInit {
  checklists = [
    { title: 'New Part Checklist', questions: 2 },
    { title: 'Delivery Checklist', questions: 7 },
  ];
  constructor(public dialogRef: MatDialogRef<SelectChecklistDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
