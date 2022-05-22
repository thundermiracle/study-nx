describe('site title', () => {
  it('should render title correctly', () => {
    cy.visit('/articles/hello-world');
    cy.get('h1').contains('Hello World');
  });

  it('should render youtube', () => {
    cy.visit('/articles/youtube-test');
    cy.get('iframe').should('be.visible');
  });
});
