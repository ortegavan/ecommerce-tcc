import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { User } from '@ecommerce/user-data-access';
import { Paging } from '@ecommerce/shared-data-access';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import {
    MatPaginatorIntl,
    MatPaginatorModule,
    PageEvent,
} from '@angular/material/paginator';
import { PaginatorPtService } from '@ecommerce/shared-ui';

@Component({
    selector: 'ecommerce-user-list',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatPaginatorModule,
    ],
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorPtService }],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
})
export class UserListComponent {
    @Input({ required: true }) users: User[] = [];
    @Input({ required: true }) paging!: Paging;
    @Output() sort = new EventEmitter<Sort>();
    @Output() showDetails = new EventEmitter<User>();
    @Output() changePage = new EventEmitter<PageEvent>();

    displayedColumns = ['id', 'name', 'email', 'createdAt', 'details'];
}
