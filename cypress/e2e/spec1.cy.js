/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('First Spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    it('Button 1 is displayed', () => {
      cy.get('[data-cy="button1"]').should('be.visible');
    })

  })
  