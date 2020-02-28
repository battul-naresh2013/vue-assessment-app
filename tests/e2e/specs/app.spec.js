// https://docs.cypress.io/api/introduction/api.html

describe('Employee-Management-Tool', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Dashboard screen');
  });

  it('Visits the app about url', () => {
    cy.wait(1500);
    cy.visit('/about');
    cy.contains('h1', 'This is an about page');
  });

  it('Visits the app employees url', () => {
    cy.wait(1500);
    cy.visit('/employees');
    cy.contains('a', 'Add Employee');
  });

  it('loads 4 nav-link items', () => {
    cy.get('.nav-link').should('have.length', 4);
  });

  it('loads 2 router-link-active items', () => {
    cy.get('.router-link-active').should('have.length', 2);
  });
});
