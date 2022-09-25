describe('App, New Kanye Quote', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.kanye.rest', {fixture: 'newKanyeQuote.json'}),
    cy.intercept('GET', `https://api.funtranslations.com/translate/chef.json?text=I%20am%20running%20for%20President%20of%20the%20United%20States`, {fixture: 'chefSpeakTranslation2.json'}),
    cy.visit('http://localhost:3000/')
  });
 
  it("user should be able to click on 'get new quote' button to receive a new Kanye quote", () => {
    cy.get('button').contains('Click for new quote!').click()
    cy.get('.quote-box').within(() => {
      cy.get('.kanye-quote').should('contain', "I am running for President of the United States")
    })
  });

  it("user should receive a new message in the chef translation container", () => {
    cy.get('button').contains('Click for new quote!').click()
    cy.get('.translation-container').within(() => {
      cy.get('.translation-box').within(() => {
        cy.get('.chef-quote').within(() => {
          cy.get('p').should('contain', "")
        })
      })
    })
  });

  it("user should be able to click on the 'translate' button and receive the NEW quote translated in chef speak", () => {
    cy.get('.translate-button').click()
    cy.get('.chef-quote > p').should('contain', "I im ruonning fur President ouff zee-a United Stetes")
  });

});