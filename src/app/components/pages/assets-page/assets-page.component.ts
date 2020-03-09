import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AssetDetailsComponent } from '../../detail-components/asset-details/asset-details.component';
import { DrawerService } from 'src/app/services/drawer.service';
@Component({
  selector: 'app-assets-page',
  templateUrl: './assets-page.component.html',
  styleUrls: ['./assets-page.component.scss']
})
export class AssetsPageComponent implements OnInit {
  pageTitle = 'Assets';
  viewMode = "tab1";
  pageMenus = ['Update', 'Import', 'Export Assets to CSV', 'Generate QR codes and Print PDF'];
  displayedColumns = [
    { def: 'select', title: 'Select', show: true },
    { def: 'title', title: 'Name', show: true },
    { def: 'id', title: 'ID', show: true },
    { def: 'location', title: 'Location', show: true },
    { def: 'area', title: 'Area', show: true },
    { def: 'type', title: 'Type', show: true },
    { def: 'barcode', title: 'Barcode', show: true },
    { def: 'category', title: 'Category', show: true }
  ]
  dataSource;
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private router: Router, private apiService: ApiService, public dialog: MatDialog, public drawerService: DrawerService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.apiService.getAllAsset().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data.message);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  openPageMenu(pageMenu: any) {
    console.log(pageMenu);
    if (pageMenu === 'Update') {
      this.router.navigate(['/assets-update']);
    }
    if (pageMenu === 'Import') {
      this.router.navigate(['/assets-import']);
    }
    if (pageMenu === 'Manage Templates') {
      this.router.navigate(['/manage-templates']);
    }
  }
  getDisplayedColumns(): string[] {
    return this.displayedColumns
      .filter(cd => cd.show)
      .map(cd => cd.def);
  }
  detailsDialog() {
    const dialogRef = this.dialog.open(AssetDetailsComponent, {
      width: '800px',
      height: '800px'
    });
  }
  openAssetForm() {
    this.drawerService.setDrawer('assetForm')
    this.drawerService.toggleStatus();
  }
}
