import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-page',
  templateUrl: './assets-page.component.html',
  styleUrls: ['./assets-page.component.scss']
})
export class AssetsPageComponent implements OnInit {
  pageTitle = 'Assets';
  pageMenus = ['Manage Templates', 'Update', 'Import', 'Export Assets to CSV', 'Generate QR codes and Print PDF'];
  constructor() { }

  ngOnInit() {
  }

}
