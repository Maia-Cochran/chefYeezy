describe('Favorites Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/myFavoriteQuotes')
  });

  it("user should receive an app header at the top of the page", () => {
    cy.get('.App').within(() => {
      cy.get('.header').should('contain', "✨ chefYeezy 👩‍🍳🤌✨")
    })
  });

  it("user should receive a view of their favorite quotes, a top navigation bar, and a home button", () => {
    cy.get('.fav-quotes').within(() => {
      cy.get('.top-nav-bar').within(() => {
        cy.get('.link-to-home > p').should('contain', 'Home')
      })
    })
  });

  it("user should be able to view a saved translations", () => {
    cy.get('.fav-quotes').within(() => {
      cy.get('.saved-translation-container')
    })
  });

  it("user should be able to return to the home page view on button click", () => {
    cy.get('button.home-button').should('be.visible')
  });

});


