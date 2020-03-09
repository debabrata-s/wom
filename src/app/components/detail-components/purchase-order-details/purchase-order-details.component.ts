import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DeletePurchaseOrderDialogComponent } from '../dialog-confirmations/delete-purchase-order-dialog/delete-purchase-order-dialog.component';
import { FulfillPurchaseOrderDialogComponent } from '../dialog-forms/fulfill-purchase-order-dialog/fulfill-purchase-order-dialog.component';

@Component({
  selector: 'app-purchase-order-details',
  templateUrl: './purchase-order-details.component.html',
  styleUrls: ['./purchase-order-details.component.scss']
})
export class PurchaseOrderDetailsComponent implements OnInit {
status ="requested";
  constructor(private router: Router, public dialogRef: MatDialogRef<PurchaseOrderDetailsComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }
  editPurchaseOrder() {
    this.closeDialog();
    this.router.navigate(['/purchase-orders/purchase-order-form']);
  }
  deletePurchaseOrder() {
    const dialogRef = this.dialog.open(DeletePurchaseOrderDialogComponent)
  }
  generatePdf(){}
  approveRequest(){
    this.status="approved";
  }
  fulfillRequest(){
    const dialogRef = this.dialog.open(FulfillPurchaseOrderDialogComponent,{
      width: '500px'
    })
  }
  declineRequest(){
    this.status="declined";
  }
  closeDialog() {
    this.dialogRef.close();
  }
}