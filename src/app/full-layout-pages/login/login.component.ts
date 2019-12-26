import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  invalid = false;
  model: Login = { userId: "admin", password: "admin@123", role: "admin" }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/work-orders';
    this.authService.logout();
  }
  get f() { return this.loginForm.controls; }
  login() {  
      // stop here if form is invalid  
    if (this.loginForm.invalid) {  
       console.log("invalid form");
    }  
    else {  
       if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {  
          console.log("Login successful");  
          //this.authService.authLogin(this.model);  
          localStorage.setItem('isLoggedIn', "true");  
          localStorage.setItem('token', this.model.userId);
          localStorage.setItem('role', this.model.role);
          this.authService.changeStatus("true");   
          this.router.navigate([this.returnUrl]);
           
       }  
    else {  
       this.message = "Please check your userid and password";  
       this.invalid = true;
       }  
      }  
    }  
}
