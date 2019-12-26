import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {
  pageTitle='People and Teams';
  viewMode = 'tab1';
  pageMenus = ['Import'];
  constructor() { }

  ngOnInit() {
  }

}
