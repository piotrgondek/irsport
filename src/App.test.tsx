/* eslint-disable cypress/no-unnecessary-waiting */
import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App', () => {
  [
    'iphone-6',
    // 'macbook-15',
  ].forEach((viewport) => {
    it(`${viewport}`, () => {
      cy.intercept({
        method: 'GET',
        url: '*',
      }).as('gets');

      mount(<App autoPlay={false} />);

      cy.wait('@gets');

      cy.viewport(viewport as any);

      cy.matchImageSnapshot(
        `[${viewport}] Whole page`,
        {
          capture: 'fullPage',
        },
      );

      cy.get('#irsMenu').click();
      cy.matchImageSnapshot(`[${viewport}] Open menu`);

      cy.get('#irsRODO').click();
      cy.wait(1000);
      cy.matchImageSnapshot(`[${viewport}] 01 RODO visible`);

      cy.get('.close-rodo').click();
      cy.matchImageSnapshot(`[${viewport}] 02 RODO invisible`);
    });
  });
});
