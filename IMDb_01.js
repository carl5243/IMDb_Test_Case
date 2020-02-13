/// <reference types="cypress" />

context('IMDb_Signin_PageTest', () => {
    describe('Visit IMDb.com Sign Page for test IMDb login page & create account page', () => {
    beforeEach(() => {
      cy.visit('https://www.imdb.com/')
      cy.get('.imdb-header__signin-text').click()
    }) 

    it('Verify IMDb Sign In page can be displayed \n And unable Sign in with un-registered ID & Password ', () => {             
        cy.get('.auth-provider-text').eq(0).should('have.text', 'Sign in with IMDb').click() 
        cy.get('.a-spacing-small').should('include.text', 'Sign-In')   
        //it('Membership Sign in un-registered ID & Password', () => {                   
        cy.get('input[name="email"]').type('testeremail.com', { delay: 100 })  
        cy.get('input[name="password"]').type('password', { delay: 100 })
        cy.get('#a-autoid-0').click()   
        cy.get('.a-alert-container').should('be.visible')      
            
        })  

    it('Verify IMDb Creat account page can be displayed \n And unable to submit without correct information provides', () => {             
        cy.get('.create-account').should('have.text', 'Create a New Account').click()                          
        cy.get('input[name="customerName"]').type('tester', { delay: 100 }) 
        cy.get('input[name="email"]').type('tester.com', { delay: 100 })
        cy.get('input[name="password"]').type('password', { delay: 100 })
        cy.get('input[name="passwordCheck"]').type('Password', { delay: 100 })
        cy.get('#continue').click()   
        cy.get('.a-alert-container').should('be.visible')    
        //cy.go('back')
            //})       
        })  
     
    })
})