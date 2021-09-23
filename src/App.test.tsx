import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App', () => {
  before(() => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
  });

  it('renders whole page', () => {
    mount(<App autoPlay={false} />);
    cy.get('.irs-adam-wargal').scrollIntoView();
    cy.matchImageSnapshot('01 Coach');
    cy.get('.irs-treningi').scrollIntoView();
    cy.matchImageSnapshot('02 Timetable');
    // cy.get('.irs-filmy').scrollIntoView();
    // cy.matchImageSnapshot('03 Moviews');
    // cy.get('.irs-partnerzy').scrollIntoView();
    // cy.matchImageSnapshot('04 Cooperation');
  });

  // it('opens speed dial menu', () => {
  // mount(<App autoPlay={false} />);
  // cy.get('.irs-kontakt').click();
  // cy.matchImageSnapshot('speedDialMenu');
  // });

  it('displayes RODO', () => {
    mount(<App autoPlay={false} />);
    cy.get('#irsMenu').click();
    cy.get('#irsRODO').click();
    cy.matchImageSnapshot('01 RODO visible');
    cy.get('.close-rodo').click();
    cy.matchImageSnapshot('02 RODO invisible');
  });
});
