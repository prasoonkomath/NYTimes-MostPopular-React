describe('Detail Page', () => {
    const newsId = '100000009586073'; // Replace this with a dynamic ID as needed
    const newsTitle = 'Who Might Kamala Harris Pick as Her Running Mate?';
  
    beforeEach(() => {
      // Visit the detail page URL before each test
      cy.visit(`http://localhost:3000/${newsId}`);
    });

    it('should display the loading state initially', () => {
        // Check that the loading indicator is visible initially
        cy.get('.p-5.text-center.mt-20').should('be.visible').and('contain.text', 'Loading...');
      });
  
    it('should load the detail page and display the expected elements', () => {
      // Check that the proper layout is visible
      cy.get('header').should('be.visible');
      cy.get('article').should('be.visible');
      cy.get('footer').should('be.visible');
  
      // Check that the article elements are visible 
      cy.get('[data-cytest-id="cy-newsTitle"]').should('be.visible').and('contain.text', `${newsTitle}`);
      cy.get('[data-cytest-id="cy-newsImg"]').should('be.visible');
      cy.get('[data-cytest-id="cy-newsAbstract"]').should('be.visible');
      cy.get('[data-cytest-id="cy-newsMore"]').should('be.visible');
  
      cy.get('[data-cytest-id="cy-popularNews"]').should('be.visible');
    });
  
   
  });
  