/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Second Spec Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Button 2 is displayed', () => {
    cy.get('[data-cy="button2"]').should('be.visible');
    cy.get('[data-cy="button2"]').click();
  })

})
