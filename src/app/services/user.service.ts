import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { PaginatedResult, Pagination } from '../model/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  getUsersWithPagination(page?, itemsPerPage?): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<User[]>(this.baseUrl, { observe: 'response', params })
      .pipe(map(response => {
        paginatedResult.result = response.body;

        let pageHeader: Pagination = {
          totalItems: 50,
          currentPage: 3,
          itemsPerPage: 5,
          totalPages: 15
        };

        paginatedResult.pagination = pageHeader;
        // response.headers.append('Pagination', JSON.stringify(pageHeader));

        // if (response.headers.get('Pagination') != null) {
        //   paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        // }

        return paginatedResult;
      }));
  }

}
