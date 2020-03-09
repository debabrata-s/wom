import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isLoggedIn;
  constructor(private authService: AuthService) {
    this.authService.currentStatus$.subscribe(x => this.isLoggedIn = x);
  }

  getStatus(){
    console.log(this.isLoggedIn)
  }
  
}
