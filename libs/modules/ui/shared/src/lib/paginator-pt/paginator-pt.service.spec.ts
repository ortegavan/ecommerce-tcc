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

    it('should return correct range label', () => {
        expect(service.getRangeLabel(0, 10, 100)).toBe('1 - 10 de 100');
        expect(service.getRangeLabel(1, 10, 100)).toBe('11 - 20 de 100');
        expect(service.getRangeLabel(9, 10, 100)).toBe('91 - 100 de 100');
    });

    it('should return correct range label when length is zero', () => {
        expect(service.getRangeLabel(0, 10, 0)).toBe('0 de 0');
    });

    it('should return correct range label when pageSize is zero', () => {
        expect(service.getRangeLabel(0, 0, 100)).toBe('0 de 100');
    });
});
