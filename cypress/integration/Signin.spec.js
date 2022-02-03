describe('Signin', () => {

  let existingUser = {
    email: "john@mail.com",
    password: "12345Qwert!"
  }

  before(() => {
    cy.visit('/');
  })

  it('New user should be able to signin', () => {
    cy.intercept("POST", "https://api.realworld.io/api/users/login", {
      fixture: "loginResponse.json",
    }).as("successfulLogin");
    cy.get('[href="/login"]').click();
    cy.contains('.btn', "Sign in")
      .click({force: true})
      .should("have.attr", "type", "submit")
      .and('be.disabled');
    cy.get('[placeholder="Email"]').type(existingUser.email);
    cy.get('[placeholder="Password"]').type(existingUser.password);
    cy.contains('.btn', "Sign in")
      .should('not.be.disabled')
      .click();
    cy.wait("@successfulLogin").its("response.statusCode").should("eq", 200);
    cy.wait(2000);
    cy.get('ul.nav.navbar-nav.pull-xs-right')
      .should("be.visible")
      .within(() => {
      cy.get(".nav-item")
        .eq(0).find("a")
        .should("have.attr", "href", "/")
        .and("contain", "Home");
      cy.get(".nav-item")
        .eq(1).find("a")
        .should("have.attr", "href", "/editor")
        .and("contain", "New Article");
      cy.get(".nav-item")
        .eq(2).find("a")
        .should("have.attr", "href", "/settings")
        .and("contain", "Settings");
      cy.get(".nav-item")
        .eq(3).find("a")
        .should("have.attr", "href", "/profile/Johny")
        .and("contain", "Johny");
    })
  })
})