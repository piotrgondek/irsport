import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App', () => {
  it('renders whole page', () => {
    mount(<App autoPlay={false} />);
    cy.get('.trener-adam-wargal').scrollIntoView();
    cy.matchImageSnapshot('coach');
    cy.get('.treningi').scrollIntoView();
    cy.matchImageSnapshot('trainings');
  });

  it('opens speed dial menu', () => {
    mount(<App autoPlay={false} />);
    cy.get('.irs-kontakt').click();
    cy.matchImageSnapshot('speedDialMenu');
  });

  it('displayes RODO', () => {
    mount(<App autoPlay={false} />);
    cy.get('.open-rodo').click();
    cy.matchImageSnapshot('rodoVisible');
    cy.get('.close-rodo').click();
    cy.matchImageSnapshot('rodoInvisible');
  });
});
