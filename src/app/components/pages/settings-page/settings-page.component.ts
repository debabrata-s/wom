import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
  

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'General Settings',
        link: '/settings/general-settings',
        index: 0
      }, {
        label: 'Automated Workflows',
        link: '/settings/automated-workflows',
        index: 1
      }, {
        label: 'Checklists',
        link: '/settings/checklists',
        index: 2
      }, {
        label: 'Authentication',
        link: '/settings/authentication',
        index: 3
      }, {
        label: 'Webhooks',
        link: '/settings/webhooks',
        index: 4
      }, {
        label: 'Work Order Configuration',
        link: '/settings/work-order-configuration',
        index: 5
      }, {
        label: 'Work Request Configuration',
        link: '/settings/work-request-configuration',
        index: 6
      }

    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    
  }
}
