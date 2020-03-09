import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-filter',
  templateUrl: './request-filter.component.html',
  styleUrls: ['./request-filter.component.scss']
})
export class RequestFilterComponent implements OnInit {
  priorities = ['Not Prioritized', 'Low', 'Medium', 'High'];
  users = ['user1', 'user2', 'user3', 'user4'];
  teams = ['team1', 'team2', 'team3'];
  workers = ['worker1', 'worker2', 'worker3'];
  locations = ['loc1', 'loc2', 'loc3'];
  assets = ['asset1', 'asset2', 'asset3'];
  categories = ['category1', 'category2', 'category3']
  constructor() { }

  ngOnInit() {
  }

}
