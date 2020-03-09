import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-work-order-dialog',
  templateUrl: './delete-work-order-dialog.component.html',
  styleUrls: ['./delete-work-order-dialog.component.scss']
})
export class DeleteWorkOrderDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteWorkOrderDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
