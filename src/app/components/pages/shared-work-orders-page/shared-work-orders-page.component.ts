import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-work-orders-page',
  templateUrl: './shared-work-orders-page.component.html',
  styleUrls: ['./shared-work-orders-page.component.scss']
})
export class SharedWorkOrdersPageComponent implements OnInit {
  pageTitle = "Shared Work Orders"
  viewMode = "tab1";
  constructor() { }

  ngOnInit() {
  }

}
