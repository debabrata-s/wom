import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DrawerService } from 'src/app/services/drawer.service';
import { AddPartsService } from 'src/app/services/add-parts.service';
import { ApiService } from 'src/app/services/api.service';
import { PartDialogFormComponent } from '../../detail-components/dialog-forms/part-dialog-form/part-dialog-form.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-set-of-parts-edit-form',
  templateUrl: './set-of-parts-edit-form.component.html',
  styleUrls: ['./set-of-parts-edit-form.component.scss']
})
export class SetOfPartsEditFormComponent implements OnInit {
  parts = [];
  partIds = [];
  setOfPartId;
  editSetOfPartForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    public drawerService: DrawerService,
    private addPartService: AddPartsService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.editSetOfPartForm = this.fb.group({
      setName: [''],
      PartId: ['']
    })
  }

  ngOnInit() {
    this.drawerService.getSetOfPart().subscribe((data: any) => {
      this.setOfPartId = data.id;
      this.parts = data.part_detail
      for (let i = 0; i < this.parts.length; i++) {
        this.addPartService.addPart(this.parts[i].id)
      }
      this.addPartService.getParts().subscribe(data => {
        this.partIds = data
        if (this.partIds.length > 0) {
          this.getParts();
        }
        this.populatePartId(this.partIds)
      })
      this.populateSetName(data.setName)
    })
  }
  populatePartId(item) {
    this.editSetOfPartForm.patchValue({
      PartId: item
    })
  }
  populateSetName(item) {
    this.editSetOfPartForm.patchValue({
      setName: item
    })
  }
  getParts() {
    let flag = true;

    this.apiService.getPart(this.partIds[this.partIds.length - 1]).subscribe(data => {
      for (let item of this.parts) {
        if ((item.id == data.message.id)) {
          flag = false;
          break;
        }
      }
      if (flag) {
        this.parts.push(data.message);
      }
    })
  }
  removeItem(id) {
    var index = this.parts.map(x => {
      return x.id;
    }).indexOf(id);
    this.parts.splice(index, 1);
    this.populatePartId(this.parts.map(x => {
      return x.id
    }))
  }
  addPart() {
    const dialogRef = this.dialog.open(PartDialogFormComponent);
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }
  onSubmit() {
    this.apiService.updateSetOfParts(this.setOfPartId, this.editSetOfPartForm.value).subscribe(res => {
      console.log(res);
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      console.log(error)
      
    })



  }

}
