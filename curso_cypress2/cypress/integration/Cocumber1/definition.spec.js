Given('Abrir el navegador principal',()=>{
    cy.visit('https://demoqa.com/text-box');
})

When('Cargando el nombre',()=>{
    cy.get('#userName').should('be.visible').type('Juan')
})

When('Cargando el email',()=>{
    cy.get('#userEmail').should('be.visible').type('Juan')
})

And ('Cargando la direccion',()=>{
    cy.get('#currentAddress').should('be.visible').type('Direccion')
})

Then ('Validar el nombre de la pagina',()=>{
    cy.title().should('eq','ToolsQA')
})