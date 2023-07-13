/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Third Spec Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    it('Button 3 is displayed', () => {
      cy.get('[data-cy="button3"]').should('be.visible');
    })

  })
  