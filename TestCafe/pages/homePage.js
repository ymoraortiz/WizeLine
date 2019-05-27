import { Selector, t } from 'testcafe'

class HomePage{
    constructor(){
        this.inboxItem = Selector('.item_content').nth(0)
        
    }

    Inbox = async() =>{
        await t.click(this.inboxItem)
    }

}

export default new HomePage()