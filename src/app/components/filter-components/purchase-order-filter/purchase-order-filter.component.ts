import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order-filter',
  templateUrl: './purchase-order-filter.component.html',
  styleUrls: ['./purchase-order-filter.component.scss']
})
export class PurchaseOrderFilterComponent implements OnInit {
  status = ['Awaiting Approval', 'Approved', 'Declined', 'Fulfilled', 'Partially Fulfilled'];
  users = ['user1', 'user2', 'user3', 'user4'];
  vendors = ['vendor1', 'vendor2', 'vendor3'];
  constructor() { }

  ngOnInit() {
  }

}
