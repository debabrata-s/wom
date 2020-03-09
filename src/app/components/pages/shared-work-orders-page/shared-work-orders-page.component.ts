import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DrawerService } from 'src/app/services/drawer.service';
class SharedWorkOrder {
  WorkorderName;
}
@Component({
  selector: 'app-shared-work-orders-page',
  templateUrl: './shared-work-orders-page.component.html',
  styleUrls: ['./shared-work-orders-page.component.scss']
})
export class SharedWorkOrdersPageComponent implements OnInit {
  pageTitle = "Shared Work Orders"
  viewMode = "tab1";
  sharedWorkOrders = [];

  constructor(private router: Router, private drawerService: DrawerService) {

  }
  ngOnInit() {

  }
  openOrderDetails() {
    this.router.navigate(['/work-orders']);
    this.drawerService.setDrawer('workOrderDetails');
    this.drawerService.toggleStatus();
    
  }
}
