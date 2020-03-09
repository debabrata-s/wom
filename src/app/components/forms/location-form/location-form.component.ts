import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DrawerService } from 'src/app/services/drawer.service';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
  locationForm: FormGroup;
  workers = [];
  locations = [];
  teams = [];
  vendors = [];
  customers = [];
  dataArray=[];
  customDataArray: FormArray;
  showMap = true;

  constructor(private fb: FormBuilder, private apiService: ApiService, private drawerSevice: DrawerService, private formDataService: FormDataService) {
    apiService.getAllLocation().subscribe((data: any) => {
      this.locations = data.message;
    });
    apiService.getAllTeam().subscribe((data: any) => {
      this.teams = data.message;
    });
    apiService.getAllVendor().subscribe((data: any) => {
      this.vendors = data.message;
    });
    apiService.getAllCustomers().subscribe((data: any) => {
      this.customers = data.message;
    });
  }


  ngOnInit() {
    this.locationForm = this.fb.group({
      Title: [''],
      Address: [''],
      WorkerId: [''],
      TeamId: [''],
      VendorId: [''],
      CustomerId: [''],
      ParentLocationId: [''],
      customDataArray: this.fb.array(this.dataArray),
      showMapCoordinate: ['']
    })
  }
  createCustomData() {
    return this.fb.group({
      name: [''],
      value: [''],
      unit: ['']
    })
  }
  // populateFields() {
  //   this.locationForm = this.fb.group(this.formDataService.populateLocationForm());
  // }
  addCustomData() {
    this.customDataArray = <FormArray>this.locationForm.get('customDataArray');
    this.customDataArray.push(this.createCustomData());
  }
  onCancel() {
    this.drawerSevice.toggleStatus();
  }
  removeCustomData(i) {
    this.dataArray.splice(i,1);
    this.customDataArray.removeAt(i);
  }
  onSubmit() {
    console.log(this.locationForm);
    console.log('Saved: ' + JSON.stringify(this.locationForm.value));
  }
}
