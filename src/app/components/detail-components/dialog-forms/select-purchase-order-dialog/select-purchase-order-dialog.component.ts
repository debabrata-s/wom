import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-purchase-order-dialog',
  templateUrl: './select-purchase-order-dialog.component.html',
  styleUrls: ['./select-purchase-order-dialog.component.scss']
})
export class SelectPurchaseOrderDialogComponent implements OnInit {
  purchaseOrders = [
    { title: 'purchase order 1', status: 'approved', parts: 7, cost: 15 },
    { title: 'Purchase order 3', status: 'requested', parts: 4, cost: 20 },
  ];
  constructor(public dialogRef: MatDialogRef<SelectPurchaseOrderDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
