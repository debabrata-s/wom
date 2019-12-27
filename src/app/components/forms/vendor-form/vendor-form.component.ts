import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {
  pageTitle = "Add Vendor";
  vendorForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.vendorForm = this.fb.group({
      companyName:[''],
      address:[''],
      phone:[''],
      website:[''],
      name:[''],
      email:['', [Validators.required, Validators.email]],
      vendorType:[''],
      desc:['']
    });

  }

  onSubmit() {
    console.log(this.vendorForm);
    console.log('Saved: ' + JSON.stringify(this.vendorForm.value));
  }
}
