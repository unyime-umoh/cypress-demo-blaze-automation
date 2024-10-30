/// <reference types='cypress' />
   import Login4blaze from "../pages/login4blaze";
   import Inventory4blaze from "../pages/inventory4blaze";
   import Checkout4blaze from "../pages/checkout4blaze";

describe('demo blaze page object model test',() => {
   
   const inventory4blaze = new Inventory4blaze();
   const checkout4blaze = new Checkout4blaze();
   const login4blaze = new Login4blaze();

   let userinfo;

   before(()=> {
      cy.fixture("userinfo.json").then((data) => {
       userinfo = data.userData;
      });
   });

   beforeEach(() =>{
       cy.visit("https://www.demoblaze.com/index.html");
            cy.wait(4000);  
            login4blaze.clickLgnBtn();
            login4blaze.enterUsername(userinfo.username);
            login4blaze.enterPassword(userinfo.password);
            login4blaze.clickLoginButton();
             })

             after(() =>{
               inventory4blaze.clickItem();      
             })
   
             it('inventory', () => {
             inventory4blaze.clickItem();
             inventory4blaze.clickAddtocart();
             }) 

            it('checkout', () => {
            checkout4blaze.clickCart();
            checkout4blaze.clickPlaceorder();
            checkout4blaze.entername(userinfo.name);
            checkout4blaze.entercountry(userinfo.country);
            checkout4blaze.entercity(userinfo.city);
            checkout4blaze.entercard(userinfo.card);
            checkout4blaze.entermonth(userinfo.month);
            checkout4blaze.enteryear(userinfo.year);
            checkout4blaze.clickPurchase();
             })


})    