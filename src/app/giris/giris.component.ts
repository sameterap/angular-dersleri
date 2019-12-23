import { Component, OnInit } from '@angular/core';
import { User, UserType } from '../model/user.type';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {

  ngOnInit() {

  }

  name = 'atilim-app';

  version = 0;
  user: User;
  userType: UserType;

  incrementNumber() {
    this.version++;
  }

  generateUser() {
    this.user = {
      id: 1,
      name: 'Atılım'
    };

    const userTypeName = new UserType('Admin');

    this.userType = userTypeName;
  }

}
