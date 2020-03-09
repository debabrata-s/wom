import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatPaginator, MatSort, MatDrawer, MatTableDataSource } from '@angular/material';
import { PartDetailsComponent } from 'src/app/components/detail-components/part-details/part-details.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-parts-page',
  templateUrl: './parts-page.component.html',
  styleUrls: ['./parts-page.component.scss']
})
export class PartsPageComponent implements OnInit {
  pageTitle = "Parts";
  viewMode = "tab1";
  pageMenus = ['Update', 'Import', 'Export parts to CSV', 'Generate QR codes and Print PDF'];
  parts = [];
  detailData = {};
  displayedColumns = [
    // { def: 'select', title: 'Select', show: true },
    { def: 'Title', title: 'Name', show: true },
    { def: 'id', title: 'ID', show: true },
    { def: 'Quantity', title: ' Quantity', show: true },
    { def: 'Cost', title: 'Cost', show: true },
    { def: 'Barcode', title: 'Barcode', show: true },
    { def: 'Area', title: 'Area', show: true },
    { def: 'Category', title: 'Category', show: true },
    { def: 'Description', title: 'Description', show: true },
    { def: 'LocationName', title: 'Location', show: true },
    { def: 'WorkerTitle', title: 'Assigned Users', show: true },
    { def: 'VendorName', title: 'Assigned Vendors', show: true },
    { def: 'created_at', title: 'Date Added', show: true },
    { def: 'openWorkOrder', title: 'Open Work Orders', show: true },
    { def: 'TeamId', title: 'Team Id', show: false },
    { def: 'CustomerId', title: 'Customer Id', show: false },
    { def: 'VendorId', title: 'Vendor Id', show: false },
    { def: 'NonStock', title: 'Non Stock', show: false },

  ];
  dataSource;
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public drawerService: DrawerService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.apiService.getAllParts().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data.message);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  openPageMenu(pageMenu: any) {
    console.log(pageMenu);
    if (pageMenu === 'Update') {
      this.router.navigate(['/parts-update']);
    }
    if (pageMenu === 'Import') {
      this.router.navigate(['/parts-import']);
    }
  }
  openPartDetails(id) {
    this.apiService.getPart(id).subscribe((x) => {
      this.detailData = x;
      this.dialog.open(PartDetailsComponent, {
        width: '800px',
        height: '800px',
        data: this.detailData
      });
    });
  }
  openPartForm() {
    this.drawerService.setDrawer("partForm");
    this.drawerService.toggleStatus();
  }
  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: any): string {                                                                            //add type as part
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)

  // }

  getDisplayedColumns(): string[] {
    return this.displayedColumns
      .filter(cd => cd.show)
      .map(cd => cd.def);
  }

}