import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
  locationForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.locationForm = this.fb.group({
      title:[''],
      address:[''],
      parentLocation:[''],
      worker:[''],
      team:[''],
      vendor:[''],
      customer:[''],
      isMapCordinate:['']
    })
  }
  onSubmit() {
    console.log(this.locationForm);
    console.log('Saved: ' + JSON.stringify(this.locationForm.value));
  }
}
