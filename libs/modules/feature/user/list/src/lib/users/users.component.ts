import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User, UserService } from '@ecommerce/user-data-access';
import { Sort } from '@ecommerce/shared-data-access';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '@ecommerce/user-detail';
import { Sort as MatSort } from '@angular/material/sort';
import { UserListComponent } from '@ecommerce/user-ui';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'ecommerce-users',
    standalone: true,
    imports: [CommonModule, UserListComponent],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
    users$!: Observable<User[]>;

    totalUsers = 18; // Esta informação deveria vir da api mas não vem
    paging = { limit: 10, page: 1, total: this.totalUsers };
    sort!: Sort;

    userService = inject(UserService);
    dialog = inject(MatDialog);

    ngOnInit(): void {
        this.getUsers();
    }

    showDetails(user: User): void {
        this.dialog.open(UserDetailsComponent, {
            data: user,
        });
    }

    getUsers() {
        this.users$ = this.userService.getUsers(this.paging, this.sort);
    }

    sortData(event: MatSort) {
        this.sort = {
            orderBy: event.active,
            order: event.direction == '' ? 'asc' : event.direction,
        };

        this.getUsers();
    }

    changePage(event: PageEvent) {
        this.paging = {
            limit: event.pageSize,
            page: event.pageIndex + 1,
            total: this.totalUsers,
        };

        this.getUsers();
    }
}
