import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-page',
  templateUrl: './parts-page.component.html',
  styleUrls: ['./parts-page.component.scss']
})
export class PartsPageComponent implements OnInit {
  pageTitle = 'Parts';
  pageMenus = ['Update', 'Import', 'Export parts to CSV', 'Generate QR codes and Print PDF'];
  constructor() { }

  ngOnInit() {
  }

}
