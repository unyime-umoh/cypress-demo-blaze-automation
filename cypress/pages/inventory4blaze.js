class Inventory4blaze{
    clickItem (){
        cy.wait(6000)
       cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)').click();
    }
    clickAddtocart (){
        cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)').click();
    }
}
export default Inventory4blaze;