import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SelectFileDialogComponent } from '../../detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  requestForm: FormGroup;
  selection1 = -1;
  selection2 = -1;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private drawerService: DrawerService) { }

  ngOnInit() {
    this.requestForm = this.fb.group({
      title: [''],
      desc: [''],
      priority: [''],
      image: [''],
      file: ['']
    });
  }
  openFileDialog() {
    const dialogRef = this.dialog.open(SelectFileDialogComponent)
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }
  onSubmit() {
    console.log(this.requestForm);
    console.log('Saved: ' + JSON.stringify(this.requestForm.value));
  }

}
