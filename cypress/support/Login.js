Cypress.Commands.add('login', (email = 'john@mail.com', password = '12345Qwert!') => {
  cy.visit('/')
  cy.get('[href="/login"]').click();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.contains('.btn', "Sign in").click();
});