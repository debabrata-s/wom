import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-asset-dialog',
  templateUrl: './delete-asset-dialog.component.html',
  styleUrls: ['./delete-asset-dialog.component.scss']
})
export class DeleteAssetDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteAssetDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
