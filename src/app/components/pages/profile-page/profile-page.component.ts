import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profile: Profile;
  status = ['busy', 'free', 'off']
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
  pageMenus = ['Edit Profile', 'Delete Account'];

  constructor() { }

  ngOnInit() {
    this.profile = this.user;

  }

}
