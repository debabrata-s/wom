import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-filter',
  templateUrl: './asset-filter.component.html',
  styleUrls: ['./asset-filter.component.scss']
})
export class AssetFilterComponent implements OnInit {
  users = ['user1', 'user2', 'user3'];
  teams = ['team1', 'team2', 'team3'];
  vendors = ['vendor1', 'vendor2', 'vendor3'];
  customers = ['customer1', 'customer2', 'customer3'];
  opStatus = ['Operational', 'Not Operational', 'Asset1', 'Sub-asset'];
  durations = ['Years', 'Months', 'Weeks', 'Days'];
  selectedWarranty = -1;
  selection1 = -1;
  selection2 = -1;
  selection3 = -1;
  selection4 = -1;
  selection5 = -1;
  constructor() { }

  ngOnInit() {
  }

}
