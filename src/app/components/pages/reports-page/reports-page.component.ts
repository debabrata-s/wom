import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {
  pageTitle = "Reports";
  viewMode: String ="tab1";
  customReportForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customReportForm = this.fb.group({
      dashboardName:['']
    });
  }
  onSubmit(){
    console.log(this.customReportForm.value.dashboardName);
  }

}
