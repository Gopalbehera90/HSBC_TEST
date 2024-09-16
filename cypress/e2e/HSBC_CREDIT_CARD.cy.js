describe('HSBC Credit card test ', () => {
  it('passes', () => {

    // 1. Open https://www.hsbc.co.in/
    cy.visit('https://www.hsbc.co.in/')

    // // 2. Hover cursor on Banking menu navigation

    // // cy.xpath('/html/body/div[1]/div/header/div[4]/div/div[2]/div/div/nav/ul/li[1]/div[1]/span[2]').click()

    // // 3. Click on Credit Cards link
    // cy.get('h2').contains('Credit Cards').click();

    // // 4. Validate Credit Card as a header text
    // cy.contains('Credit cards').should('be.visible')

    // cy.wait('10000')

    // // 5. Validate first credit Card image attribute is HSBC Visa Cashback Credit Card, HSBC Cashback Credit Card

    // cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/ul/li[1]/a').contains('Cashback Card');

    // cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/ul/li[2]/a').contains('Visa Platinum Card');

    // cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/ul/li[3]/a').contains('Smart Value Card');




  })
})