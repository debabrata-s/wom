import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PopulateEditFormsService } from 'src/app/services/populate-edit-forms.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Router } from '@angular/router';


@Component({
  selector: 'app-part-edit-form',
  templateUrl: './part-edit-form.component.html',
  styleUrls: ['./part-edit-form.component.scss']
})
export class PartEditFormComponent implements OnInit {
  id;
  customDataIds = [];
  removeCustomDataIds = [];
  workers = [];
  teams = [];
  vendors = [];
  customers = [];
  locations = [];
  
  public files: NgxFileDropEntry[] = [];
  public images: NgxFileDropEntry[] = [];

  partsInventoryForm: FormGroup;
  customPartForm: FormGroup;
  customDataArray: FormArray;

  //to send as post request to add new custom data.
  newCustomPartForm: FormGroup;
  newCustomDataArray: FormArray;
  newDataArray = [];

  dataArray = [];
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private drawerService: DrawerService,
    private apiService: ApiService,
    private populateFormService: PopulateEditFormsService,
    private router: Router
  ) {
    this.apiService.getAllUsers().subscribe((data: any) => {
      this.workers = data.message;
    })
    this.apiService.getAllTeam().subscribe((data: any) => {
      this.teams = data.message;
    })
    this.apiService.getAllVendor().subscribe((data: any) => {
      this.vendors = data.message;
    })
    this.apiService.getAllCustomers().subscribe((data: any) => {
      this.customers = data.message;
    })
    this.apiService.getAllLocation().subscribe((data: any) => {
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
    this.newCustomPartForm = this.fb.group({
      newCustomDataArray: this.fb.array(this.newDataArray)
    })

    this.populateFields();
    //file: [''],
    // customDataArray: this.fb.array(this.dataArray),
  }
  populateFields() {
    console.log("populate form from part form; ", this.populateFormService.getFormData());

    this.populateFormService.getFormData().subscribe((data: any) => {
      this.id = data.id;
      this.partsInventoryForm.patchValue({
        Title: data.Title,
        Description: data.Description,
        Category: data.Category,
        Cost: data.Cost,
        Quantity: data.Quantity,
        MinimumQuantity: data.MinimumQuantity,
        Barcode: data.Barcode,
        Area: data.Area,
        AdditionalPartDetails: data.AdditionalPartDetails,
        WorkerId: data.WorkerId,
        TeamId: data.TeamId,
        VendorId: data.VendorId,
        CustomerId: data.CustomerId,
        LocationId: data.LocationId,
        Nonstock: this.getNonstock(data.Nonstock),
        Images: data.Images
      });
      console.log('populate form data: ', this.partsInventoryForm.value)
      this.apiService.getCustomPartData(this.id).subscribe((data: any) => {
        console.log('custom data:', data.message)
        data.message.map(x => this.customDataIds.push(x.id))
        this.customPartForm.setControl('customDataArray', this.getCustomDataArray(data.message))
        console.log(this.customPartForm.value);

      })


    })
  }
  getCustomDataArray(data): FormArray {
    const formArray = new FormArray([])
    console.log('get custom data array: ', data);

    data.forEach(s => {
      formArray.push(this.fb.group({
        id: s.id,
        PartId: this.id,
        CustomDataName: s.CustomDataName,
        CustomDataValue: s.CustomDataValue,
        CustomDataUnit: s.CustomDataUnit
      }));
    });
    return formArray;
  }
  createCustomData() {
    return this.fb.group({
      PartId: [''],
      CustomDataName: [''],
      CustomDataValue: [''],
      CustomDataUnit: ['']
    })
  }
  getNonstock(data) {
    if (data === 0) {
      return false;
    }
    else {
      return true;
    }
  }

  addCustomData() {
    this.newCustomDataArray = <FormArray>this.newCustomPartForm.get('newCustomDataArray');
    this.newCustomDataArray.push(this.createCustomData());
  }
  selectFiles() {
    const dialogRef = this.dialog.open(SelectFileDialogComponent)
  }

  removeCustomItem(i) {
    this.removeCustomDataIds.push(this.customPartForm.get('customDataArray').value[i].id);
    (<FormArray>this.customPartForm.get('customDataArray')).removeAt(i);



    console.log('remove custom data Ids', this.removeCustomDataIds);

  }
  removeNewCustomItem(i) {
    this.newDataArray.splice(i, 1);
    this.newCustomDataArray.removeAt(i);
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }
  fileDropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => { 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  imageDropped(files: NgxFileDropEntry[]) {
    this.images = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          console.log(droppedFile.relativePath, file);


        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  onSubmit() {
    console.log(this.partsInventoryForm);
    let customData = this.customPartForm.value.customDataArray;
    let newCustomData = this.newCustomPartForm.value.newCustomDataArray;
    console.log('Saved: ' + JSON.stringify(this.partsInventoryForm.value));
    this.apiService.updatePart(this.id, this.partsInventoryForm.value).subscribe(res => {
      console.log(res);
      //for new custom data: add custom part data.
      for (let i = 0; i < newCustomData.length; i++) {
        this.apiService.addCustomPartData(this.id, newCustomData[i]).subscribe(res => {
          console.log('custom data', res);
        })
      }
      for (let i = 0; i < customData.length; i++) {
        this.apiService.updateCustomPartData(this.customDataIds[i], customData[i]).subscribe(res => {
          console.log('custom data', res);
        })
      }
      for (let i = 0; i < this.removeCustomDataIds.length; i++) {
        this.apiService.deleteCustomPartData(this.removeCustomDataIds[i]).subscribe(res => {
          console.log('delete custom data', res);
        })
      }
      window.location.reload();
    }, (error: HttpErrorResponse) => {
      console.log(error)
    })
    // for the existing custom data: updatecustompart.

    this.drawerService.toggleStatus();
  }
}