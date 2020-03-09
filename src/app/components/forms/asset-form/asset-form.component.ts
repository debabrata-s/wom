import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddFilesDialogFormComponent } from '../../detail-components/dialog-forms/add-files-dialog-form/add-files-dialog-form.component';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.scss']
})
export class AssetFormComponent implements OnInit {
  assetForm: FormGroup;
  assets = ['a1', 'a2', 'a3', 'a4'];
  workers = ['w1', 'w2', 'w3', 'w4', 'w5'];
  teams = ['t1', 't2', 't3'];
  vendors = ['v1', 'v2', 'v3', 'v4', 'v5'];
  customers = ['c1', 'c2', 'c3', 'c4', 'c5'];
  dataArray = [];
  customDataArray: FormArray;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private drawerService: DrawerService) { }

  ngOnInit() {
    this.assetForm = this.fb.group({
      image: [''],
      title: [''],
      desc: [''],
      track: [false],
      model: [''],
      barcode: [''],
      category: [''],
      location: [''],
      area: [''],
      parentAsset: [''],
      worker: [''],
      additionalWorkers: [''],
      team: [''],
      vendor: [''],
      customer: [''],
      purchaseDate: [''],
      placedInService: [''],
      purchasePrice: [''],
      warrantyExpiration: [''],
      residualPrice: [''],
      usefulLife: [''],
      additionalInformation: [''],
      file: [''],
      customDataArray: this.fb.array(this.dataArray),

    });
  }
  createCustomData() {
    return this.fb.group({
      name: [''],
      value: [''],
      unit: ['']
    })
  }
  addCustomData() {
    this.customDataArray = <FormArray>this.assetForm.get('customDataArray');
    this.customDataArray.push(this.createCustomData());
  }
  removeCustomData(i) {
    this.dataArray.splice(i, 1);
    this.customDataArray.removeAt(i);
  }
  onSubmit() {
    console.log(this.assetForm);
    console.log('Saved: ' + JSON.stringify(this.assetForm.value));
  }
  openFileDialog() {
    const dialogRef = this.dialog.open(SelectFileDialogComponent)
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }

}
