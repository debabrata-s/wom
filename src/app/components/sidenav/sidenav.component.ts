import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  path: string;
  currentUrl: string = "/work-orders";
  isActive: number;
  constructor(private router: Router) {
    
  }

  ngOnInit() {
    //to change the behaviour of template for setting the nav-item to active
    $('.nav-item').on('click', function () {
      $(this).siblings().removeClass('active');
    });
    // this.active.currentUrl.subscribe(val => this.currentUrl = val);
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
    if (this.router.url === '/work-orders') {
      this.isActive = 1;
    }
  }

  toggleIsActive() {
    if (this.currentUrl.startsWith('/work-orders')) {
      this.isActive = 1;
    }
    else if (this.currentUrl.startsWith('/reports')) {
      this.isActive = 2;
    }
    else if (this.currentUrl.startsWith('/requests')) {
      this.isActive = 3;
    }
    else if (this.currentUrl.startsWith('/shared-work-order')) {
      this.isActive = 4;
    }
    else if (this.currentUrl.startsWith('/locations')) {
      this.isActive = 5;
    }
    else if (this.currentUrl.startsWith('/assets')) {
      this.isActive = 6;
    }
    else if (this.currentUrl.startsWith('/inventory')) {
      this.isActive = 7;
    }
    else if (this.currentUrl.startsWith('/purchase-orders')) {
      this.isActive = 8;
    }
    else if (this.currentUrl.startsWith('/meters')) {
      this.isActive = 9;
    }
    else if (this.currentUrl.startsWith('/people')) {
      this.isActive = 10;
    }
    else if (this.currentUrl.startsWith('/vendors')) {
      this.isActive = 11;
    }
    else if (this.currentUrl.startsWith('/categories')) {
      this.isActive = 12;
    }
    else if (this.currentUrl.startsWith('/files')) {
      this.isActive = 13;
    }
    else if (this.currentUrl.startsWith('/request-portal')) {
      this.isActive = 14;
    }
    else if (this.currentUrl.startsWith('/faq')) {
      this.isActive = 15;
    }


  }
}