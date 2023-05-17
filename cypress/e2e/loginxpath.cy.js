import 'cypress-xpath';


describe('Login With Xpath', () => { 

    it('Should Login With Xpath', () => {

        const MAX_RETRIES = 3;

        cy.viewport(1366, 768)
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get("#btn-make-appointmen", MAX_RETRIES)
            .click()
            
    
        cy.get('#txt-username').type("Test@gmail.com")
        cy.get('#txt-password').type("Test")

        
    });


 })