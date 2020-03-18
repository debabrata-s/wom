import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { ApiService } from 'src/app/services/api.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  nonStock
  files = [];
  image: File;
  imagePath;
  partsInventoryForm: FormGroup;
  customPartForm: FormGroup;
  customDataArray: FormArray;
  dataArray = [];
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private drawerService: DrawerService,
    private apiService: ApiService,
    private router: Router,
    public toastr: ToastrService
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
  toggleNonstock(val) {
    if (val.checked) {
      this.partsInventoryForm.get('MinimumQuantity').disable();
    }
    else {
      this.partsInventoryForm.get('MinimumQuantity').enable();
    }
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
  addImage(event) {
    console.log(event);
  }
  getImageName() {
    if (this.image) {
      return this.image.name;
    } else {
      return '';
    }
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
  fileDropped(files: NgxFileDropEntry[]) {
    // this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.files.push(file)
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  imageDropped(files: NgxFileDropEntry[]) {
    // this.images = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
          this.image = file
          this.partsInventoryForm.patchValue({ Images: this.image })
        });
      }
      // else {
      //   const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      //   console.log(droppedFile.relativePath, fileEntry);
      // }
    }
  }
  addImageFile(event) {
    // this.imagePath = 
    var reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.imagePath = (<FileReader>event.target).result;
    }
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.imagePath);
    this.image = event.path[0].files[0];
    this.partsInventoryForm.patchValue({ Images: this.image })
  }
  removeImage() {
    this.image = undefined;
  }
  addFile(event) {
    console.log(event.path[0].files[0]);
    this.files.push(event.path[0].files[0]);
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  removeFile(i) {
    this.files.splice(i, 1);

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
    let customData = this.customPartForm.value.customDataArray
    console.log('Custom Form', customData);
    console.log('Saved: ' + JSON.stringify(this.partsInventoryForm.value));
    this.apiService.addPart(this.partsInventoryForm.value).subscribe(res => {
      console.log("part is successfully added", res);
      for (let i = 0; i < customData.length; i++) {
        this.apiService.addCustomPartData(res.PartId, customData[i]).subscribe(res => {
          console.log('custom data', res);
        })
      }
      this.apiService.addPartFile(res.PartId, this.files).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
      // window.location.reload();
      this.toastr.success("Part added successfully!")
      this.router.navigate(['inventory/parts']);
    }, (err) => {
      console.log(err)
      this.toastr.error("Duplicate part name.")
    })
  }

}
