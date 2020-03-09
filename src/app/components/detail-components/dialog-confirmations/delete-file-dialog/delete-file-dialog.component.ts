import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-file-dialog',
  templateUrl: './delete-file-dialog.component.html',
  styleUrls: ['./delete-file-dialog.component.scss']
})
export class DeleteFileDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteFileDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
