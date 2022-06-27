Given('Abrir el navegador',()=>{
    cy.visit('https://demoqa.com/text-box');
})

When('Cargando el nombre {word}',(name)=>{
    cy.get('#userName').should('be.visible').type(name)
})

When('Cargando el email {word}',(email)=>{
    cy.get('#userEmail').should('be.visible').type(email)
})

And ('Cargando la direccion {word} {word}',(calle,numero)=>{
    let dir = calle+" "+numero
    cy.get('#currentAddress').should('be.visible').type(dir)
})
And ('Click en el boton',()=>{
    cy.get('#submit').should('be.visible').click()
})

Then ('Validar el nombre de la pagina',()=>{
    cy.title().should('eq','ToolsQA')
})