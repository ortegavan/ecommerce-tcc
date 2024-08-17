describe('user list page', () => {
    beforeEach(() => cy.visit('/'));

    it('should show the page with the list of registered users', () => {
        cy.get('h1').contains('e-Commerce Admin');
        cy.get('h2').contains('Usuários cadastrados');
    });
});
