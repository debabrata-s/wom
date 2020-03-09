import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDrawer } from '@angular/material';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss']
})
export class RequestsPageComponent implements OnInit {
  pageTitle = "Requests";
  pageMenus = ['Edit Request Form'];
  drawerName = "";
  position = ""
  width = ""
  status: boolean = false;
  sortOptions = ['Due Date', 'Date Created', 'Last Updated'];
  selectedSorting=this.sortOptions[0];
  showOptions = ['All', 'Reactive', 'Repeating'];
  selectedShowOption=this.showOptions[0]
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  filters = [
    { name: 'Pending Approval' },
    { name: 'Created By: Sam' }
  ];
  constructor(private drawerService: DrawerService) { }

  ngOnInit() {
  }
  remove(filter): void {
    const index = this.filters.indexOf(filter);
    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }
  openFilterDrawer() {
    this.drawerName = "filter";
    this.position = "start";
  }

  openFormDrawer() {
    this.drawerName = "form";
    this.position = "end";
    this.status = true;
  }

  openRequestForm() {
    this.drawerService.setDrawer('requestForm');
    this.drawerService.toggleStatus();
  }
}
