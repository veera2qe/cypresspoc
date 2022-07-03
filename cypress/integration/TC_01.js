describe('Validate Football Menu', () => {
  it('Check if the user navigate to Football video section', () => {
    Cypress.config('pageLoadTimeout', 9000000);
   cy.visit("https://supersport-com-indaleko.vercel.app/")
   cy.get('nav').contains('Football').should('have.attr', 'href', '/football').click();
   cy.get('div.font-medium.leading-5').each((item)=>{
cy.log(item.text());
})
   cy.get('div').contains('Videos').should('have.class', 'whitespace-nowrap').click();
    cy.get('span').contains('My favourites').should('have.class', 'mb-5').should('have.length',1)
    
  })




})