import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-purchase-order-pdf-form',
  templateUrl: './purchase-order-pdf-form.component.html',
  styleUrls: ['./purchase-order-pdf-form.component.scss']
})
export class PurchaseOrderPdfFormComponent implements OnInit {
  purchaseOrderPdfForm: FormGroup;
  items: FormArray;
  dataArray = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.purchaseOrderPdfForm = this.fb.group({
      itemList: this.fb.group({
        items: this.fb.array(this.dataArray)
      })
    });
  }
  createItem() {
    return this.fb.group({
      quantity: [''],
      unit: [''],
      unitPrice: [''],
      desc: ['']
    })
  }
  addItem() {
    this.items = <FormArray>this.purchaseOrderPdfForm.get('itemList.items');
    this.items.push(this.createItem());
  }
  deleteItem(i){
    this.dataArray.splice(i,1);
    this.items.removeAt(i);
  }
  onSubmit() { }
}
