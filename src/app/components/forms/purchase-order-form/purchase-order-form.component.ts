import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.scss']
})
export class PurchaseOrderFormComponent implements OnInit {

  purchaseOrderForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.purchaseOrderForm = this.fb.group({
      purchaseOrderDetails: this.fb.group({
        title: [''],
        category: [''],
        dueDate: [''],
        vendors: [''],
        additionalDetails: ['']
      }),
      //  parts: this.fb.group({}),
      requesterInformation: this.fb.group({
        companyName: [''],
        address: this.fb.group({
          address: [''],
          city: [''],
          state: [''],
          zipCode: ['']
        }),
        phoneNumber: [''],
        faxNumber: ['']
      }),
      shippingInformation: this.fb.group({
        useCompanyAddress: [''],
        shipToName: [''],
        companyName: [''],
        address: this.fb.group({
          address: [''],
          city: [''],
          state: [''],
          zipCode: ['']
        }),
        phoneNumber: [''],
        faxNumber: ['']
      }),
      additionalInformation: this.fb.group({
        purchaseOrderDate: [''],
        requisitioner: [''],
        shippingMethod: [''],
        FOBShippingPoint: [''],
        terms: [''],
        notes: ['']
      })
    });
  }
  onSubmit() {
    console.log(this.purchaseOrderForm);
    console.log('Saved: ' + JSON.stringify(this.purchaseOrderForm.value));
  }

}
