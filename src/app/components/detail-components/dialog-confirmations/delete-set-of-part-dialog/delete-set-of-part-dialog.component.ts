import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-set-of-part-dialog',
  templateUrl: './delete-set-of-part-dialog.component.html',
  styleUrls: ['./delete-set-of-part-dialog.component.scss']
})
export class DeleteSetOfPartDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteSetOfPartDialogComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }
  deleteSetOfPart(){
    this.apiService.deletePart(this.data).subscribe(res => {
      console.log(res);
      window.location.reload();
    }, (error: HttpErrorResponse) => {
      console.log(error)
    })
    
  }
  closeDialog(){
    this.dialogRef.close();
  }


}
