class account{
    clickAccount() {
       cy.get("li[class='dropdown open'] a[class='top menu_account'] span[class='menu_text']").click();
    }
    clickCheckyourorder() {
        cy.get("body > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)"). click();
    }
}
export default account;