import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@ecommerce/user-data-access';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'ecommerce-user-profile',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
    @Input() user!: User;
    @Output() dismiss = new EventEmitter<void>();
}
