import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-set-of-part-dialog',
  templateUrl: './delete-set-of-part-dialog.component.html',
  styleUrls: ['./delete-set-of-part-dialog.component.scss']
})
export class DeleteSetOfPartDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteSetOfPartDialogComponent>,
    private apiService: ApiService,
    private router: Router,
    public toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }
  deleteSetOfPart(){
    console.log(this.data);
    
    this.apiService.deleteSetOfPart(this.data).subscribe(res => {
      console.log(res);
      this.toastr.success("Set of Parts deleted successfully!")
      this.router.navigate(['inventory/set-of-parts']);
    }, (error: HttpErrorResponse) => {
      console.log(error)
    })
    
  }
  closeDialog(){
    this.dialogRef.close();
  }


}
