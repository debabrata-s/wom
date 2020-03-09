import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-order-configuration-tab-page',
  templateUrl: './work-order-configuration-tab-page.component.html',
  styleUrls: ['./work-order-configuration-tab-page.component.scss']
})
export class WorkOrderConfigurationTabPageComponent implements OnInit {
  createWorkOrderFields = ['Description','Priority','Images','Assigned Users','Additional Assigned User','Assigned Team','Assigned Asset','Assigned Location','Due Date','Category','Purchase Orders','Files','Signature'];
  completeWorkOrderFields = ['Files', 'Tasks', 'Time', 'Parts', 'Cost'];
  viewMode='tab1';
  constructor() { }

  ngOnInit() {
  }

}
