import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-parts-filter',
  templateUrl: './parts-filter.component.html',
  styleUrls: ['./parts-filter.component.scss']
})
export class PartsFilterComponent implements OnInit {
  facilityLocations = [];
  users = [];
  teams = [];
  vendors = [];
  customers = [];
  assets = [];
  selectedLocation = "";
  selectedUser = "";
  selectedTeam = "";
  selectedVendor = "";
  selectedCustomer = "";
  selectedAsset = "";
  startDate = new Date();
  endDate = new Date();
  showOutOfStock = false;
  showMinQuantity = false;
  showCreatedByMe = false;
  showNonStock = false;
  minQuantity = 5;

  @Input() dataSource: MatTableDataSource<any>;
  constructor(
    apiService: ApiService
  ) {
    apiService.getAllUsers().subscribe((data: any) => {
      this.users = data.message;

    })
    apiService.getAllTeam().subscribe((data: any) => {
      this.teams = data.message;
      console.log(this.teams);

    })
    apiService.getAllVendor().subscribe((data: any) => {
      this.vendors = data.message;
    })
    apiService.getAllCustomers().subscribe((data: any) => {
      this.customers = data.message;
      console.log('customers', this.customers);

    })
    apiService.getAllAsset().subscribe((data: any) => {
      this.assets = data.message;

    })
    apiService.getAllLocation().subscribe((data: any) => {
      this.facilityLocations = data.message;
    })
  }

  ngOnInit() {
    // all the checkbox for filtering data tables


  }

  filterByName(name: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.Title.indexOf(filter) != -1;
    this.dataSource.filter = name.trim().toLowerCase();

  }
  filterByBarcode(barcode: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.Barcode.indexOf(filter) != -1;
    this.dataSource.filter = barcode.trim().toLowerCase();
  }
  filterByArea(area: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.Area.indexOf(filter) != -1;
    this.dataSource.filter = area.trim().toLowerCase();
  }
  filterByCategory(category: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.Category.indexOf(filter) != -1;
    this.dataSource.filter = category.trim().toLowerCase();
  }
  filterByUser(user: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.WorkerTitle.indexOf(filter) != -1;
    this.dataSource.filter = user.trim();
    console.log('selected user is ', this.selectedUser);
    console.log('selected data for filter is'), this.dataSource.filterPredicate;


  }
  filterByLocation(location: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.LocationName.indexOf(filter) != -1;
    this.dataSource.filter = location.trim();
  }

  filterByTeam(team: string) {
    // this.dataSource.filterPredicate = (data, filter: string) => data.TeamName.indexOf(filter) != -1;
    // this.dataSource.filter = team.trim();
    this.dataSource.filterPredicate = (data, filter) => {
      return data.TeamId === team
    };
    this.dataSource.filter = '' + Math.random();
  }
  filterByVendor(vendor: string) {
    // this.dataSource.filterPredicate = (data, filter: string) => data.VendorName.indexOf(filter) != -1;
    // this.dataSource.filter = vendor.trim();
    // console.log('selected vendor is ', this.selectedVendor);
    this.dataSource.filterPredicate = (data, filter) => {
      return data.VendorId === vendor
    };
    this.dataSource.filter = '' + Math.random();
  }
  filterByCustomer(customer) {
    this.dataSource.filterPredicate = (data, filter) => {
      return data.CustomerId === customer
    };
    this.dataSource.filter = '' + Math.random();
  }
  filterByAsset(asset: string) {
    this.dataSource.filterPredicate = (data, filter: string) => data.AssetId.indexOf(filter) != -1;//asset id is not there
    this.dataSource.filter = asset.trim();
    console.log('selected asset is ', this.selectedAsset);
  }
  filterByDate() {
    console.log('start date is ', this.startDate, ' and end date is ', this.endDate);
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.startDate && this.endDate) {
        return data.created_at >= this.startDate && data.created_at <= this.endDate;
      }
      return true;
    }
    this.dataSource.filter = '' + Math.random();
  }
  filterOutOfStock() {
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.showOutOfStock) {
        return data.Quantity === 0
      }
      return true;
    };
    this.dataSource.filter = '' + Math.random();
  }
  filterMinQuantityParts() {
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.showMinQuantity) {
        return data.Quantity <= this.minQuantity
      }
      return true;
    };
    this.dataSource.filter = '' + Math.random();
  }
  filterNonStockPart() {
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.showNonStock) {
        return data.Nonstock === true;
      }
      return true;
    };
    this.dataSource.filter = '' + Math.random();
  }
  helloWorld() {
    console.log("hello world");

  }

}
