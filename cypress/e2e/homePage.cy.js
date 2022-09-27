describe('App, Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.kanye.rest', { fixture: 'kanyeQuote.json' }),
      cy.intercept('GET', `https://api.funtranslations.com/translate/chef.json?text=If%20I%20got%20any%20cooler%20I%20would%20freeze%20to%20death`, { fixture: 'chefSpeakTranslation.json' }),
      cy.visit('https://chef-yeezy-app.vercel.app/')
  });

  it("user should receive an app header at the top of the page", () => {
    cy.get('.App').within(() => {
      cy.get('.header').should('contain', "✨ chefYeezy 👩‍🍳🤌✨")
    })
  });

  it("user should receive an image of chef Yeezy and a random Kanye quote", () => {
    cy.get('.quote-container').within(() => {
      cy.get('.chef-yeezy-pic').should('be.visible')
      cy.get('.quote-box').within(() => {
        cy.get('.kanye-quote').should('contain', "If I got any cooler I would freeze to death")
      })
    })
  });

  it("user should receive a box to view chef translation", () => {
    cy.get('.translation-container').within(() => {
      cy.get('.translation-box').within(() => {
        cy.get('.chef-quote').should('contain', "Click the traslate button to view translation!")
      })
    })
  });

  it("user should receive a generate new quote button, a translate quote button, and a save translation button", () => {
    cy.get('.new-quote-button').should('be.visible')
    cy.get('.translate-button').should('be.visible')
    cy.get('.save-button').should('be.visible')
  });

  it("user should be able to click on the 'translate' button and receive the quote translated in chef speak", () => {
    cy.get('.translate-button').click()
    cy.get('.chef-quote').should('contain', "Iff I gut uny cuoler I vuould freeze-a tu deeth")
  });

  it("user should be able to save/favorite a translation on button click", () => {
    cy.get('.save-button').click()
  })

  it("user should receive a button to view favorite/saved translations", () => {
    cy.get('.link-to-my-favorites').within(() => {
      cy.get('.access-favorites-button').should('be.visible')
    })
  });

});

