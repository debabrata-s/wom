import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-orders-page',
  templateUrl: './purchase-orders-page.component.html',
  styleUrls: ['./purchase-orders-page.component.scss']
})
export class PurchaseOrdersPageComponent implements OnInit {
  pageTitle="Purchase Orders";
  constructor() { }

  ngOnInit() {
  }

}
