import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-order-filter',
  templateUrl: './work-order-filter.component.html',
  styleUrls: ['./work-order-filter.component.scss']
})
export class WorkOrderFilterComponent implements OnInit {
  assets = ['a1', 'a2', 'a3'];
  teams = ['t1', 't2', 't3'];
  categories = ['c1', 'c2', 'c3'];
  parts = ['p1', 'p2', 'p3', 'p4'];
  files = ['f1', 'f2', 'f3', 'f4'];
  people = ['p1', 'p2', 'p3', 'p4'];
  selection1 = -1;
  selection2 = -1;
  constructor() { }
  toggleFilter() {

  }

  ngOnInit() {

  }
  onSubmit() { }

}
