import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-report-form',
  templateUrl: './custom-report-form.component.html',
  styleUrls: ['./custom-report-form.component.scss']
})
export class CustomReportFormComponent implements OnInit {
  customReportForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CustomReportFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.customReportForm = this.fb.group({
      dashboardName: this.data.dashboardName ? this.data.dashboardName : ''
    })
  }
  onSubmit(customReportForm) {
    this.dialogRef.close(`${customReportForm.value.dashboardName}`);
  }
}
