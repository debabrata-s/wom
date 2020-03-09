import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatDialogRef } from '@angular/material';

const FILE_DATA: any[] = [
  { name: 'bill', type: 'image'},
  { name: 'report', type: 'pdf'},
  { name: 'damaged part', type: 'image'}
]

@Component({
  selector: 'app-add-files-dialog-form',
  templateUrl: './add-files-dialog-form.component.html',
  styleUrls: ['./add-files-dialog-form.component.scss']
})
export class AddFilesDialogFormComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'type'];
  dataSource = new MatTableDataSource(FILE_DATA);
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private dialogRef: MatDialogRef<AddFilesDialogFormComponent>){}
  ngOnInit(){
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  closeDialog(){
    this.dialogRef.close();
  }
  onFileInput(event){
    console.log(event);
    
  }
}
