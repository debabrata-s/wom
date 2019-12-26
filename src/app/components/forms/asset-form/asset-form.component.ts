import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.scss']
})
export class AssetFormComponent implements OnInit {
  assetForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.assetForm = this.fb.group({
      image: [''],
      title: [''],
      desc: [''],
      track: [''],
      model: [''],
      barcode: [''],
      category: [''],
      location: [''],
      area: [''],
      parentAsset: [''],
      worker: [''],
      additionalWorker: [''],
      team: [''],
      vendors: [''],
      customer: [''],
      purchaseDate: [''],
      placedInService: [''],
      purchasePrice: [''],
      warrantyExpiration: [''],
      residualPrice: [''],
      usefulLife: [''],
      additionalInformation: [''],
      file: ['']
      
    });
  }
  onSubmit() {
    console.log(this.assetForm);
    console.log('Saved: ' + JSON.stringify(this.assetForm.value));
  }


}
