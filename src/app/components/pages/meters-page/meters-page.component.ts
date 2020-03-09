import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-meters-page',
  templateUrl: './meters-page.component.html',
  styleUrls: ['./meters-page.component.scss']
})
export class MetersPageComponent implements OnInit {
  pageTitle = 'Meters';
  pageMenus = ['Import', 'Exports'];
  constructor(private router:Router, private drawerService: DrawerService) { }

  ngOnInit() {
  }
  openPageMenu(pageMenu:any){
    console.log(pageMenu);
    if(pageMenu === 'Import'){
      this.router.navigate(['/meters-import']);
    }
  }
  openDetails(){
    this.drawerService.setDrawer('meterDetails');
    this.drawerService.toggleStatus();
  }
  addMeter(){
    this.drawerService.setDrawer('meterForm');
    this.drawerService.toggleStatus();
  }

}
