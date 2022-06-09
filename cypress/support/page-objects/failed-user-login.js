/// <reference types="cypress" />

export class faileduserLogin{

    navigate() {
        cy.visit('index.php?controller=authentication&back=my-account');
    }

    failedLogin() {
        cy.get('#email').click().clear().type('zeeshan.feb89@gmail.com.pk');
        cy.get('#passwd').click().clear().type('Casuality02!');
        cy.get('#SubmitLogin').click();
        cy.wait(500);
        cy.get('#center_column > div.alert.alert-danger > ol > li').should('have.text', 'Authentication failed.');

    }

}

