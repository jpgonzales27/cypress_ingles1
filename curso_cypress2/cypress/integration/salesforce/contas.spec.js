import {navigateToLoginPage,addUserName,addUserPassword,clickLoginButton} from "./login"
import {navigateToContactPage} from './home'
import {clickNewContactBtn} from './contacts'
import {ContactForm} from './contacsForm'


/// <reference types='Cypress' />

describe('description', () => {

    const contactForm = new ContactForm()

    before(()=>{
        navigateToLoginPage()
        addUserName('juampi7237@gmail.com')
        addUserPassword('JP123456jp')
        clickLoginButton()
    })

    it('Move to contact page', () => {
        navigateToContactPage()
    });

    
    it('Set new contact', () => {
        clickNewContactBtn()
        contactForm.addContactSalutation('Dr.')
        contactForm.addContactFirstName('Juan')
        contactForm.addContactFirstName('Gonzales')
    });

    
    it('click on save button', () => {
        contactForm.clickSaveButton()
    });

})











