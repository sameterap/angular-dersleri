import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class UserListResolver implements Resolve<User[]> {

  constructor(private userService: UserService, private router: Router) { }

  // subscribe olmamıza gerek yok, resolve dedğimiz de kendisi subscribe olur
  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().pipe(catchError(error => {
      console.log('Error at getting data');
      window.alert('Error'); // alert service'imiz olabilir alert çıkarabiliriz.
      this.router.navigate(['/']);
      return of(null);
    }));
  }

}
