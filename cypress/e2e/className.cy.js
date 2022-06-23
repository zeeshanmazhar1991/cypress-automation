/// <reference types="cypress" />

import {className} from "../support/page-objects/className"

describe("Cypress POM Test Suite", function () {

    before(function () {
        cy.fixture('example').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it("Login with valid credentials", function () {
        const newClassObj = new className();
        newClassObj.navigate();
        newClassObj.enterEmail(this.testdata.username)
        newClassObj.enterPassword(this.testdata.password)
        newClassObj.submit();
        cy.url().should('be.equal', this.testdata.adminUrl)
    });
});