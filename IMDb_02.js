/// <reference types="cypress" />

context('IMDb video clips preview test', () => {
    describe('Visit IMDb.com and select Latest trailer preview', () => {
        it('Visit Site IMDb.com', () => {
            cy.visit('https://www.imdb.com/')                 
        })

        it('Open IMDb Originals and play clips for 5 seconds', () => {       
            // cy.get('.AutorotateVideoCarouselstyles__BrowseTrailersLink-uu2ba1-4').click({force: true})   
             cy.get('.ipc-sub-grid-item--span-4').find('a').eq(0).click({force: true})
             cy.wait(5000)
             cy.get('#home_img_holder').click() 
        }) 

        it('Open trailer Page and playback clips for 5 seconds', () => {       
            cy.get('.AutorotateVideoCarouselstyles__BrowseTrailersLink-uu2ba1-4').click({force: true})   
            cy.get('.gridlist').find('a').eq(0).click()
            cy.wait(5000)
            cy.get('#home_img_holder').click() 
        })

         
   })
})