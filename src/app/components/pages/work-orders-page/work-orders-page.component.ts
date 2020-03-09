import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DrawerService } from 'src/app/services/drawer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { deflateSync } from 'zlib';
class WorkOrder {
  DueDate;
  id;
  Title;
  Priority;
  WorkerId;
  LocationId;
  AssetId;
  updated_at;
  created_at;
}
@Component({
  selector: 'app-work-orders-page',
  templateUrl: './work-orders-page.component.html',
  styleUrls: ['./work-orders-page.component.scss']
})

export class WorkOrdersPageComponent implements OnInit {
  filter = false;
  details = false;
  position: string;
  durations = ['Today', 'Tomorrow', 'Next 7 days', 'This Month', 'This Quater', 'This Year', 'Next 30 days', 'Yesterday', 'Last Week', 'Last Month'];
  pageTitle = "Work Order";
  pageMenus = ['Import/Export', 'Automate Workflows'];
  importMenus = ['Import', 'Export to CSV'];
  tableData;
  filterDrawerOpened = false;

  displayedColumns = [
    { def: 'select', title: 'Select', show: true },
    { def: 'DueDate', title: 'Due Date', show: true },
    { def: 'id', title: ' Id', show: true },
    { def: 'Title', title: 'Title', show: true },
    { def: 'Priority', title: 'Priority', show: true },
    { def: 'WorkerId', title: 'Worker Id', show: true },
    { def: 'LocationId', title: 'Location Id', show: true },
    { def: 'AssetId', title: 'Asset Id', show: true },
    { def: 'updated_at', title: 'Updated Date', show: true },
    { def: 'created_at', title: 'Created Date', show: true }
  ];
  dataSource;
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private apiService: ApiService, private drawerService: DrawerService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.apiService.getWorkOrderRequests().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data.message);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


  }
  openDrawer() {
    this.drawerService.setDrawer("workOrderForm");
    this.drawerService.toggleStatus();
  }
  open(event: any) {
    console.log(event);
    if (event === "Import") {
      this.router.navigate(['/work-order-import']);
    }
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
  checkboxLabel(row?: WorkOrder): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)

  }

  // ------------------------------------------------------------
  filterDrawer() {
    this.filter = true;
    this.details = false;
    this.position = "start";
  }
  detailsDrawer() {
    this.filter = false;
    this.details = true;
    this.position = "end";
  }
  closeDrawer() {
    this.filter = false;
    this.details = false;
  }
  // ------------------------------------------------------------------

  getDisplayedColumns(): string[] {
    return this.displayedColumns
      .filter(cd => cd.show)
      .map(cd => cd.def);
  }

}
