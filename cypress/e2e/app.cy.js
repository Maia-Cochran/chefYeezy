describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.kanye.rest', {fixture: 'kanyeQuote.json'}),
    cy.visit('http://localhost:3000/')
    cy.intercept( 'GET', `https://api.funtranslations.com/translate/chef.json?text=If%20I%20got%20any%20cooler%20I%20would%20freeze%20to%20death`, {fixture: 'chefSpeakTranslation.json'})
  })
    it("user should see an image of chef Kanye", () => {
      cy.get('img')
      .should('be.visible')
    })

    it("user should see a quote from the API on home screen", () => {
      cy.get('.quote-box')
      .contains('If I got any cooler I would freeze to death')
    })

    it("user should be able to see the Kanye quote translated to chef speak on button click", () => {
      cy.get('.translate-button').click()
      cy.get('.chef-quote > p').within(cy.get('p')     )
      // .contains("Iff I gut uny cuoler I vuould freeze-a tu deeth")
    })
  });