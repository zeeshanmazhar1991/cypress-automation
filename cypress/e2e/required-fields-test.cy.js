/// <reference types="cypress" />

import { HeaderPage } from "../support/page-objects/header-page";
import { RequiredFieldsTest } from "../support/page-objects/required-fields-test"

context('Mandatory Fields for Registration', () => {
    const RequiredFieldsTestObj = new RequiredFieldsTest();
    const header = new HeaderPage();

    beforeEach(() => {
        RequiredFieldsTestObj.navigate();
    })

    it('Mandatory Fields for Registration', () => {

        //let username = 'admin';
        RequiredFieldsTestObj.RequiredFieldsCase();
        //header.verifyLogin(username);

    })


})