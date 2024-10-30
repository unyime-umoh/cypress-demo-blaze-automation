class loginpage {
    enterusername(){
      cy.get("button[title='Login']").should("be.visible");
      cy.get("#loginFrm_loginname").type("unyime"); 
    }
    enterpassword(){
        cy.get("input[type='password']").type("unyime");
    }
    clickloginbutton(){
        cy.get("button[title='Login']").click();
        cy.wait(2000);
        cy.url().should("include", "account");
    }
}
export default loginpage;