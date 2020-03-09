import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-additional-cost-dialog-form',
  templateUrl: './additional-cost-dialog-form.component.html',
  styleUrls: ['./additional-cost-dialog-form.component.scss']
})
export class AdditionalCostDialogFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AdditionalCostDialogFormComponent>) { }

  ngOnInit() {
  }
 closeDialog(){
  this.dialogRef.close();
 }
}
