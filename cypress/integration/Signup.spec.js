describe('Signup', () => {
  const userName = Cypress.userName();
  const userEmail = Cypress.userEmail();

  beforeEach(() => {
    cy.visit('/')
  })

  it('New user should be able to signIn', () => {
cy.get('[href="/register"]').click();
cy.contains('.btn', "Sign up")
  .click({force: true})
  .should("have.attr", "type", "submit")
  .and('be.disabled');
  
cy.get('[placeholder="Username"]').type(userName);
cy.get('[placeholder="Email"]').type(userEmail);
cy.get('[placeholder="Password"]').type("2345Qwert!");
cy.contains('.btn', "Sign up")
  .should('not.be.disabled')
  .click();
  
  cy.contains(':nth-child(4) > .nav-link', 'User').should('be.visible')
  })
})