import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserProfileComponent } from '@ecommerce/user-ui';

@Component({
    selector: 'ecommerce-user-details',
    standalone: true,
    imports: [CommonModule, UserProfileComponent],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
    user = inject(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef<UserDetailsComponent>);

    close(): void {
        this.dialogRef.close();
    }
}
