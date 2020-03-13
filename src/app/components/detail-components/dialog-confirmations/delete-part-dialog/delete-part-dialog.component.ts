import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-part-dialog',
  templateUrl: './delete-part-dialog.component.html',
  styleUrls: ['./delete-part-dialog.component.scss']
})
export class DeletePartDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeletePartDialogComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data);

  }

  deletePart() {
    this.apiService.deletePart(this.data).subscribe(res => {
      console.log(res);
      this.apiService.removeAllPartFile(this.data).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      console.log(error)
    })

    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }


}
