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
import { ToastrService } from 'ngx-toastr';
import { callbackify } from 'util';


@Component({
  selector: 'app-part-edit-form',
  templateUrl: './part-edit-form.component.html',
  styleUrls: ['./part-edit-form.component.scss']
})
export class PartEditFormComponent implements OnInit {
  id;
  removeFileIds = [];
  customDataIds = [];
  removeCustomDataIds = [];
  workers = [];
  teams = [];
  vendors = [];
  customers = [];
  locations = [];

  existingFiles = { ids: [], names: [] };
  files = [];
  image: File;
  oldImage;

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
    private router: Router,
    public toastr: ToastrService
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

  }

  isValidTeamId(teamId) {
    if (this.teams.map(x => x.id).includes(teamId)) {
      return true;
    }
    else {
      return false;
    }
  }
  isValidWorkerId(workerId) {
    if (this.workers.map(x => x.id).includes(workerId)) {
      return true;
    }
    else {
      return false;
    }
  }
  isValidVendorId(vendorId) {
    if (this.vendors.map(x => x.id).includes(vendorId)) {
      return true;
    }
    else {
      return false;
    }
  }
  isValidCustomerId(customerId) {
    if (this.customers.map(x => x.id).includes(customerId)) {
      return true;
    }
    else {
      return false;
    }
  }
  isValidLocationId(locationId) {
    if (this.locations.map(x => x.id).includes(locationId)) {
      return true;
    }
    else {
      return false;
    }
  }
  populateFields() {
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
        Nonstock: this.getNonstock(data.Nonstock),
        Images: data.Images,
        TeamId: data.TeamId,
        WorkerId: data.WorkerId,
        VendorId: data.VendorId,
        CustomerId: data.CustomerId,
        LocationId: data.LocationId
      });
      if(data.Nonstock){
        this.partsInventoryForm.get('MinimumQuantity').disable()
      }
      
      // if (this.isValidTeamId(data.TeamId)) {
      //   this.partsInventoryForm.patchValue({
      //     TeamId: data.TeamId,
      //   })
      // }
      // else {
      //   this.toastr.error("Selected team no longer exists")
      //   this.partsInventoryForm.patchValue({
      //     TeamId: [''],
      //   })
      // }
      // if (this.isValidWorkerId(data.WorkerId)) {
      //   this.partsInventoryForm.patchValue({
      //     WorkerId: data.WorkerId,
      //   })
      // }
      // else {
      //   this.toastr.error("Selected worker no longer exists")
      //   this.partsInventoryForm.patchValue({
      //     WorkerId: [''],
      //   })
      // }
      // if (this.isValidWorkerId(data.VendorId)) {
      //   this.partsInventoryForm.patchValue({
      //     VendorId: data.VendorId,
      //   })
      // }
      // else {
      //   this.toastr.error("Selected vendor no longer exists")
      //   this.partsInventoryForm.patchValue({
      //     VendorId: [''],
      //   })
      // }
      // if (this.isValidCustomerId(data.CustomerId)) {
      //   this.partsInventoryForm.patchValue({
      //     CustomerId: data.CustomerId,
      //   })
      // }
      // else {
      //   this.toastr.error("Selected customer no longer exists")
      //   this.partsInventoryForm.patchValue({
      //     CustomerId: [''],
      //   })
      // }
      // if (this.isValidLocationId(data.LocationId)) {
      //   this.partsInventoryForm.patchValue({
      //     LocationId: data.LocationId,
      //   })
      // }
      // else {
      //   this.toastr.error("Selected location no longer exists")
      //   this.partsInventoryForm.patchValue({
      //     LocationId: [''],
      //   })
      // }

      this.oldImage = data.Images.replace(/^.*[\\\/]/, '');
      console.log('populate form data: ', this.partsInventoryForm.value)
      this.apiService.getCustomPartData(this.id).subscribe((data: any) => {
        console.log('custom data:', data.message)
        data.message.map(x => this.customDataIds.push(x.id))
        this.customPartForm.setControl('customDataArray', this.getCustomDataArray(data.message))
        console.log(this.customPartForm.value);
      })
      console.log(this.partsInventoryForm.value);

    })
    this.addExistingPartFiles(this.id);
  }
  toggleNonstock(val) {
    if (val.checked) {
      this.partsInventoryForm.get('MinimumQuantity').disable();
    }
    else {
      this.partsInventoryForm.get('MinimumQuantity').enable();
    }
  }
  addExistingPartFiles(id) {
    this.apiService.getPartFiles(id).subscribe((x: any) => {
      if (x.message != ["Cannot find record!"]) {
        this.existingFiles.ids = Object.keys(x.message.Filedetails);
        this.existingFiles.names = Object.values(x.message.Filedetails);
      }
      console.log(this.existingFiles);
    });
  }
  removeExistingFile(i) {
    // this.removeFileIds.push(i);
    this.existingFiles.names.splice(i, 1);
    this.removeFileIds.push(this.existingFiles.ids.splice(i, 1)[0]);
    console.log(this.removeFileIds);
  }
  addFile(event) {
    console.log(event.path[0].files[0]);
    this.files.push(event.path[0].files[0]);
    console.log(this.existingFiles);

  }
  removeFile(i) {
    this.files.splice(i, 1);
    console.log(this.files[i])
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
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
          this.files.push(file)
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  imageDropped(files: NgxFileDropEntry[]) {

    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          console.log(droppedFile.relativePath, file);
          this.image = file
          this.partsInventoryForm.patchValue({ Images: this.image })
        });
      }

    }
  }
  addImageFile(event) {
    console.log(event.path[0].files[0]);
    this.image = event.path[0].files[0];
    this.partsInventoryForm.patchValue({ Images: this.image })
  }
  getImageName() {
    if (this.image) {
      return this.image.name
    }
    else {
      return this.oldImage
    }
  }
  removeImage() {
    console.log(this.image)
    this.oldImage = undefined;
    this.image = undefined;
    this.partsInventoryForm.patchValue({ Images: undefined })
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  /**
 * format bytes
 * @param bytes (File size in bytes)
 * @param decimals (Decimals point)
 */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
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
      this.apiService.addPartFile(this.id, this.files).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
      for (let i = 0; i < this.removeFileIds.length; i++) {
        this.apiService.removePartFile(this.removeFileIds[i]).subscribe(res => {
          console.log('delete file', res);
        })
      }
      // window.location.reload();
      this.toastr.success("Part updated successfully!")
      this.router.navigate(['inventory/parts']);

    }, (error: HttpErrorResponse) => {
      console.log(error)
    })
    // for the existing custom data: updatecustompart.

    this.drawerService.toggleStatus();
  }
}
