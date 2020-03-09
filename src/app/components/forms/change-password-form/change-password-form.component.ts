import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: ['']
    })
  }
  onSubmit() {
    console.log(this.changePasswordForm.value);
  }

}
