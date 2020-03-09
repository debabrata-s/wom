import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { VendorService } from 'src/app/services/vendor.service';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-vendors-page',
  templateUrl: './vendors-page.component.html',
  styleUrls: ['./vendors-page.component.scss']
})
export class VendorsPageComponent implements OnInit {
  pageTitle="Vendors/Customer Page";
  viewMode = "tab1";
  pageMenus = ['Import', 'Export'];
  vendors: any[];
  customers: any[];

  dataSource;
  dataSource2;

  displayedColumns: string[] = ['CompanyName', 'Address', 'Phone', 'WebSite', 'Name', 'Email', 'VendorType','Description'];
  displayedColumns2: string[] = ['CustomerName', 'Address', 'Phone', 'WebSite', 'Email', 'CoustomerType'];

  constructor(private router:Router,private vendorService: VendorService, private customerService: CustomerService) { }

  

  ngOnInit() {
    this.vendorService.getAllvendor().subscribe(data => {
      this.vendors = data.message;
      console.log(this.vendors)
      this.dataSource = new MatTableDataSource<any>(this.vendors);
    })
    
    this.customerService.getAllcustomer().subscribe(data => {
      this.customers = data.message;
      console.log(this.customers)
      this.dataSource2 = new MatTableDataSource<any>(this.customers);
    })

  }
  
  openPageMenu(pageMenu:any){
    console.log(pageMenu);
    if(pageMenu === 'Import'){
      this.router.navigate(['/vendors-import']);
    }
  }
 
}
