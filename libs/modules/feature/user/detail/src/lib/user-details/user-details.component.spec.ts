import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { mockUsers } from '@ecommerce/user-data-access';

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;
    let dialogRefMock: Partial<MatDialogRef<UserDetailsComponent>>;

    beforeEach(async () => {
        dialogRefMock = {
            close: jest.fn(),
        };

        await TestBed.configureTestingModule({
            imports: [UserDetailsComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: mockUsers[0] },
                { provide: MatDialogRef, useValue: dialogRefMock },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call dialogRef.close when close method is executed', () => {
        component.close();
        expect(dialogRefMock.close).toHaveBeenCalled();
    });
});
