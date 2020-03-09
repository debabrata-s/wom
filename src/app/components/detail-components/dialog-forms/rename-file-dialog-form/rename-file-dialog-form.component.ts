import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rename-file-dialog-form',
  templateUrl: './rename-file-dialog-form.component.html',
  styleUrls: ['./rename-file-dialog-form.component.scss']
})
export class RenameFileDialogFormComponent implements OnInit {
  filename = "damaged_part.png";
  constructor(private dialogRef: MatDialogRef<RenameFileDialogFormComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
