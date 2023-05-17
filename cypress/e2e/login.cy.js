import 'faker'



describe('Login Story', () => { 
    
        it('Login With Success & Failure' , () => {

            var email = faker.internet.email();
            console.log(email)
            cy.viewport(1366, 768)
            cy.visit('https://katalon-demo-cura.herokuapp.com/')

            //Fixture call from data fixture
            cy.fixture('identity').then((data) => {

                    data.forEach((userdata) => {

                        if(userdata.LoginCase == 'PASS'){
                                cy.get('#btn-make-appointment').click()

                                //Call From Data Fixture
                                cy.get('#txt-username').type(email)
                                cy.get('#txt-password').type(userdata.password)
                                cy.get('#btn-login').click() 
                                cy.wait(3000)  
                                cy.get('.fa.fa-bars').click() 
                                cy.contains('Logout').click() 
                                
                        }
                        else if(userdata.LoginCase == 'Fail')
                        {
                            cy.get('#btn-make-appointment').click()
                            cy.get('#txt-username').type(userdata.username)
                            cy.get('#txt-password').type(userdata.password)
                            cy.get('#btn-login').click() 
                            cy.wait(3000)  

                        }         
                            })
                        })
        });


    
 })