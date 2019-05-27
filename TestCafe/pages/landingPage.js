import { Selector, t } from 'testcafe'

class LandingPage{
    constructor() {
        //WebElement Variables.
        this.loginLink = Selector('.sel_login')       //Variable by class
        this.loginIframe = Selector('.GB_frame')     //Variable by ID 
        this.loginIframeNeted = Selector('#GB_frame')
        this.loginEmailInput = Selector('#email')    //yazmin_ibeth@hotmail.com
        this.loginPasswordInput = Selector('#password')//
        this.loginButton = Selector('.submit_btn')
    } 

    //Login Function
    LoginFLow = async (user, pass) => {
        //t: test controller
        await t
            .click(this.loginLink)
            .switchToIframe(this.loginIframe)      //swithcToIframe, change to iFrame
            .switchToIframe(this.loginIframeNeted)
            .typeText(this.loginEmailInput, user)
            .typeText(this.loginPasswordInput,pass)
            .click(this.loginButton)
            .switchToMainWindow()
    }
}

export default new LandingPage()  //Export the class(object), when is imported this js can be used.