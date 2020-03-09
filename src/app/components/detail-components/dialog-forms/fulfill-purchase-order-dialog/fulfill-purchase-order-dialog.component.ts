import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-fulfill-purchase-order-dialog',
  templateUrl: './fulfill-purchase-order-dialog.component.html',
  styleUrls: ['./fulfill-purchase-order-dialog.component.scss']
})
export class FulfillPurchaseOrderDialogComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<FulfillPurchaseOrderDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.matDialogRef.close();
  }

}
