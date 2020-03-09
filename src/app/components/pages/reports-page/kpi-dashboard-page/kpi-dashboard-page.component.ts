import { Component, OnInit } from '@angular/core';

import { MultiDataSet, Label, SingleDataSet } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';



@Component({
  selector: 'app-kpi-dashboard-page',
  templateUrl: './kpi-dashboard-page.component.html',
  styleUrls: ['./kpi-dashboard-page.component.scss']
})
export class KpiDashboardPageComponent implements OnInit {
  selected;
  public userChartLabels: Label[] = ['John Doe', 'Sam Smith'];
  public userChartData: SingleDataSet = [100,100];
  public completedChartLabels: Label[] = ['John Doe'];
  public completedChartData: SingleDataSet = [100];
  categoriesChartData: SingleDataSet = [50,50]
  categoriesChartLabels: Label[] = ['Not Assigned', 'Inspection'];
  priorityChartLabels: Label[] = ['None', 'Low', 'Medium', 'High'];
  priorityChartData: SingleDataSet = [0,1,2,0];
  public doughnutChartType: ChartType = 'doughnut';


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Assigned to Users', 'Assigned an Asset', 'Assigned to location', 'Has time logged', 'Has cost logged', 'Required Parts', 'Assigned a Category','Assigned a due date'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constsructor() { }

  ngOnInit() {
  }
   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
