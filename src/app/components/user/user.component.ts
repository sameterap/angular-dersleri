import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  id: number;
  user: User;
  subscribtion: Subscription;
  token: string;
  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    // this.id = +this.route.snapshot.paramMap.get('id');
    // Eğer component bir daha kullanılmayacaksa bunu kullanabiliriz.

    this.subscribtion = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });


    // Query Strşng parameter şle gelen data
    // this.route.queryParams.subscribe(params=> {
    //   console.log(params['order']) ;
    // });


    // this.http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
    //   .subscribe((user: User) => {
    //     this.user = user;
    //   });

    this.userService.getUserById(this.id).subscribe((data: User) => {
      this.user = data;
    });



  }

  createUser() {

    // this.http.post('https://jsonplaceholder.typicode.com/users',
    //   JSON.stringify(this.user),
    //   { headers: new HttpHeaders({ 'Authorization ': 'Bearer ' + this.token }) })
    //   .subscribe(result => console.log(result));

    this.http.post('https://jsonplaceholder.typicode.com/users',
      JSON.stringify(this.user))
      .subscribe(result => console.log(result));
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
