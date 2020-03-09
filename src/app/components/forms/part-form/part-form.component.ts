import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent implements OnInit {
  workers = [];
  teams = [];
  vendors = [];
  customers = [];
  locations = [];
  partsInventoryForm: FormGroup;
  customPartForm: FormGroup;
  customDataArray: FormArray;
  dataArray = [];
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private drawerService: DrawerService,
    private apiService: ApiService,
  ) {
    this.apiService.getAllUsers().subscribe((data: any) => {
      console.log(data);
      this.workers = data.message;
    })
    this.apiService.getAllTeam().subscribe((data: any) => {
      console.log(data);
      this.teams = data.message;
    })
    this.apiService.getAllVendor().subscribe((data: any) => {
      console.log(data);
      this.vendors = data.message;
    })
    this.apiService.getAllCustomers().subscribe((data: any) => {
      console.log(data);
      this.customers = data.message;
    })
    this.apiService.getAllLocation().subscribe((data: any) => {
      console.log(data);
      this.locations = data.message;
    })
  }

  ngOnInit() {
    this.partsInventoryForm = this.fb.group({
      Title: [''],
      Description: [''],
      Category: [''],
      Cost: [''],
      Quantity: [''],
      MinimumQuantity: [''],
      Barcode: [''],
      Area: [''],
      AdditionalPartDetails: [''],
      WorkerId: [''],
      TeamId: [''],
      VendorId: [''],
      CustomerId: [''],
      LocationId: [''],
      Nonstock: [false],
      Images: ['']
    });

    this.customPartForm = this.fb.group({
      customDataArray: this.fb.array(this.dataArray)
    })
   
    //file: [''],
    // customDataArray: this.fb.array(this.dataArray),
  }

  
  createCustomData() {
    return this.fb.group({
      PartId: [''],
      CustomDataName: [''],
      CustomDataValue: [''],
      CustomDataUnit: ['']
    })
  }

  addCustomData() {
    this.customDataArray = <FormArray>this.customPartForm.get('customDataArray');
    this.customDataArray.push(this.createCustomData());
  }
  selectFiles() {
    const dialogRef = this.dialog.open(SelectFileDialogComponent)
  }

  removeCustomItem(i) {
    this.dataArray.splice(i, 1);
    this.customDataArray.removeAt(i);
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }

  onSubmit() {
    console.log(this.partsInventoryForm);
    let customData = this.customPartForm.value.customDataArray
    console.log('Custom Form', customData);
    console.log('Saved: ' + JSON.stringify(this.partsInventoryForm.value));
    this.apiService.addPart(this.partsInventoryForm.value).subscribe(res => {
      console.log("part is successfully added", res);
      for (let i = 0; i < customData.length; i++) {
        this.apiService.addCustomPartData(res.PartId, customData[i]).subscribe(res => {
          console.log('custom data', res);
          window.location.reload();
        })
      }


    }, (err) => {
      console.log(err)
      alert("Duplicate part name.");
    })
  }

}
