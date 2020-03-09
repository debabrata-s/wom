import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PeopleFormComponent } from '../../forms/people-form/people-form.component';
import { TeamFormComponent } from '../../forms/team-form/team-form.component';
import { TeamEditFormComponent } from '../../forms/team-form/team-edit-form.component';
import { Router, Data } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { ApiService } from 'src/app/services/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { DeleteUserDialogComponent } from '../../detail-components/dialog-confirmations/delete-user-dialog/delete-user-dialog.component';
class People{
  Name;
  Email;
  PhoneNumber;
  JobTitle;
  CompanyName;
  AccountType;
  LastVisit;
}
@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit, AfterViewInit{
  pageTitle = 'People and Teams';
  viewMode = 'tab1';
  pageMenus = ['Import'];
  showEditProfileForm = false;

  dataSource;
  dataSource2;

  displayedColumns: string[] = ['Name', 'Email', 'PhoneNumber', 'JobTitle', 'CompanyName', 'AccountType', 'LastVisit'];

  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(public dialog: MatDialog, private router: Router, private peopleService: PeopleService, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllPeople().subscribe((data: any) => {
     
      this.dataSource = new MatTableDataSource<any>(data.message);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.apiService.getAllTeam().subscribe((data: Data) => {
      this.dataSource2 = new MatTableDataSource<any>(data.message);
      console.log(this.dataSource2);
      
    });
  }
  ngAfterViewInit(){
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)

  }

  openPeopleImport() {
    this.router.navigate(['/people-import']);
  }
  openPeopleDialog() {
    const dialogRef = this.dialog.open(PeopleFormComponent, {
      width: '550px',
      height: '700px'
    })
  }
  openTeamDialog() {
    const dialogRef = this.dialog.open(TeamFormComponent, {
      width: '600px',
    })
  }
  openTeamEditDialog() {
    const dialogRef = this.dialog.open(TeamEditFormComponent, {
      width: '600px',
    })
  }
  deleteUser() {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '500px',
      height: '270px'
    })
  }

 
  
}