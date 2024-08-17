import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User, UserService } from '@ecommerce/user-data-access';

@Component({
    selector: 'ecommerce-users',
    standalone: true,
    imports: [CommonModule, MatTableModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
    users$!: Observable<User[]>;
    displayedColumns = ['id', 'name', 'email'];
    userService = inject(UserService);

    ngOnInit(): void {
        this.users$ = this.userService.getUsers();
    }
}
