import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DeletePartDialogComponent } from '../dialog-confirmations/delete-part-dialog/delete-part-dialog.component';
import { AddFilesDialogFormComponent } from '../dialog-forms/add-files-dialog-form/add-files-dialog-form.component';
import { AddAssetDialogComponent } from '../dialog-forms/add-asset-dialog/add-asset-dialog.component';
import { RestockDialogComponent } from '../dialog-forms/restock-dialog/restock-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopulateEditFormsService } from 'src/app/services/populate-edit-forms.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ApiService } from 'src/app/services/api.service';
import { SelectFileDialogComponent } from '../dialog-forms/select-file-dialog/select-file-dialog.component';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {
  partData;
  assets = [];
  customData = [];
  existingFiles = { ids: [], names: [] };
  files = [];
  removeFileIds = [];
  constructor(private router: Router,
    public dialogRef: MatDialogRef<PartDetailsComponent>,
    public dialog: MatDialog,
    private drawerService: DrawerService,
    private populateFormService: PopulateEditFormsService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.partData = this.data.message;
    console.log('partdata in part details', this.partData);
    // this.apiService.getAsset(this.partData)
    this.apiService.getCustomPartData(this.partData.id).subscribe((x: any) => {
      this.customData = x.message
      console.log(this.customData)
    })
    this.addExistingPartFiles(this.partData.id);
    this.updateAssets(this.partData.id);
  }
  updateAssets(id) {
    let assetIds = [];
    let assets = []
    this.apiService.getPartAssets(id).subscribe((data: any) => {
      if (data.message[0].AssetId) {
        data.message.map(x => assetIds.push(x.AssetId));
        console.log(assetIds);
        for (let id of assetIds) {
          this.apiService.getAsset(id).subscribe((data: any) => {
            assets.push(data.message)
          })
        }
        this.assets = assets;
      }
    }, (err) => {
      console.log(err);
    })
  }
  // part file
  addExistingPartFiles(id) {
    this.apiService.getPartFiles(id).subscribe((x: any) => {
      if (x.message != ["Cannot find record!"]) {
        this.existingFiles.ids = Object.keys(x.message.Filedetails);
        this.existingFiles.names = Object.values(x.message.Filedetails);
      }
    });
  }
  uploadFiles() {
    console.log(this.partData);
    this.apiService.addPartFile(this.partData.id, this.files).subscribe((res) => {
      console.log(res);
      console.log(this.removeFileIds);
           // window.location.reload()
    }, (err) => {
      console.log(err);
    });
    for (let i = 0; i < this.removeFileIds.length; i++) {
      this.apiService.removePartFile(this.removeFileIds[i]).subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }
  removeExistingFile(i) {
    this.existingFiles.names.splice(i, 1);
    this.removeFileIds.push(this.existingFiles.ids.splice(i, 1)[0]);
    console.log(this.removeFileIds);
  }
  addFile(event) {
    console.log(event.path[0].files[0]);
    this.files.push(event.path[0].files[0]);
  }
  removeFile(i) {
    this.files.splice(i, 1);
    console.log(this.files[i])
  }
  selectFiles() {
    const dialogRef = this.dialog.open(SelectFileDialogComponent)
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
  public fileOver(event) {
    console.log(event);
  }
  public fileLeave(event) {
    console.log(event);
  }

  deletePart() {
    const dialogRef = this.dialog.open(DeletePartDialogComponent, {
      data: this.partData.id
    })
  }
  editPart() {
    this.dialogRef.close();
    this.populateFormService.setFormData(this.partData)
    // this.router.navigate(['/parts/part-form'])
    this.drawerService.setDrawer('partEditForm');
    this.drawerService.toggleStatus();
  }
  openFileDialog() {
    const dialogRef = this.dialog.open(AddFilesDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
  addAsset() {
    const dialogRef = this.dialog.open(AddAssetDialogComponent, {
      width: '400px',
      height: '300px',
      data: this.partData.id
    })
  }
  openRestockDialog() {
    const dialogRef = this.dialog.open(RestockDialogComponent, {
      width: '400px'
    })
  }
  createPurchaseOrder() {
    this.closeDialog();
    this.router.navigate(['/purchase-orders/purchase-order-form']);
  }
  openPurchaseOrderPdf() {
    this.closeDialog();
    this.router.navigate(['inventory/purchase-order-pdf']);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
