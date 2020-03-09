import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  status = ['Show both', 'Reactive only', 'Repeating only']
  showStats = false;
  archivedOptions = ['Hide Archived', 'Include Archived', 'Show Only Archived'];
  priorities = ['Any', 'Not Prioritized', 'Low', 'Medium', 'High'];
  users = ['user1', 'user2', 'user3'];
  teams = ['team1', 'team2', 'team3'];
  locations = ['location1', 'location2', 'location3'];
  assets = ['asset1', 'asset2', 'asset3'];
  categories = ['category1', 'category2', 'category3'];
  constructor() { }

  ngOnInit() {
  }

}
