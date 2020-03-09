import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  // drawerName: string;
  sidenav: MatSidenav;
  drawerName: string
  formDrawerOpened: boolean;
  private drawerSubject = new BehaviorSubject(false);
  drawerStatus = this.drawerSubject.asObservable();
  private drawerNameSubject = new BehaviorSubject('');
  drawer = this.drawerNameSubject.asObservable()
  
  selectedSetOfPart = new BehaviorSubject('');
  constructor() { }
  toggleStatus() {
    this.drawerSubject.next(!this.formDrawerOpened);
    console.log("toggle status: ", this.formDrawerOpened);
    this.sidenav.toggle();
  }
  getStatus() {
    this.drawerStatus.subscribe(x => this.formDrawerOpened = x);
  }
  setDrawer(s: string) {
    this.drawerNameSubject.next(s);
    console.log('drawer is set to ', s);
  }
  getDrawer() {
    this.drawer.subscribe(x => this.drawerName = x);
  }
  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
  setSetOfPart(setOfPart) {
    this.selectedSetOfPart.next(setOfPart)
  }
  getSetOfPart() {
    return this.selectedSetOfPart;
  }
}

