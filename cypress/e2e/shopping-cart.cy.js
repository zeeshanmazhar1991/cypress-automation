/// <reference types="cypress" />

import { HeaderPage } from "../support/page-objects/header-page";
import { shoppingCart } from "../support/page-objects/shoppingcart"

context('shopping Cart', () => {
    const shoppingCartObj = new shoppingCart();
    const header = new HeaderPage();

    beforeEach(() => {
        shoppingCartObj.navigate();
    })

    it('Add, Edit and Delete Product', () => {

        //let username = 'admin';
        shoppingCartObj.AddandEditProduct();
        //header.verifyLogin(username);

    })


})