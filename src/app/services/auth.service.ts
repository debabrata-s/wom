import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus = new BehaviorSubject('');
  currentStatus$ = this.loginStatus.asObservable();
  constructor() { }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    this.changeStatus("false");
  }
  
  changeStatus(status: string) {
    this.loginStatus.next(status);
  }
 
}
