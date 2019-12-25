import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Pagination, PaginatedResult } from 'src/app/model/pagination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  pagination: Pagination = {
    totalItems: 30,
    currentPage: 2,
    itemsPerPage: 5,
    totalPages: 10
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe((data: User[]) => {
    //     this.users = data;
    //   });

    // this.userService.getUsers().subscribe((data: User[]) => {
    //   this.users = data;
    // });

    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/users', id]);
  }

  pageChanged(event: any) {
    this.pagination.currentPage = event.page;
    console.log(this.pagination.currentPage);

    this.userService.getUsersWithPagination(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<User[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      });
  }

}
