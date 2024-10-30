///<reference types="cypress"/>

// login

describe('end to end test for demoblaze app', () => {
    it('navigate to demoblaze url', () => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.wait(4000);  
        cy.get('#login2').click();
        cy.get('#loginusername').type("egowork");
        cy.get('#loginpassword').type("egowork123");
        cy.get("button[onclick='logIn()']").click();
        cy.get('#nava').should("be.visible");
         })
})

// inventory

describe('end to end test for demoblaze app', () => {
    it('navigate to demoblaze url', () => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.wait(4000);  
        cy.get('#login2').click();
        cy.get('#loginusername').type("egowork");
        cy.get('#loginpassword').type("egowork123");
        cy.get("button[onclick='logIn()']").click();
        cy.get("div[id='logInModal'] div[class='modal-footer'] button:nth-child(1)"). click();
        cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)').click();
        cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)').click();
        cy.get('.btn.btn-success.btn-lg').click();
         })
})

//checkout

describe('end to end test for demoblaze app', () => {
    it('navigate to demoblaze url', () => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.wait(4000);  
        cy.get('#login2').click();
        cy.get('#loginusername').type("egowork");
        cy.get('#loginpassword').type("egowork123");
        cy.get("button[onclick='logIn()']").click();
        cy.get("div[id='logInModal'] div[class='modal-footer'] button:nth-child(1)").click();
        cy.get('#cartur').click();
        cy.get('.btn.btn-success').click();
        cy.get('#name').type("unyime umoh");
        cy.get('#country').type("nigeria");
        cy.get('#city').type("uyo");
        cy.get('#card').type("12345");
        cy.get('#month').type(12);
        cy.get('#year').type("2024");
        cy.get("button[onclick='purchaseOrder()']").click();
        cy.get('.confirm.btn.btn-lg.btn-primary').click();
        cy.get("div[id='orderModal'] div[class='modal-footer'] button:nth-child(1)").click();
           })
})    