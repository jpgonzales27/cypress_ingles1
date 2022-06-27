    import Contacts_po from '../contacts/Contacts_po'

/// <reference types='Cypress' />

describe('description', () => {

    const contact = new Contacts_po()

    contact.visitHome()

    cy.on('uncaught:exception',(error,runnable)=>{
        return false;
    })

    it('test seccion info', () => {
        contact.contactInfo('Dr.','Juan','Gonzales','title','tarija','30/7/2021','Web')
        contact.contactPhone('1111','1111','1111','2222','3333','j@gmail.com','assitant','5555')
    });

    it('test seccion address', () => {
        contact.mailingAddress('crevaux','000','tarija','tarija','bolivia')
        contact.otherAddress('crevaux','000','tarija','tarija','bolivia')
    });

    
    it('test seccion additional info', () => {
        contact.additionalInformation('English','Primary','description')
    });

    contact.clickSaveButton()
})