describe('HSBC ATM test scenario ', () => {
  it('passes', () => {

    // 1. Open https://www.hsbc.co.in/
    cy.visit('https://www.hsbc.co.in/')

    // 2. Click on Find your nearest branch or ATM link in footer section
    cy.contains('Find your nearest HSBC branch or ATM ').click({force:true})

    // 3. Validate in new page the URL has String = ‘/ways-to-bank/branches/’
    cy.url().should('include', '/ways-to-bank/branches/')

    // 4. Validate Header as Branches & ATM
    cy.contains('h1', 'Branches & ATM').should('be.visible')

    // 5. Click on before Branch & ATM Locator button
    cy.get('#content_main_button_1').click({force:true})

    // 6. Type country name as India
    cy.get('#searchInput').type('India', { force: true });

    // 7. In drop-down option click option India
    // cy.contains('India').click({ force: true })

    // 8. Validate ATM Header name is showing as Rajbhavan Road
    // cy.contains('Rajbhavan Road').should('be.visible')

    // 9. Click on add Show more results button
    // cy.xpath('//button[text()="Show more results"]').click({force:true})

    // 10. Check Instagram in social media option in footer section
    // cy.get('div[class="right-column"]').find("img").should('be.visible')

    // 11. Check Facebook in social media option in footer section
    // cy.get('#hp_socialmediafooterlink_2').should('be.visible')

    // 12. Check Twitter in social media option in footer section
    // cy.get('#hp_socialmediafooterlink_3').should('be.visible')

    // 13. Check Youtube in social media option in footer section
    // cy.get('#hp_socialmediafooterlink_4').should('be.visible')

    // 14. Click on HSBC Logo
    cy.get('div[class="header-logo lg-2"]').click({force:true})

    // 15. Scroll down to the bottom
    cy.scrollTo('bottom');

    // 16. Check and Click on Privacy link
    cy.contains('Privacy Statement ').click({force:true})

    // 17.Validate Privacy Statement as Header
    // cy.contains('#content_intro_hero_no_image_1 > h1').should('be.visible')







  })
})