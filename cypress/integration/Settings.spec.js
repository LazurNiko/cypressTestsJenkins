describe('Settings', () => {

  beforeEach(() => {
    cy.login();
  });

  it('User should have an ability to edit the email and password in profile settings', () => {

    cy.get('[href="/settings"]')
      .click();
    cy.url()
      .should('include','/settings');
    cy.get('[placeholder="Short bio about you"]')
      .clear()
      .type('My edited bio');
    cy.get('[placeholder="Email"]')
      .clear()
      .type('niko1@mail.com');
    cy.get('[placeholder="New Password"]')
      .clear()
      .type('123456Qwert!');
  
    cy.get('[placeholder="Email"]')
      .clear()
      .type('niko@mail.com');
      cy.get('[placeholder="New Password"]')
      .clear()
      .type('123456Qwert!');
      cy.contains('.btn', 'Update Settings')
      .click();
  });

  it('User should have an ability to change username', () => {
    cy.get('[href="/settings"]')
      .click();
      cy.url()
      .should('include','/settings');
    cy.get('[placeholder="Username"]')
      .clear()
      .type('NikoUser');
    cy.get('.btn-lg')
      .click();
    cy.get('[placeholder="Username"]')
      .clear()
      .type('John');
    cy.get('.btn-lg')
      .click();
  });
  
  it('User should have an ability to add the image in profile settings', () => {
    cy.get('[href="/settings"]')
      .click();
      cy.url()
      .should('include','/settings');
    cy.get('[placeholder="URL of profile picture"]')
      .clear()
      .type('https://static3.depositphotos.com/1000627/109/i/600/depositphotos_1095588-stock-photo-green-eyed-cat.jpg');
    cy.get('.btn-lg')
      .click();
  });
})