import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DrawerService } from 'src/app/services/drawer.service';
import { FormDataService } from 'src/app/services/form-data.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-edit-form',
  templateUrl: './location-edit-form.component.html',
  styleUrls: ['./location-edit-form.component.scss']
})
export class LocationEditFormComponent implements OnInit {
selectedLocation;
  locationForm: FormGroup;
  workers = [];
  locations = [];
  teams = [];
  vendors = [];
  customers = [];
  customDataArray: FormArray;
  showMap = true;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private drawerSevice: DrawerService,
    private formDataService: FormDataService,
    public locationService: LocationService
  ) {
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
    apiService.getAllPeople().subscribe((data: any) => {
      this.workers = data.message;
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
      customDataArray: this.fb.array([]),
      showMapCoordinate: ['']
    })    
    this.populateFields();
    console.log(this.selectedLocation);
      }
  createCustomData() {
    return this.fb.group({
      name: [''],
      value: [''],
      unit: ['']
    })
  }
  populateFields() {
    this.selectedLocation = this.locationService.getLocation();
    this.locationForm.patchValue({
      Title: this.selectedLocation.Title,
      Address: this.selectedLocation.Address,
      WorkerId: 'test1788',
      TeamId: 23,
      VendorId: 23,
      CustomerId: 18,
      ParentLocationId: 4
    })
  }
  addCustomData() {
    this.customDataArray = <FormArray>this.locationForm.get('customDataArray');
    this.customDataArray.push(this.createCustomData());
  }
  onCancel() {
    this.drawerSevice.toggleStatus();
  }
  onSubmit() {
    console.log(this.locationForm);
    console.log('Saved: ' + JSON.stringify(this.locationForm.value));
  }
}

