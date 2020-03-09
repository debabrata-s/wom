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
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {
partData;
customData = [];
  constructor(private router: Router,
    public dialogRef: MatDialogRef<PartDetailsComponent>,
    public dialog: MatDialog,
    private drawerService: DrawerService,
    private populateFormService: PopulateEditFormsService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.partData = this.data.message;
    console.log('partdata in part details',this.partData);
    // this.apiService.getAsset(this.partData)
    this.apiService.getCustomPartData(this.partData.id).subscribe((x:any) => {
      this.customData = x.message
      console.log(this.customData)
    })
    
  }
  deletePart() {
    const dialogRef = this.dialog.open(DeletePartDialogComponent,{
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
      height: '300px'
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
