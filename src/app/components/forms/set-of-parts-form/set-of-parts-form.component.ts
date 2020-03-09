import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PartDialogFormComponent } from '../../detail-components/dialog-forms/part-dialog-form/part-dialog-form.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { AddPartsService } from 'src/app/services/add-parts.service';
import { ApiService } from 'src/app/services/api.service';
import { distinct } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-set-of-parts-form',
  templateUrl: './set-of-parts-form.component.html',
  styleUrls: ['./set-of-parts-form.component.scss']
})
export class SetOfPartsFormComponent implements OnInit {
  partIds = [];
  parts = [];
  setOfPartForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    public drawerService: DrawerService,
    private addPartService: AddPartsService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.setOfPartForm = this.fb.group({
      setName: [''],
      PartId: ['']
    })
  }
  ngOnInit() {
    this.addPartService.getParts().subscribe((data) => {
      this.partIds = data;
      if (this.partIds.length > 0) {
        this.getParts();
      }
      this.setOfPartForm.patchValue({
        PartId: this.partIds
      })
    });
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
  addPart() {
    const dialogRef = this.dialog.open(PartDialogFormComponent)
  }
  removeItem(id) {
    var index = this.parts.map(x => {
      return x.id;
    }).indexOf(id);
    this.parts.splice(index, 1);
    this.setOfPartForm.patchValue({
      PartId: this.parts.map(x => { return x.id })
    })
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }
  onSubmit() {
    this.apiService.addSetOfParts(this.setOfPartForm.value).subscribe(res => {
      console.log("set of part is successfully added", res);
      window.location.reload();
    }, (err)=>{
      console.log(err);
      alert('Duplicate set of part!')
      
    });
  }
}