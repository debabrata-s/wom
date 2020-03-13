import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-asset-dialog',
  templateUrl: './add-asset-dialog.component.html',
  styleUrls: ['./add-asset-dialog.component.scss']
})
export class AddAssetDialogComponent implements OnInit {
  assets = [];
  constructor(
    public dialogRef: MatDialogRef<AddAssetDialogComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);

    this.updateAssets();
  }
  updateAssets() {
    this.apiService.getAllAsset().subscribe((data: any) => {
      this.assets = data.message;
    })
  }
  addAsset(id) {
    this.apiService.addPartAsset(id, this.data).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);

    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
