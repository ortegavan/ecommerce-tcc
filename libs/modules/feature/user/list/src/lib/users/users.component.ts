import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
    selector: 'ecommerce-users',
    standalone: true,
    imports: [CommonModule, MatTableModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
    // TODO: todo código aqui é temporário, será alterado para utilizar services
    http = inject(HttpClient);
    users$!: Observable<any>;
    colunas = ['id', 'name', 'email'];

    ngOnInit(): void {
        this.users$ = this.http.get(
            'https://65009f9718c34dee0cd53786.mockapi.io/users'
        );
    }
}
