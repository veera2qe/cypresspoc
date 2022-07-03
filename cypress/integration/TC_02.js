describe('Validate search functionality', () => {
  it('Check if the user is able to search content', () => {
    Cypress.config('pageLoadTimeout', 9000000);
   cy.visit("https://supersport-com-indaleko.vercel.app/")
   cy.get('i.icon-Search.text-white').click();
   cy.get('input[placeholder="Search SuperSport"]').type("cricket");
   cy.get('button[type="submit"]').click();
  //  cy.xpath("//div[text()='NEWS']/parent::div/following-sibling::div[1]//div[contains(@class,'line-clamp-3')]")
  //  .should('have.length',4)
    
  })




})