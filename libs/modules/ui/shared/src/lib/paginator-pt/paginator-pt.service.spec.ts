import { TestBed } from '@angular/core/testing';

import { PaginatorPtService } from './paginator-pt.service';

describe('PaginatorPtService', () => {
    let service: PaginatorPtService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PaginatorPtService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
