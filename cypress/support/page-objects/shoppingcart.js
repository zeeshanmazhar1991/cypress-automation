/// <reference types="cypress" />

export class shoppingCart {

    navigate() {
        cy.visit('index.php?controller=authentication&back=my-account');
    }

    AddandEditProduct() {

        cy.get('#email').click().clear().type('zeeshan.feb89@gmail.com');
        cy.get('#passwd').click().clear().type('Casuality01!');
        cy.get('#SubmitLogin').click();

        cy.wait(5000);
        cy.visit('http://automationpractice.com/index.php?id_category=5&controller=category');
        cy.wait(8000);
        cy.get('#center_column > ul > li').click();
        cy.wait(5000);
        cy.get('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').click();
        cy.wait(5000);
        cy.get('.button-container > .button-medium > span').click();
        cy.wait(5000);
        cy.get('#product_1_1_0_704150 > td.cart_delete.text-center > div').click();
        cy.wait(5000);
        cy.get('.logout').click();


    }


}