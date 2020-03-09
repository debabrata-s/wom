import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RenameFileDialogFormComponent } from '../../detail-components/dialog-forms/rename-file-dialog-form/rename-file-dialog-form.component';
import { DeleteFileDialogComponent } from '../../detail-components/dialog-confirmations/delete-file-dialog/delete-file-dialog.component';

const ELEMENT_DATA= [
  {id: 1, name: 'damaged_part.png', uploadedBy:'Corrine J. Miller',uploadedOn:'3 days ago'},
  {id: 2, name: 'fixed.jpg', uploadedBy:'Greg C. Harrell',uploadedOn:'7 days ago'}
];

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.scss']
})
export class FilesPageComponent implements OnInit {
  pageTitle = "Files";
  viewMode = "tab1";
  displayedColumns: string[] = ['id', 'name', 'uploadedBy', 'uploadedOn', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  renameFile(){
    const dialogRef = this.dialog.open(RenameFileDialogFormComponent)
  }
  deleteFile(){
    const dialogRef = this.dialog.open(DeleteFileDialogComponent)
  }
}
