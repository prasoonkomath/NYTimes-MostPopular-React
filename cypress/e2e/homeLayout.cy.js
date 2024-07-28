describe('Layout Test', () => {
  beforeEach(() => {
    // Visit the home page
    cy.visit('http://localhost:3000');
  });

  it('should load the header', () => {
    // Check if the header is visible
    cy.get('header').should('be.visible');
  });

  it('should load the main content', () => {
    // Check if the main content is visible
    cy.get('main').should('be.visible');
  });

  it('should load the footer', () => {
    // Check if the footer is visible
    cy.get('footer').should('be.visible');
  });

  it('should load the logo and nav in the header', () => {
    // Check if the logo in the header is visible
    cy.get('header').within(() => {
      cy.get('[data-cytest-id="cy-logo"]').should('exist');
      cy.get('[data-cytest-id="cy-nav"]').should('be.visible');
    });
  });

  it('should load popular news element in the main content', () => {
    // Check if specific elements in the main content are visible
    cy.get('main').within(() => {
      cy.contains('Most Popular').should('be.visible');
      cy.get('[data-cytest-id="cy-popularNews"]').should('be.visible');
    });
  });

  
});
