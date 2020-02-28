
describe('The Add Employee Page', () => {
  it('Visits the app employees url', () => {
    cy.visit('/employees');
    cy.wait(1000);
    cy.get('#email')
      .type('myEmail@email.com');
    cy.wait(1000);
    cy.get('#fullName')
      .type('Naresh Battul');
    cy.wait(1000);
    cy.get('#skill')
      .select('Frontend');
    cy.wait(1000);
    cy.get('[type="checkbox"]').check({ force: true });
    cy.contains('Submit')
      .click();
    cy.wait(1000);
    cy.get('#email')
      .should('contain', '');
    cy.wait(1000);
  });
});
