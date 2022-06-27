class ProyectoUno_PO {
    visitHome(){
        let tiempo = 1000
        before(()=>{
            cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html'),
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations'),
            cy.wait(tiempo)
        })
    }

    seccionUno(name,lastName,email,t){
        let tiempo = t;
        cy.xpath("//input[@name='first_name']").clear().should('be.visible').type(name)
        cy.wait(tiempo)
        cy.xpath("//input[@name='last_name']").clear().should('be.visible').type(lastName)
        cy.wait(tiempo)
        cy.xpath("//input[@name='email']").clear().should('be.visible').type(email)
        cy.wait(tiempo)
    }

    seccionDos(telefono,direccion,ciudad,estado,t){
        let tiempo = t;
        cy.xpath("//input[@name='phone']").clear().should('be.visible').type(telefono)
        cy.wait(tiempo)
        cy.xpath("//input[@name='address']").clear().should('be.visible').type(direccion)
        cy.wait(tiempo)
        cy.xpath("//input[@name='city']").clear().should('be.visible').type(ciudad)
        cy.wait(tiempo)
        cy.xpath("//select[@name='state']").select(estado, {force:true})
        cy.wait(tiempo)
    }

    seccionTres(cp,web,proeyecto,t) {
        let tiempo = t;
        cy.xpath("//input[@name='zip']").clear().should('be.visible').type(cp)
        cy.wait(tiempo)
        cy.xpath("//input[@name='website']").clear().should('be.visible').type(web)
        cy.wait(tiempo)
        cy.xpath("//input[@value='yes']").check().should('be.checked')
        cy.wait(tiempo)
        cy.xpath("//textarea[contains(@class,'form-control')]").should('be.visible').type(proeyecto)
        cy.wait(tiempo)
        cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force:true})
        cy.wait(tiempo)
    }

}//final

export default ProyectoUno_PO;