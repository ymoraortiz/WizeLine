import {t, Selector} from 'testcafe'
import landingPage from '../pages/landingPage'
import homePage from '../pages/homePage'
import taskPage from '../pages/taskPage';

fixture('Successful Login')
    .page('https://todoist.com/')

test('Login', async t => {
    //await landingPage.LoginFLow('yazmin_ibeth@hotmail.com', 'yimo1234')
    await landingPage.LoginFLow('ymora.ortiz@gmail.com', 'academy1234')
    //await t.expect(homePage.topIcons.exists).ok() //Expects the WebElement exists, ok = true
    
})
