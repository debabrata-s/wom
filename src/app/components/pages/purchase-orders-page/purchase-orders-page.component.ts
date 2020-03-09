import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PurchaseOrderDetailsComponent } from '../../detail-components/purchase-order-details/purchase-order-details.component';

@Component({
  selector: 'app-purchase-orders-page',
  templateUrl: './purchase-orders-page.component.html',
  styleUrls: ['./purchase-orders-page.component.scss']
})
export class PurchaseOrdersPageComponent implements OnInit {
  pageTitle = "Purchase Orders";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDetails() {
    const dialogRef = this.dialog.open(PurchaseOrderDetailsComponent, {
      width: '800px',
      height: '800px'
    });
  }
}
