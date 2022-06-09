/// <reference types="cypress" />

import { HeaderPage } from "../support/page-objects/header-page";
import {faileduserLogin} from "../support/page-objects/failed-user-login"

context('Failed Login Attempt', () => {
    const faileduserLoginObj = new faileduserLogin();
    const header = new HeaderPage();

    beforeEach(() => {
        faileduserLoginObj.navigate();
    })

    it('Failed Login', () => {

        //let username = 'admin';
        faileduserLoginObj.failedLogin();
        //header.verifyLogin(username);

    })


})