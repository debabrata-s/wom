import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter-filter',
  templateUrl: './meter-filter.component.html',
  styleUrls: ['./meter-filter.component.scss']
})
export class MeterFilterComponent implements OnInit {
  locations = ['location1', 'location2', 'location3'];
  assets = ['asset1', 'asset2', 'asset3'];
  constructor() { }

  ngOnInit() {
  }

}
