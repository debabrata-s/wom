import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-purchase-order-dialog',
  templateUrl: './delete-purchase-order-dialog.component.html',
  styleUrls: ['./delete-purchase-order-dialog.component.scss']
})
export class DeletePurchaseOrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePurchaseOrderDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
