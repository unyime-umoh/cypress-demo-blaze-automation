class Checkout4blaze{
    clickCart(){
        cy.get('#cartur').click();
    }
    clickPlaceorder(){
        cy.get('.btn.btn-success').click();
    }
    entername(name){
        cy.get('#name').type(name);
    }
    entercountry(country){
        cy.get('#country').type(country);
    }
    entercity(city){
        cy.get('#city').type(city);
    }
    entercard(card){
        cy.get('#card').type(card);
    }
    entermonth(month){
        cy.get('#month').type(month);
    }
    enteryear(year){
        cy.get('#year').type(year);
    }
    clickPurchase(){
        cy.get("button[onclick='purchaseOrder()']").click();
        cy.wait(4000)
        cy.get('.confirm.btn.btn-lg.btn-primary').click();
    }
}
export default Checkout4blaze;