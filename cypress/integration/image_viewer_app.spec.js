describe('Image Viewer App', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Metropolitan Museum of Art Image Viewer')
    cy.contains('This is an Image Viewer that can be used to browse the vast' + 
    ' collection of art owned by the Metropolitan Musuem.')
    cy.contains('About')
    cy.contains('Museum Info')
  })

  it('Info tab navigation can be opened and button works', function() {
    cy.contains('Museum Info').click()
    cy.contains('The Metropolitan Museum of Art of New York City, colloquially "the Met"')
    cy.get('.learnmore-nav[action*="https://www.metmuseum.org/"]')
  })

  it('Navigation between tabs works', function() {
    cy.contains('Museum Info').click()
    cy.get('.learnmore-nav[action*="https://www.metmuseum.org/"]')
    cy.contains('About').click()
    cy.contains('Metropolitan Museum of Art Image Viewer')
    // can we navigate to the ImagePage
    cy.get('.bx--header__action').click()
      .get('.bx--side-nav__header-navigation > li > .bx--header__menu-item').click()
    cy.url().should('include','/images')
  })

  it('Navigation for bigger screen sizes', function() {
    cy.viewport(1280,1024)
    cy.get('.bx--header__menu-bar > li > .bx--header__menu-item').click()
    cy.url().should('include','/images')
    cy.get('.bx--header__name').click()
    cy.url().should('eq','http://localhost:3000/#/')
  })
})