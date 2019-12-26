import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meters-page',
  templateUrl: './meters-page.component.html',
  styleUrls: ['./meters-page.component.scss']
})
export class MetersPageComponent implements OnInit {
  pageTitle = 'Meters';
  pageMenus = ['Import', 'Exports'];
  constructor() { }

  ngOnInit() {
  }

}
