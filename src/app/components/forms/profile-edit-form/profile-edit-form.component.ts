import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  profile:Profile;
  status = ['busy', 'free', 'off'];
  user = {
    email: 'deb@wom.vom',
    firstName: 'Dev',
    lastName: 'S',
    profileImg: 'assets/images/faces/face8.jpg',
    phone: '89856565345',
    jobTitle: 'dev',
    notification: true,
    status: this.status[0]
  }
  profileEditForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profile = this.user;
    this.profileEditForm = this.fb.group({
      profileImg:[''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      jobTitle: ['']
    })
  }
  onSubmit(){
    console.log(this.profileEditForm.value);
    
  }

}
