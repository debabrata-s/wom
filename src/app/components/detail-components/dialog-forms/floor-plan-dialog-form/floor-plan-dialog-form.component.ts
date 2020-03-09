import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-floor-plan-dialog-form',
  templateUrl: './floor-plan-dialog-form.component.html',
  styleUrls: ['./floor-plan-dialog-form.component.scss']
})
export class FloorPlanDialogFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FloorPlanDialogFormComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
