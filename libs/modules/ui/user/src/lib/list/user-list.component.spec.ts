import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { mockUsers } from '@ecommerce/user-data-access';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                UserListComponent,
                NoopAnimationsModule,
                MatTableModule,
                MatIconModule,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        component.paging = { page: 0, limit: 10, total: 100 };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render table columns', () => {
        component.users = mockUsers;
        component.displayedColumns = [
            'id',
            'name',
            'email',
            'createdAt',
            'details',
        ];
        fixture.detectChanges();

        const id = document.querySelectorAll('th')[0] as HTMLElement;
        expect(id.textContent).toContain('Id');

        const name = document.querySelectorAll('th')[1] as HTMLElement;
        expect(name.textContent).toContain('Nome');

        const email = document.querySelectorAll('th')[2] as HTMLElement;
        expect(email.textContent).toContain('E-mail');

        const createdAt = document.querySelectorAll('th')[3] as HTMLElement;
        expect(createdAt.textContent).toContain('Cadastrado em');
    });

    it('should emit showDetails event when details button is clicked', () => {
        jest.spyOn(component.showDetails, 'emit');

        component.users = mockUsers;
        fixture.detectChanges();

        const detailsButton = fixture.debugElement.query(
            By.css('button')
        ).nativeElement;
        detailsButton.click();

        expect(component.showDetails.emit).toHaveBeenCalledWith(
            component.users[0]
        );
    });

    it('should emit changePage event when paginator page is changed', () => {
        jest.spyOn(component.changePage, 'emit');
        fixture.detectChanges();

        const paginator = fixture.debugElement.query(By.directive(MatPaginator))
            .componentInstance as MatPaginator;
        const pageEvent: PageEvent = {
            pageIndex: 1,
            pageSize: 10,
            length: 100,
        };
        paginator.page.emit(pageEvent);

        expect(component.changePage.emit).toHaveBeenCalledWith(pageEvent);
    });
});
