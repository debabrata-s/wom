import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-page',
  templateUrl: './ratings-page.component.html',
  styleUrls: ['./ratings-page.component.scss']
})
export class RatingsPageComponent implements OnInit {
  startDate = new Date('Wed Feb 12 2020 00:00:00 GMT+0530 (India Standard Time)');
  endDate = new Date('Wed Feb 27 2020 00:00:00 GMT+0530 (India Standard Time)');
  constructor() { }

  ngOnInit() {
  }

}
