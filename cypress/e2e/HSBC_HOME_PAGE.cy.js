describe('HSBC Home page testing', () => {
  it('passes', () => {
    // 1.Open https://www.hsbc.co.in/
    cy.visit('https://www.hsbc.co.in/')

    //2. Validate HSBC Bank Logo
    cy.get('div[class="header-logo lg-2"]').find("img").should('be.visible')

    //3. Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and Deposit
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')

    //4. Click on Login button and Validate Log On header in Login page
    cy.contains('Log On').click({force:true})

    //5. Check Continue button is available and Also validate initially Continue button is disabled.
    cy.get('.crh-chevron-link__text').click()
    
    //6. Type any random email in the username field
    cy.get('#username').type('randomemail@example.com')

    //7. Now check Continue button is Enabled
    cy.contains('Continue').should('be.visible').and('be.enabled')

    //8. Validate Remember me check box is not checked by default
    cy.get('#rememberMe').should('not.be.checked')

    //9. Validate there is a question mark tooltip present on the page
    cy.get('#username_help_link> span >span.icon.icon-circle-help-solid.help-icon').should('be.visible').click({force:true})

    //10. Click on the tooltip
    cy.get('#username_help_link> span >span.icon.icon-circle-help-solid.help-icon').should('be.visible').click({force:true})

    //11. Now validate the username header in the new pop-up screen
    cy.contains('Username').should('be.visible');

  })
})