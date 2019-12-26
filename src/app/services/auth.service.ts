import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject('');
  currentStatus$ = this.isLoggedIn.asObservable();
  constructor() { }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    this.changeStatus("false");
  }
  
  changeStatus(status: string) {
    this.isLoggedIn.next(status);
  }
}
