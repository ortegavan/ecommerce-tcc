import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { UserListComponent } from '@ecommerce/user-ui';
import { mockUsers } from '@ecommerce/user-data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                UsersComponent,
                UserListComponent,
                HttpClientTestingModule,
                NoopAnimationsModule,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should pass the users$ observable data to the UserListComponent', () => {
        component.users$ = of(mockUsers);
        fixture.detectChanges();

        const userListDebugElement = fixture.debugElement.query(
            By.directive(UserListComponent)
        );
        const userListComponentInstance =
            userListDebugElement.componentInstance as UserListComponent;

        expect(userListComponentInstance.users).toEqual(mockUsers);
    });

    it('should call sortData when sort event is emitted', () => {
        const sortSpy = jest.spyOn(component, 'sortData');
        const userListDebugElement = fixture.debugElement.query(
            By.directive(UserListComponent)
        );

        userListDebugElement.triggerEventHandler('sort', {
            active: 'name',
            direction: 'asc',
        });
        expect(sortSpy).toHaveBeenCalledWith({
            active: 'name',
            direction: 'asc',
        });
    });

    it('should call showDetails when showDetails event is emitted', () => {
        const showDetailsSpy = jest.spyOn(component, 'showDetails');
        const userListDebugElement = fixture.debugElement.query(
            By.directive(UserListComponent)
        );

        userListDebugElement.triggerEventHandler(
            'showDetails',
            mockUsers[0].id
        );
        expect(showDetailsSpy).toHaveBeenCalledWith(mockUsers[0].id);
    });

    it('should call changePage when changePage event is emitted', () => {
        const changePageSpy = jest.spyOn(component, 'changePage');
        const userListDebugElement = fixture.debugElement.query(
            By.directive(UserListComponent)
        );

        userListDebugElement.triggerEventHandler('changePage', {
            pageIndex: 1,
            pageSize: 10,
        });
        expect(changePageSpy).toHaveBeenCalledWith({
            pageIndex: 1,
            pageSize: 10,
        });
    });
});
