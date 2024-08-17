import { TestBed } from '@angular/core/testing';

import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { mockUsers } from '../mocks/user.mock';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });

        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(UserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return users correctly', () => {
        const url = `${service.apiUrl}/users?limit=10&page=1`;
        const paging = { limit: 10, page: 1, total: 10 };
        let result: User[] = [];

        service.getUsers(paging).subscribe((users) => (result = users));

        const request = httpMock.expectOne(url);
        request.flush(mockUsers);
        expect(request.request.method).toBe('GET');
        expect(result).toEqual(mockUsers);
    });
});
