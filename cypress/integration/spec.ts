it('loads examples', () => {
  const baseUrl = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.url().should('eq', `${baseUrl}/`);
  cy.contains('.highlight-card > span', 'angular-cypress-new-project');
  cy.contains('.terminal', 'ng generate component xyz');
  cy.get(':nth-child(8) > :nth-child(2)').click();
  cy.contains('.terminal', 'ng add @angular/material');
});
