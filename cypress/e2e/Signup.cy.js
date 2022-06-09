/// <reference types="cypress" />

import { HeaderPage } from "../support/page-objects/header-page";
import { Registration } from "../support/page-objects/Registration"

context('User Registration', () => {
    const RegistrationObj = new Registration();
    const header = new HeaderPage();

    beforeEach(() => {
        RegistrationObj.navigate();
    })

    it('Create Users', () => {

        //let username = 'admin';
        RegistrationObj.RegisterUser();
        //header.verifyLogin(username);

    })


})