describe('Image Search Page', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/#/images')
  })

  it('Page contains the needed elements', function() {
    // check if the elements exist
    cy.get('#searchbox').should('be.visible')
    cy.get('.bx--data-table-header').should('be.visible')
    cy.get('#search-1').should('be.visible')
    cy.get(':nth-child(2) > .bx--btn').contains('Search')
    
    //clear button should not be visible initially
    cy.get('.bx--search-close').should('not.be.visible')
  })

  it('Testing the Search Function', function() {
    cy.get('input').type('hello')
    cy.get('#imageloading').should('not.exist')
    cy.contains('button','Search').click()
  })

  it('Testing the loading display when making a longer search', function() {
    cy.get('input').type('Sunflower')
    cy.get('#imageloading').should('not.exist')
    cy.contains('button','Search').click()
    cy.get('#imageloading').should('be.visible')
  })

})


describe('Testing the functionality of the Image Table', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/#/images')
    cy.get('input').type('Sunflower')
    cy.contains('button','Search').click()
  })

  it('Does the rows display correctly', function() {
    cy.get(':nth-child(1) > .bx--table-expand > .bx--table-expand__button > .bx--table-expand__svg').click()
    cy.contains('Title')
    cy.contains('Artist')
    cy.contains('Date')
    cy.contains('Medium')
    cy.contains('Dimension')
    cy.contains('Classification')
    cy.contains('Credit Line')
    cy.contains('Accession Number')
    cy.get(':nth-child(2) > td > .bx--child-row-inner-container > .bx--grid > .bx--row > .bx--col-lg-6 > .image-table-img').should('be.visible')
  })

  it('Testing the pagination of the images', function() {
    cy.get('#bx-pagination-select-1').should('have.value','10')
    cy.get('#bx-pagination-select-1-right').should('have.value','1')

    //check that the buttons are working
    cy.get('#bx-pagination-select-1').select('25')
    cy.get('.bx--pagination__button--backward').should('be.disabled')
    cy.get('.bx--pagination__button--forward').should('not.be.disabled').click()
    cy.get('.bx--pagination__button--forward').should('be.disabled')
    cy.get('#bx-pagination-select-1-right').select('1')
  })

})