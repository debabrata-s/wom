import { Component, OnInit, AfterViewInit, AfterContentInit, OnChanges, ViewChild, AfterViewChecked } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DrawerService } from './services/drawer.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'wom-stellar';
  isLoggedIn = "true";
  sideDrawerOpened = false;
  id: string;
  role: string;
  route = "";
  showLoadingIndicator = true;
  drawer:string;
  @ViewChild('sidenav',{static:false}) sidenav:MatSidenav;
  constructor(private router: Router, private authService: AuthService, private drawerService: DrawerService) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }

  ngOnInit() {
    //this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.id = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
    this.authService.currentStatus$.subscribe((status) => this.isLoggedIn = status)

    // forcefully changing the value of is logged in 
    setTimeout(() => {
      this.route = this.router.url;
      if (this.route === "/login" || this.route === "/register" || this.route === "/reset-password") {
        this.isLoggedIn = "false";
      }
      else {
        this.isLoggedIn = "true";
      }
    }, 20);
    this.drawerService.drawerStatus.subscribe(status => this.sideDrawerOpened = status);
    this.drawerService.drawer.subscribe(name => this.drawer = name);
  }
  ngAfterViewChecked(){
    this.drawerService.setSidenav(this.sidenav);
  }
  log(state) {
    console.log(state)
  }
  // temp signout button in app component
  logout() {
    this.authService.logout();
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
  
}
