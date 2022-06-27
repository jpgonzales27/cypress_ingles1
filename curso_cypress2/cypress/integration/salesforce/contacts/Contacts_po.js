class Contacts_po {
    visitHome(){
        let tiempo = 1000
        before(()=>{
            cy.visit('https://jpcorp-dev-ed.my.salesforce.com');
            cy.get('#username').should('be.visible').clear().type('juampi7237@gmail.com')
            cy.get('#password').should('be.visible').clear().type('JP123456jp')
            cy.get('#Login').should('be.visible').click()
            cy.visit('https://jpcorp-dev-ed.my.salesforce.com/003');
            cy.get("input[name='newContact']").should('be.visible').click();
        })
    }

    contactInfo(salutation,firstName,lastName,title,department,birthday,source){
        cy.get('#name_salutationcon2').should('be.visible').select(salutation);
        cy.get('#name_firstcon2').should('be.visible').type(firstName)
        cy.get('#name_lastcon2').should('be.visible').type(lastName)
        // cy.get('#con4').should('be.visible').type('Gonzales')
        cy.get('#con5').should('be.visible').type(title)
        cy.get('#con6').should('be.visible').type(department)
        // cy.get('#con7').should('be.visible').type(birthday,{force})
        // cy.get('#con8').should('be.visible').type('30/7/2021')
        cy.get('#con9').should('be.visible').select(source)
    }

    contactPhone(phone,homephone,mobile,otherphone,fax,email,assitantName,assistantPhone){
        cy.get('#con10').should('be.visible').type(phone)
        cy.get('#con13').should('be.visible').type(homephone)
        cy.get('#con12').should('be.visible').type(mobile)
        cy.get('#con14').should('be.visible').type(otherphone)
        cy.get('#con11').should('be.visible').type(fax)
        cy.get('#con15').should('be.visible').type(email)
        cy.get('#con16').should('be.visible').type(assitantName)
        cy.get('#con10').should('be.visible').type(assistantPhone)
    }

    mailingAddress(street,postalcode,city,state,country){
        cy.get('#con19street').should('be.visible').type(street)
        cy.get('#con19zip').should('be.visible').type(postalcode)
        cy.get('#con19city').should('be.visible').type(city)
        cy.get('#con19state').should('be.visible').type(state)
        cy.get('#con19country').should('be.visible').type(country)
    }

    otherAddress(street,postalcode,city,state,country) {
        cy.get('#con18street').should('be.visible').type(street)
        cy.get('#con18zip').should('be.visible').type(postalcode)
        cy.get('#con18city').should('be.visible').type(city)
        cy.get('#con18state').should('be.visible').type(state)
        cy.get('#con18country').should('be.visible').type(country)
    }

    additionalInformation(language,level,description) {
        cy.get('#00N5e00000KkjUz').should('be.visible').type(language)
        cy.get('#00N5e00000KkjV0').should('be.visible').select(level)
        cy.get('#con20').should('be.visible').type(description)
    }

    clickSaveButton() {
        after(()=>{
            cy.get("td[id='bottomButtonRow'] input[title='Save']").should('be.visible').click();
        })
    }

}//final

export default Contacts_po;