describe('user list page', () => {
    beforeEach(() => cy.visit('/'));

    it('should show the header of the page', () => {
        cy.get('h1').contains('e-Commerce Admin');
        cy.get('h2').contains('Usuários cadastrados');
    });

    it('should show the list of users', () => {
        cy.get('table').find('tr').should('have.length.greaterThan', 1);
    });

    it('should show the details of a user', () => {
        cy.get('button').first().click();
        cy.get('.user-details__avatar').should('exist');
        cy.get('.user-details__close').click();
    });
});
