import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddFilesDialogFormComponent } from '../dialog-forms/add-files-dialog-form/add-files-dialog-form.component';
import { Router } from '@angular/router';
import { DrawerService } from 'src/app/services/drawer.service';
import { PartDialogFormComponent } from '../dialog-forms/part-dialog-form/part-dialog-form.component';
import { AddDowntimeDialogComponent } from '../dialog-forms/add-downtime-dialog/add-downtime-dialog.component';
import { DeleteAssetDialogComponent } from '../dialog-confirmations/delete-asset-dialog/delete-asset-dialog.component';
import { AddReadingDialogComponent } from '../dialog-forms/add-reading-dialog/add-reading-dialog.component';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {
  status = ['Not Operational', 'Operational', 'Offline', 'Offline']
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private drawerService: DrawerService,
    public dialogRef:MatDialogRef<AssetDetailsComponent>
  ) {}

  ngOnInit() {
  }
  openFileDialog() {
    const dialogRef = this.dialog.open(AddFilesDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
  addWorkOrder() {
    this.dialogRef.close();
    this.router.navigate(['../work-orders'])
    this.drawerService.setDrawer('workOrderForm')
    this.drawerService.toggleStatus();
  }
  addPart(){
    const dialogRef = this.dialog.open(PartDialogFormComponent,{
      width: '550px'
    })
  }
  addDowntime(){
    const dialogRef = this.dialog.open(AddDowntimeDialogComponent,{
      width: '550px',
      height: '400px'
    })
  }
  deleteAsset(){
    const dialogRef = this.dialog.open(DeleteAssetDialogComponent)
  }
  editAsset(){
    this.dialogRef.close();
    // this.router.navigate(['/assets/asset-form'])
    this.drawerService.setDrawer('assetForm');
    this.drawerService.toggleStatus();
  }
  addReading(){
    const dialogRef = this.dialog.open(AddReadingDialogComponent,{
      width: '500px'
    })
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
