/// <reference types="cypress" />

context('IMDb Drop down search category test', () => {
    describe('IMDb Search Drop-down selection', () => {
        it('Visit Site IMDb.com', () => {
            cy.visit('https://www.imdb.com/')                 
        })
    
        it('Search "Star Wars" in category "All"', () => {       
            cy.get('#nav-search-form').click()   
            cy.get('#navbar-search-category-select-contents').contains('All').click({force: true})
            cy.get('.react-autosuggest__container').click()  
            cy.server()
            cy.route('https://fls-na.amazon.com/1/batch/1/OE/', {
            suggestions: [
                {
                value: 'Star Wars',
                data: 1,
                exactMatch: 1
                }
            ]
            })         
            cy.get('#suggestion-search').clear().type('Star Wars', { delay: 100 }) 
            cy.get('#suggestion-search-button').click()
            cy.get('.findList').first().should('include.text', 'Star Wars')
            cy.get('#home_img_holder').click()       
        })
        it('Search "Star Wars" in category "Titles"', () => {
            cy.get('#nav-search-form').click()
            cy.get('#navbar-search-category-select-contents').contains('Titles').click({force: true})
            cy.get('.react-autosuggest__container').click()  
            cy.server()
            cy.route('https://fls-na.amazon.com/1/batch/1/OE/', {
            suggestions: [
                {
                value: 'Star Wars',
                data: 1,
                exactMatch: 1
                }
            ]
            })         
            cy.get('#suggestion-search').clear().type('Star Wars', { delay: 100 }) 
            cy.get('#suggestion-search-button').click()
            cy.get('.findList').first().should('include.text', 'Star Wars')  
            cy.get('#home_img_holder').click()          
        })
        it('Search "Star Wars" in category "TV Episodes"', () => {
            cy.get('#nav-search-form').click() 
            cy.get('#navbar-search-category-select-contents').contains('TV Episodes').click({force: true})
            cy.get('.react-autosuggest__container').click()  
            cy.server()
            cy.route('https://fls-na.amazon.com/1/batch/1/OE/', {
            suggestions: [
                {
                value: 'Star Wars',
                data: 1,
                exactMatch: 1
                }
            ]
            })         
            cy.get('#suggestion-search').clear().type('Star Wars', { delay: 100 }) 
            cy.get('#suggestion-search-button').click()
            cy.get('.findList').first().should('include.text', 'Star Wars')  
            cy.get('#home_img_holder').click()         
        })
        it('Search "Star Wars" in category "Celebs"', () => {   
            cy.get('#nav-search-form').click()       
            cy.get('#navbar-search-category-select-contents').contains('Celebs').click({force: true})  
            cy.get('.react-autosuggest__container').click()  
            cy.server()
            cy.route('https://fls-na.amazon.com/1/batch/1/OE/', {
            suggestions: [
                {
                value: 'Star Wars',
                data: 1,
                exactMatch: 1
                }
            ]
            })         
            cy.get('#suggestion-search').clear().type('Star Wars', { delay: 100 }) 
            cy.get('#suggestion-search-button').click()
            cy.get('.findList').should('include.text', 'Star Wars') 
            cy.get('#home_img_holder').click()         
        })
        it('Search "Star Wars" in category "Companies"', () => {
            cy.get('#nav-search-form').click() 
            cy.get('#navbar-search-category-select-contents').contains('Companies').click({force: true}) 
            cy.get('.react-autosuggest__container').click()  
            cy.server()
            cy.route('https://fls-na.amazon.com/1/batch/1/OE/', {
            suggestions: [
                {
                value: 'Star Wars',
                data: 1,
                exactMatch: 1
                }
            ]
            })         
            cy.get('#suggestion-search').clear().type('Star Wars', { delay: 100 }) 
            cy.get('#suggestion-search-button').click()
            cy.get('.findList').should('include.text', 'Star Wars')  
            cy.get('#home_img_holder').click()      
        })
        it('Search "Star Wars" in category "Keywords"', () => {       
            cy.get('#nav-search-form').click() 
            cy.get('#navbar-search-category-select-contents').contains('Keywords').click({force: true})   
            cy.get('.react-autosuggest__container').click()  
            cy.server()
            cy.route('https://fls-na.amazon.com/1/batch/1/OE/', {
            suggestions: [
                {
                value: 'star wars',
                data: 1,
                exactMatch: 1
                }
            ]
            })         
            cy.get('#suggestion-search').clear().type('Star Wars', { delay: 100 }) 
            cy.get('#suggestion-search-button').click()
            cy.get('.findList').should('include.text', 'star-wars')         
        })    
   })
})