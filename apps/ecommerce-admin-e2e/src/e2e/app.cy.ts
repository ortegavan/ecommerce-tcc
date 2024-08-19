import { getGreeting } from '../support/app.po';

describe('ecommerce-admin-e2e', () => {
    beforeEach(() => cy.visit('/'));

    it('should display e-Commerce Admin message', () => {
        cy.login('mail@mail.com', '123456');
        getGreeting().contains('e-Commerce Admin');
    });
});
