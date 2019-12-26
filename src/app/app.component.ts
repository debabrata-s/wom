import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wom-stellar';
  isLoggedIn="true";
  id: string;
  role: string;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    //this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.id = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
    this.authService.currentStatus$.subscribe(x => this.isLoggedIn = x);
  }

// temp signout button in app component
  logout() {
    this.authService.logout();
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.router.navigate(['/login']);
  }


}
