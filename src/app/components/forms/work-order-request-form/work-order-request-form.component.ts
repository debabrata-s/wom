import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-work-order-request-form',
  templateUrl: './work-order-request-form.component.html',
  styleUrls: ['./work-order-request-form.component.scss']
})
export class WorkOrderRequestFormComponent implements OnInit {
  submitted = false;
  workOrderRequestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.workOrderRequestForm = this.fb.group({
      requesterInfoGroup: this.fb.group({
        fullName: [''],
        phone: [''],
        email: [''],
      }),
      requestDetailsGroup: this.fb.group({
        title: [''],
        desc: [''],
        dueDate: ['']
      }),
      filesGroup: this.fb.group({
        image: [''],
        file: ['']
      })
    });

  }
  onSubmit() {
    // console.log(this.workOrderRequestForm);
    // console.log('Saved: ' + JSON.stringify(this.workOrderRequestForm.value));

    this.submitted = true;
    if (!this.workOrderRequestForm.valid) {
      return false;
    } else {
      this.apiService.createWorkOrderRequest(this.workOrderRequestForm.value).subscribe(
        (res) => {
          console.log('Work order request successfully created!')
          // this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }
}


