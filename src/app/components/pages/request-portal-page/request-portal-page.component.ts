import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-portal-page',
  templateUrl: './request-portal-page.component.html',
  styleUrls: ['./request-portal-page.component.scss']
})
export class RequestPortalPageComponent implements OnInit {
  pageTitle = "Request Portal";
  showPortal = false;
  enablePurchaseOrderPublic = false;
  workOrderRequestUrl="https://requests.wom.com/#/publicrequest/sNjUXKiHCz";
  viewRequestUrl="https://requests.wom.com/#/sNjUXKiHCz/login";
  createRequestEmail="notifications+{Custom ID}@wom.com";
  constructor() { }

  ngOnInit() {
  }

}
