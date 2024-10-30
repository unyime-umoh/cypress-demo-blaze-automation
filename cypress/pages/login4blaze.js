class Login4blaze {

    clickLgnBtn (){
      cy.get('#login2').click();
    }
    enterUsername (username){
      cy.get('#loginusername').type(username);
    }
    enterPassword(password){
      cy.get('#loginpassword').type(password);
    }
    clickLoginButton(){
        cy.get("button[onclick='logIn()']").click();
        cy.get("div[id='logInModal'] div[class='modal-footer'] button:nth-child(1)"). click();
        cy.get('#nava').should("be.visible"); 
    }
}
export default Login4blaze;