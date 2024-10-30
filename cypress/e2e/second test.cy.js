///<reference types="cypress"/>

describe('this is my second test', () => {
    it('navigate to automation test store url', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.wait(2000);  
        cy.get('#loginFrm_loginname').type("unyime");
        cy.get('#loginFrm_password').type("unyime");
        cy.get("button[title='Login']").click();
        cy.get("img[title='Automation Test Store']").should("be.visible");
       //cy.get("#login-button").should("have.css","background-color","rgb(61,220,145)");
        //cy.get("#password-button").should("contain", "secret_sauce");
       // cy.get("#login-button").should("have.value", "standard user");
         })
})
