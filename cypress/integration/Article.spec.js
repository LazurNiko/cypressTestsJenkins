describe('Article', () => {

  beforeEach(() => {
    cy.login();
  })

  it('User should have an ability to create new article', () => {
      cy.get('[href="/editor"]')
        .click();
      cy.url()
        .should('include', 'editor');
      cy.get('[placeholder="Article Title"]')
        .type("some title");
      cy.get(`[placeholder="What's this article about?"]`)
        .type("some description");
      cy.get('[placeholder="Write your article (in markdown)"]')
        .type("some text");
      cy.contains('.btn', 'Publish Article')
        .click();
    });
  
    it('User should be able to delete article', () => {
      cy.get('[href="/editor"]')
        .click();
      cy.url()
        .should('include', 'editor');
      cy.get('[placeholder="Article Title"]')
        .type('My best Article');
      cy.get(`[placeholder="What's this article about?"]`)
        .type('Article');
      cy.get('[placeholder="Write your article (in markdown)"]')
        .type('My new article is created');
      cy.contains('.btn', 'Publish Article')
        .click();
      cy.get('.btn.btn-outline-danger.btn-sm')
        .click({multiple: true});
      cy.url().
        should('include', '/');
      cy.get('[href="/articles/my-best-Article"]')
        .should('not.exist');
    });
})