import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerFormValue: Register;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      phone:['',[Validators.required]],
      business_type:['',[Validators.required]],
      role:['',[Validators.required]]
    });
  }
  register(){
    this.registerFormValue = this.registerForm.value;
    console.log(this.registerFormValue);
    console.log(this.registerForm.valid);
  }

}
