import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Sort, Paging } from '@ecommerce/shared-data-access';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

    constructor(private http: HttpClient) {}

    getUsers(paging: Paging, sort?: Sort): Observable<User[]> {
        let requestUrl = `${this.apiUrl}/users?limit=${paging.limit}&page=${paging.page}`;

        if (sort) {
            requestUrl += `&orderBy=${sort.orderBy}&order=${sort.order}`;
        }

        return this.http.get<User[]>(requestUrl);
    }
}
