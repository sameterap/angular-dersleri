import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('pRef', { static: false }) pRef: ElementRef;
  @ViewChild('appBtn', { static: false }) appBtn: ButtonComponent;
  id: number;
  user: User;
  subscribtion: Subscription;
  token: string;

  dateTime = new Date();

  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) { }


  ngAfterViewInit() {

    console.log(this.pRef.nativeElement.innerHTML);
    this.pRef.nativeElement.innerHTML = 'Değiştirdik';

    this.appBtn.text = 'Deneme';
  }

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
