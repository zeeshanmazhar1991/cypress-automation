    /// <reference types="cypress" />

export class LoginPage {

    navigate() {
        cy.visit('index.php?controller=authentication&back=my-account');
    }

    login() {
        cy.get('#email').click().clear().type('zeeshan.feb89@gmail.com');
        cy.get('#passwd').click().clear().type('Casuality01!');
        cy.get('#SubmitLogin').click();

    }

}