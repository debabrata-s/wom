import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-work-orders-page',
  templateUrl: './work-orders-page.component.html',
  styleUrls: ['./work-orders-page.component.scss']
})
export class WorkOrdersPageComponent implements OnInit{
  pageTitle = "Work Order Page";
  pageMenus = ['Import/Export', 'Automate Workflows'];
  importMenus = ['Import', 'Export to CSV', 'Export to CSV'];
  workOrders = [];
  
  constructor(private apiService: ApiService) { }
  ngOnInit() {
  }
 
  
  showData() {
    this.apiService.getWorkOrderRequests().subscribe(x => this.workOrders.push(x));
    console.log(this.workOrders);
  }

}
