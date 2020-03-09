import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;


  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Parts',
        link: '/inventory/parts',
        index: 0
      }, {
        label: 'Set of Parts',
        link: '/inventory/set-of-parts',
        index: 1
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

  }
}
