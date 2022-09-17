/// <reference types="cypress" />
describe('App', () => {
  [
    [375, 667],
    [1440, 900],
  ].forEach(([width, height]) => {
    const viewport = `${width}x${height}`;

    it.skip(`${viewport}`, () => {
      cy.viewport(width, height);

      cy.intercept(
        {
          method: 'GET',
          url: '/static/media/intro.*.mp4',
        },
        {
          statusCode: 404,
        }
      ).as('intro');

      cy.intercept({
        method: 'GET',
        url: '*',
      }).as('gets');

      cy.visit('/');

      cy.wait(['@intro', '@gets']);

      cy.document().its('fonts.status').should('equal', 'loaded');

      cy.matchImageSnapshot(`[${viewport}] Info`);

      cy.get('#irsMenu').click();
      cy.matchImageSnapshot(`[${viewport}] Opened menu`);

      cy.get('#irsRODO').click();
      cy.matchImageSnapshot(`[${viewport}] RODO visible`);

      cy.get('.close-rodo').click();
      cy.matchImageSnapshot(`[${viewport}] RODO invisible`);

      cy.matchImageSnapshot(`[${viewport}] Whole page`, {
        capture: 'fullPage',
      });
    });
  });
});
