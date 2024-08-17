import { getGreeting } from '../support/app.po';

describe('ecommerce-admin-e2e', () => {
    beforeEach(() => cy.visit('/'));

    it('should display e-Commerce Admin message', () => {
        // Custom command example, see `../support/commands.ts` file
        cy.login('my-email@something.com', 'myPassword');

        // Function helper example, see `../support/app.po.ts` file
        getGreeting().contains(/e-Commerce Admin/);
    });
});
