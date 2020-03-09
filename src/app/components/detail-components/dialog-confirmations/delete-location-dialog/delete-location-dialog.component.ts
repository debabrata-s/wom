import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-location-dialog',
  templateUrl: './delete-location-dialog.component.html',
  styleUrls: ['./delete-location-dialog.component.scss']
})
export class DeleteLocationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteLocationDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
