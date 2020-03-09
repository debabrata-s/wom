import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from 'src/app/services/drawer.service';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
interface SetOfPart {
  id: string,
  setName: string,
  partid: string,
  part_detail: []
}
@Component({
  selector: 'app-set-of-parts-page',
  templateUrl: './set-of-parts-page.component.html',
  styleUrls: ['./set-of-parts-page.component.scss']
})
export class SetOfPartsPageComponent implements OnInit {
  pageTitle = "Set of Parts";
  viewMode = "tab1";
  pageMenus = ['Update', 'Import', 'Export parts to CSV', 'Generate QR codes and Print PDF'];
  displayedColumns = [
    // { def: 'select', title: 'Select', show: true },

    { def: 'setName', title: 'Name', show: true },
    { def: 'Parts', title: 'Parts', show: true },
    { def: 'Totalcost', title: ' Total Cost', show: true },
    { def: 'created_at', title: 'Date Created', show: true },
    { def: 'id', title: 'Id', show: false },
  ];
  selectedSetOfPart: SetOfPart;
  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private router: Router,
    private drawerService: DrawerService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.apiService.getAllSetOfParts().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data.message);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    console.log('this datasoruce', this.dataSource);
    
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
  openAddSet() {
    this.drawerService.setDrawer('setOfPartsForm');
    this.drawerService.toggleStatus();
  }
  openSetPartDetails(id) {
    this.drawerService.setDrawer('setOfPartDetails');
    this.drawerService.toggleStatus();
    console.log(this.drawerService.drawerName);

    this.apiService.getSetOfPart(id).subscribe((data: any) => {
      this.selectedSetOfPart = data.message;
      this.drawerService.setSetOfPart(this.selectedSetOfPart)
    })

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getDisplayedColumns(): string[] {
    return this.displayedColumns
      .filter(cd => cd.show)
      .map(cd => cd.def);
  }

}