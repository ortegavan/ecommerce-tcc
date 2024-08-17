import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { mockUsers } from '@ecommerce/user-data-access';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserListComponent, NoopAnimationsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        component.users = mockUsers;
        component.paging = { page: 1, limit: 10, total: 100 };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
