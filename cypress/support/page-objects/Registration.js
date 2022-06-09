/// <reference types="cypress" />

export class Registration {

    navigate() {
        cy.visit('index.php?controller=authentication&back=my-account');
    }

    RegisterUser() {
        cy.get('#email_create').click().clear().type('cypresstest004@mailinator.com');
        cy.get('#SubmitCreate').click();
        cy.get('#customer_firstname').click().clear().type('Zeeshan');
        cy.get('#customer_lastname').click().clear().type('Mazhar');
        cy.get('#passwd').click().clear().type('Casual01!');
        cy.get('#firstname').click().clear().type('Zeeshan');
        cy.get('#lastname').click().clear().type('Mazhar');
        cy.get('#address1').click().clear().type('Test Address');
        cy.get('#city').click().clear().type('Lahore');
        cy.get('#id_state').select('Alabama').should('have.value', '1');
        cy.get('#postcode').click().clear().type('54000');
        cy.get('#id_country').select('United States').should('have.value', '21');
        cy.get('#phone_mobile').click().clear().type('00923054504683');
        cy.get('#alias').click().clear().type('Test Alias Address');
        cy.get('#submitAccount').click();
        cy.get('.logout').click();
    }
}