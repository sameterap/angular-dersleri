import { Component, ViewEncapsulation } from '@angular/core';
import { User, UserType } from './model/user.type';

@Component({
  // encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
