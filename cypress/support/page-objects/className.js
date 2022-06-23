/// <reference types="cypress" />

export class className {

    className_username = '[id=Email]'
    className_password = '[id=Password]'
    className_submitButton = '[type=submit]'

    navigate() {
        cy.visit('https://admin-demo.nopcommerce.com/')
    }

    enterEmail(username) {
        cy.get(this.className_username).clear()
        cy.get(this.className_username).type(username);
    }

    enterPassword(pswd) {
        cy.get(this.className_password).clear().type(pswd)
    }

    submit() {
        cy.get(this.className_submitButton).click()
    }
}