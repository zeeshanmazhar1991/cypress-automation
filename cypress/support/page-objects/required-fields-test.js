/// <reference types="cypress" />

export class RequiredFieldsTest {

    navigate() {
        cy.visit('index.php?controller=authentication&back=my-account');
    }

    RequiredFieldsCase() {

        cy.get('#email_create').click().clear().type('cypresstest005@mailinator.com');
        cy.get('#SubmitCreate').click();
        cy.wait(7000);
        cy.get('#submitAccount').click();
        cy.get('#center_column > div > p').should('have.text', 'There are 8 errors');
    }
}