import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-meter-dialog',
  templateUrl: './delete-meter-dialog.component.html',
  styleUrls: ['./delete-meter-dialog.component.scss']
})
export class DeleteMeterDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteMeterDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
