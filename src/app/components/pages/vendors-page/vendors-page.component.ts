import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors-page',
  templateUrl: './vendors-page.component.html',
  styleUrls: ['./vendors-page.component.scss']
})
export class VendorsPageComponent implements OnInit {
  pageTitle="Vendors/Customer Page";
  viewMode = "tab1";
  pageMenus = ['Import', 'Export'];
  constructor() { }

  ngOnInit() {
  }
 
}
