import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';
import { AddPartsService } from 'src/app/services/add-parts.service';
import { ThemeService } from 'ng2-charts';

const PART_DATA: any[] = [
  { name: 'Gears', quantity: 54, cost: '50$' },
  { name: 'Compressor', quantity: 34, cost: '24$' },
  { name: 'Copper tube', quantity: 121, cost: '12$' }
];
const SET_PART_DATA: any[] = [
  { name: 'Refrigerator parts', quantity: 40, cost: '540$' },

];
@Component({
  selector: 'app-part-dialog-form',
  templateUrl: './part-dialog-form.component.html',
  styleUrls: ['./part-dialog-form.component.scss']
})
export class PartDialogFormComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'cost'];
  dataSource;
  dataSource2;
  selection = new SelectionModel<any>(true, []);

  constructor(
    private dialogRef: MatDialogRef<PartDialogFormComponent>,
    private apiService: ApiService,
    private addPartService: AddPartsService
  ) { }
  ngOnInit() {
    this.updateData();
  }
  updateData() {
    this.apiService.getAllParts().subscribe((data: any) => {
      this.dataSource = data.message;
    });
    this.apiService.getAllSetOfParts().subscribe((data: any) => {
      this.dataSource2 = data.message;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
  getPartId(id) {
    this.addPartService.addPart(id);
  }
  getSetIds(data) {
    this.apiService.getSetOfPart(data.id).subscribe((data: any) => data.message.part_detail.map(x => this.addPartService.addPart(x.id)))

  }
  closeDialog() {
    this.dialogRef.close();
  }
}