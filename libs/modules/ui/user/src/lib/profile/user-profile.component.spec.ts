import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from '../profile/user-profile.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { mockUsers } from '@ecommerce/user-data-access';

describe('UserProfileComponent', () => {
    let component: UserProfileComponent;
    let fixture: ComponentFixture<UserProfileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, UserProfileComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserProfileComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display user details correctly', () => {
        const mockUser = mockUsers[0];
        component.user = mockUser;
        fixture.detectChanges();

        const avatarElement: HTMLImageElement = fixture.debugElement.query(
            By.css('.user-details__avatar')
        ).nativeElement;
        const nameElement: HTMLElement = fixture.debugElement.query(
            By.css('h2')
        ).nativeElement;
        const emailElement: HTMLElement = fixture.debugElement.query(
            By.css('p')
        ).nativeElement;
        const bioElement: HTMLElement = fixture.debugElement.query(
            By.css('.user-details__bio')
        ).nativeElement;

        expect(avatarElement.src).toContain(mockUser.avatar);
        expect(nameElement.textContent).toBe(mockUser.name);
        expect(emailElement.textContent).toBe(mockUser.email);
        expect(bioElement.textContent).toBe(mockUser.biography);
    });

    it('should emit dismiss event when close button is clicked', () => {
        jest.spyOn(component.dismiss, 'emit');

        const buttonElement: DebugElement = fixture.debugElement.query(
            By.css('.user-details__close')
        );
        buttonElement.triggerEventHandler('click', null);

        expect(component.dismiss.emit).toHaveBeenCalled();
    });

    it('should have required elements', () => {
        component.user = mockUsers[0];
        fixture.detectChanges();

        const avatarElement = fixture.debugElement.query(
            By.css('.user-details__avatar')
        );
        const nameElement = fixture.debugElement.query(By.css('h2'));
        const emailElement = fixture.debugElement.query(By.css('p'));
        const bioElement = fixture.debugElement.query(
            By.css('.user-details__bio')
        );

        expect(avatarElement).toBeTruthy();
        expect(nameElement).toBeTruthy();
        expect(emailElement).toBeTruthy();
        expect(bioElement).toBeTruthy();
    });
});
