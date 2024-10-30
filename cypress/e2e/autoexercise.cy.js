///<reference types="cypress"/>

// login

describe('login', () => {
    it('navigate to automation exercise url', () => {
        cy.visit("https://automationexercise.com/");
        cy.wait(20000); 
        cy.get("a[href='/login']").click();
        cy.get("input[data-qa='login-email']").type("ikpamma@gmail.com");
        cy.get('[data-qa="login-password"]').type("ikpamma");
        cy.get("button[data-qa='login-button']").click();
        cy.wait(30000);
        cy.url().should('contain',"exercise");

    })
}) 

//add to cart


// //ADDING ITEMS TO CART
// it("Adding Items to Cart", ()=> {
//     cy.visit('https://automationexercise.com/');
//     cy.wait(10000); 
//     cy.get("a[href='/login']").click();
//     cy.get("input[data-qa='login-email']").type("ikpamma@gmail.com");
//     cy.get('[data-qa="login-password"]').type("ikpamma");
//     cy.get("button[data-qa='login-button']").click();
//     cy.wait(10000);
//     cy.get('body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)').click();
//     cy.wait(10000);
//     cy.get('.btn.btn-success.close-modal.btn-block').click();
    
// })

// //checkout

// it("proceed to checkout", ()=> {
//     cy.visit('https://automationexercise.com/');
//     cy.wait(10000); 
//     cy.get("a[href='/login']").click();
//     cy.get("input[data-qa='login-email']").type("ikpamma@gmail.com");
//     cy.get('[data-qa="login-password"]').type("ikpamma");
//     cy.get("button[data-qa='login-button']").click();
//     cy.wait(10000);
//     cy.get('body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)'). click();
//     cy.get('.btn.btn-default.check_out').click();
//     cy.get('.btn.btn-default.check_out').click();
// })

// //payment

// it("payment", ()=> {
//     cy.visit('https://automationexercise.com/');
//     cy.wait(10000); 
//     cy.get("a[href='/login']").click();
//     cy.get("input[data-qa='login-email']").type("ikpamma@gmail.com");
//     cy.get('[data-qa="login-password"]').type("ikpamma");
//     cy.get("button[data-qa='login-button']").click();
//     cy.wait(10000);
//     cy.get("input[name='name_on_card']").type("ikpa MMa");
//     cy.get("input[name='card_number']").type("12345");
//     cy.get("input[placeholder='ex. 311']").type("311");
//     cy.get("input[placeholder='MM']").type("12");
//     cy.get("input[placeholder='YYYY']").type("2024");
//     cy.get('#submit').click();
//     cy.wait(10000);
//     cy.get('.btn.btn-default.check_out').click();
//     cy.get('.btn.btn-primary').click();
//     cy.wait(10000);
//     cy.get("a[href='/logout']").click();

// })







