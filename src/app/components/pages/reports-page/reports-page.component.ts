import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustomReportFormComponent } from '../../forms/custom-report-form/custom-report-form.component';
import { filter } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service'; 
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {
  pageTitle = "Reports";
  // viewMode: String = "tab1";
  navLinks: any[];
  activeLinkIndex = -1;
  selected: {startDate: moment.Moment, endDate: moment.Moment};
  customReports = [];
  customReportFormDialogRef: MatDialogRef<CustomReportFormComponent>;
  
  constructor(private dialog: MatDialog, private apiService: ApiService, private router: Router) {
    this.navLinks = [
      {
        label: 'Leaderboard',
        link: '/reports/leaderboard',
        index: 0
      }, {
        label: 'KPI Dashboard',
        link: '/reports/kpi-dashboard',
        index: 1
      }, {
        label: 'Dashboard',
        link: '/reports/dashboard',
        index: 2
      }, {
        label: 'Ratings',
        link: '/reports/ratings',
        index: 3
      }
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  dashboards = [
    {name: 'f', content: ''}
  ];

  openDialog(file?) {
    this.customReportFormDialogRef = this.dialog.open(CustomReportFormComponent, {
      data: {
        filename: file ? file.name : ''
      },
      width:'400px'
    });

    this.customReportFormDialogRef.afterClosed().pipe(
      filter(name => name)
    ).subscribe(name => {
      if (file) {
        const index = this.dashboards.findIndex(f => f.name == file.name);
        if (index !== -1) {
          this.dashboards[index] = { name, content: file.content }
        }
      } else {
        this.dashboards.push({ name, content: '' });
      }
    });
  }

}
