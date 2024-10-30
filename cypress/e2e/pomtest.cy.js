/// <reference types='cypress' />

import account from "../pages/account";
import loginpage from "../pages/loginpage";



describe('automation test store page object model test',()=>{
    const Loginpage = new loginpage();
    const clickAccount = new account();

    it('validate successful POM login',()=>{
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        Loginpage.enterusername();
        Loginpage.enterpassword();
        Loginpage.clickloginbutton();
    });
    
    it('validate successful checking of order',()=>{
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        Loginpage.enterusername();
        Loginpage.enterpassword();
        Loginpage.clickloginbutton();
        account.clickAccount();
        account.clickCheckyourorder();
    })
})