import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-report-form',
  templateUrl: './custom-report-form.component.html',
  styleUrls: ['./custom-report-form.component.scss']
})
export class CustomReportFormComponent implements OnInit {
  customReportForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customReportForm = this.fb.group({
      dashboardName: ['']
    });
  }
  onSubmit(){
    console.log(this.customReportForm.value);
  }

}
