import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App', () => {
  before(() => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
  });

  it('renders whole page', () => {
    cy.viewport('iphone-6');
    mount(<App autoPlay={false} />);
    for (let i = 0; i < 11; i += 1) {
      cy.scrollTo(0, 500 * i);
      cy.matchImageSnapshot(`${i}`);
    }
  });

  // it('opens speed dial menu', () => {
  // mount(<App autoPlay={false} />);
  // cy.get('.irs-kontakt').click();
  // cy.matchImageSnapshot('speedDialMenu');
  // });

  it('displayes RODO', () => {
    cy.viewport('iphone-6');
    mount(<App autoPlay={false} />);
    cy.get('#irsMenu').click();
    cy.get('#irsRODO').click();
    cy.matchImageSnapshot('01 RODO visible');
    cy.get('.close-rodo').click();
    cy.matchImageSnapshot('02 RODO invisible');
  });
});
