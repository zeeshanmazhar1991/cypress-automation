/// <reference types="cypress" />

import { LoginPage } from "../support/page-objects/login-page"
import { HeaderPage } from "../support/page-objects/header-page";

context('Login application', () => {
    const loginPage = new LoginPage();
    const header = new HeaderPage();

    beforeEach(() => {
        loginPage.navigate();
    })

    it('Login using username and password', () => {

        //let username = 'admin';
        loginPage.login();
        //header.verifyLogin(username);

    })


})