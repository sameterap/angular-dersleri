import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe((data: User[]) => {
    //     this.users = data;
    //   });

    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/users', id]);
  }

}
