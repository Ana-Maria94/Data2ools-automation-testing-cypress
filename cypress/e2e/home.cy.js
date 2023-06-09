/// <reference types="cypress" />

describe('home page suite tests', () => {
  it('home page test', () => {
    cy.get('.btn-get-started').click();
    cy.contains('About Us').should('be.visible');
    cy.scrollTo('bottom');
    cy.contains('Services').should('be.visible');
    cy.get('[data-wow-delay="0.1s"] > .box > .title > a').click();
    cy.contains('Why choose us?').should('be.visible');
    cy.get('.why-us-img > .img-fluid').should('be.visible');
    cy.contains('Process').should('be.visible');
    cy.get(':nth-child(1) > .collapsed > .ion-android-remove').click();
    cy.get(':nth-child(4) > .collapsed > .ion-android-remove').click();
    cy.get(':nth-child(4) > a > .ion-android-remove');
    cy.get('.footer-info > h3').should('be.visible');
    cy.get('.main-nav > ul > :nth-child(6) > a').click();
    cy.contains('Email: contact@data2ools.com').should('be.visible');
    cy.get('.back-to-top > .fa').click();
    cy.get('.intro-img > .img-fluid').should('be.visible');
  })
})