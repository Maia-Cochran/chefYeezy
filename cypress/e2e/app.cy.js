describe('App', () => {
  beforeEach(() => {
    cy.intercept(
      'GET', 
      'https://api.kanye.rest',
      `https://api.funtranslations.com/translate/chef.json?text=${kanyeSays}`,
      {
        fixture: `/chef.json?text=${kanyeSays}`,
      }
    ).as(kanyeApiCheck)
    .visit('http://localhost:3000/').wait(5000)
    {
      {
        quote: "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? Cause think of all the people that you will please if you try."
      }
    }
    it("Should show the Kanye quote")
    })
  });