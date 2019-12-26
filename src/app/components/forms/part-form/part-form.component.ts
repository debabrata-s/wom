import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent implements OnInit {
  partsInventoryForm: FormGroup;
  customDataArray: FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.partsInventoryForm = this.fb.group({
      title:[''],
      desc:[''],
      category:[''],
      cost:[''],
      quantity:[''],
      minQuantity:[''],
      nonStock: false,
      barcode:[''],
      area:[''],
      addPartDetails:[''],
      workers:[''],
      teams:[''],
      vendors:[''],
      customer:[''],
      customDataArray: this.fb.array([]),
      location:[''],
      addAFile:[''],
      // addFile:[''],
      addImage:['']
    })
  }

  createCustomData(){
    return this.fb.group({
      name:[''],
      value:[''],
      unit:['']
    })
  }

  addCustomData(){
    this.customDataArray = <FormArray>this.partsInventoryForm.get('customDataArray');
    this.customDataArray.push(this.createCustomData());
  }
  
  onSubmit() {
    console.log(this.partsInventoryForm);
    console.log('Saved: ' + JSON.stringify(this.partsInventoryForm.value));
  }

}
