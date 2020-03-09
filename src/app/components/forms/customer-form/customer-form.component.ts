import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  currencies = ['c1','c2','c3','c4'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerDetails: this.fb.group({
        name: [''],
        address: [''],
        phone: [''],
        website: [''],
        email: [''],
        customerType: [''],
        desc: ['']
      }),
      billingInformation: this.fb.group({
        name: [''],
        address: [''],
        addressLine2: [''],
        addressLine3: [''],
        currency: ['']
      })
    });
  }
  onSubmit() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
