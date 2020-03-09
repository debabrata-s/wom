import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss']
})
export class PasswordResetPageComponent implements OnInit {
  resetPasswordForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email:['']
    })
   }

  ngOnInit() {
  }
  resetPassword(){}

}
