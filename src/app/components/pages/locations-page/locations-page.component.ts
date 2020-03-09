import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AddFilesDialogFormComponent } from '../../detail-components/dialog-forms/add-files-dialog-form/add-files-dialog-form.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { FloorPlanDialogFormComponent } from '../../detail-components/dialog-forms/floor-plan-dialog-form/floor-plan-dialog-form.component';
import { DeleteLocationDialogComponent } from '../../detail-components/dialog-confirmations/delete-location-dialog/delete-location-dialog.component';
import { FormDataService } from 'src/app/services/form-data.service';
import { LocationService } from 'src/app/services/location.service';

class Location {
  Title;
  Address;
  created_at;
}
const ASSETS = [
  { name: 'Fridge', desc: 'for 50 items', model: '2051', barcode: '84794546' },
  { name: 'TV', desc: 'description about the tv', model: '78', barcode: '124546' }
]
const WORK_ORDERS = [
  { name: 'work order 1', last_updated: 'January 11, 2020', due_date: 'August 15, 2020', status: 'Open' },
  { name: 'work order 2', last_updated: 'February 13, 2020', due_date: 'June 30, 2020', status: 'Open' }
]

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss'],
  styles: [`agm-map { height: 500px;}`]
})
export class LocationsPageComponent implements OnInit {
  pageTitle = "Locations"
  viewMode = "tab1";
  pageMenus = ['Import', 'Export'];
  locations = [];
  tableData;
  selectedLocation = new Location();
  assets = ASSETS;
  workOrders = WORK_ORDERS;
  ds = <any>[];
  // displayedColumns: string[] = ['select', 'Title', 'Address', 'created_at'];
  displayedColumns = [
    { def: 'select', title: 'Select', show: true },
    { def: 'Title', title: 'Title', show: true },
    { def: 'Address', title: 'Address', show: true },
    { def: 'created_at', title: 'Created At', show: true },
  ]
  dataSource;

  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  constructor(
    private router: Router,
    private apiService: ApiService,
    public dialog: MatDialog,
    private drawerService: DrawerService,
    private formDataService: FormDataService,
    public locationService: LocationService
  ) {
    this.dataSource = new MatTableDataSource<Location>(this.ds);
  }


  ngOnInit() {
    this.apiService.getAllLocation().subscribe((data: any) => {
      this.locations = data.message;

      for (let loc of this.locations) {
        this.tableData = new Location();
        this.tableData.Title = loc.Title;
        this.tableData.Address = loc.Address;
        this.tableData.created_at = loc.created_at;

        this.ds.push(this.tableData);
      }

      console.log('ds: ', this.ds)
    });
    this.dataSource.paginator = this.paginator;
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
  checkboxLabel(row?: Location): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Title + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  detailsDrawer(data) {
    this.selectedLocation = data;
    console.log(this.selectedLocation);
    this.locationService.setLocation(this.selectedLocation);
  }
  addFile() {
    const dialogRef = this.dialog.open(AddFilesDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
  addWorkOrder() {
    this.router.navigate(['../work-orders'])
    this.drawerService.toggleStatus();
  }
  addFloorPlan() {
    const dialogRef = this.dialog.open(FloorPlanDialogFormComponent, {
      width: '500px',
      height: '350px'
    })
  }
  deleteLocation() {
    const dialogRef = this.dialog.open(DeleteLocationDialogComponent, {
      width: '450px',
      height: '200px'
    })
  }


  //---------------------------------------------------------------------------------------------------

  openPageMenu(pageMenu: any) {
    console.log(pageMenu);
    if (pageMenu === 'Import') {
      this.router.navigate(['/location-import']);
    }
  }
  openLocationDrawer() {
    this.drawerService.setDrawer("locationForm");
    this.drawerService.toggleStatus();
  }
  // openLocationEditDrawer() {
  //  this.openLocationDrawer();    
  // }
  openLocationEditDrawer() {
    this.drawerService.setDrawer("locationEditForm");
    this.drawerService.toggleStatus();
  }
  // ------------------------------------------------------------------
  getDisplayedColumns(): string[] {
    return this.displayedColumns
      .filter(cd => cd.show)
      .map(cd => cd.def);
  }
}

