import { Selector, t} from 'testcafe'

class TaskPage{
    
    constructor(){
        //this.topIcons = Selector('#top_icons')
        this.addTaskLink = Selector('.action_add_item')// Selector('.agenda_add_task')
        this.taskTexBox = Selector('.richtext_editor')
        this.dueDateBox = Selector('.input_due_date')
        this.nextArrowMonth = Selector('.scheduler-picker-header-action').nth(2)
        this.addTimeLink = Selector('.scheduler-actions-addtime')
        this.timeBox = Selector('.scheduler-timepicker-input-controls').child()
        this.addLink = Selector('.scheduler-timepicker-actions-add') 
        this.saveLink = Selector('.scheduler-actions-save')
        this.day = Selector('.scheduler-picker-cell-day')  //day
        this.saveButton = Selector('.ist_button')
        //this.inbox = Selector('.item_content').nth(0)
        this.lastTask = Selector('.sel_item_content').nth(-1)  //Last Task
        this.timeLink = Selector('.scheduler-actions-time-label')
        this.removeTime = Selector('.scheduler-actions-time-remove')
        this.delTask = Selector('.sel_delete_task').nth(0)
        this.delButton = Selector('.ist_button_red')
        this.premiumIframe = Selector('.GB_window')
        this.closeIFrame = Selector('.close')
        this.checkBoxTask = Selector('.sel_checkbox_td')
        this.taskItem = Selector('.task_item').nth(-1).child()
    }
    
    CreateNewTask = async(TaskName) => {
        await t
            .click(this.addTaskLink)
            .typeText(this.taskTexBox, TaskName)
            .click(this.dueDateBox)
            //Add time
            .click(this.addTimeLink)
            .typeText(this.timeBox, '17:00')
            .click(this.addLink)
            // Add Due Date
            .click(this.nextArrowMonth)
            .click(this.day.nth(23))
            .click(this.saveLink)
            .click(this.saveButton)
    }

    EditTask = async(opc, NameTask) =>{
        switch (opc) {
            case 1: //Name
                this.UpdateName(NameTask)
                break
            case 2: //DateTime
                this.UpdateTime()
                this.UpdateDate()
                break
        }
    }

    UpdateName = async(TaskName) => {
        await t
            .click(this.lastTask)
            .selectText(this.taskTexBox)
            .typeText(this.taskTexBox, TaskName)
            .click(this.saveButton)
    }

    UpdateTime = async () =>{
        await t
            //Update time
            .click(this.lastTask)
            .click(this.dueDateBox)
            .click(this.removeTime)
            .click(this.addTimeLink)
            .typeText(this.timeBox, '09:00')
            .click(this.addLink)
            .click(this.saveLink)
            .click(this.saveButton)
    }

    UpdateDate = async() =>{
        await t
        // Add Due Date
            .click(this.lastTask)
            .click(this.dueDateBox)
            .click(this.day.nth(9))
            .click(this.saveLink)
            .click(this.saveButton)
    }

    DeleteTask = async() =>{
        await t
            //.click(this.inbox)
            .rightClick(this.lastTask)
            .click(this.delTask)
            .click(this.delButton)
    }

    DragTask = async() =>{
        const sliderHandle = this.taskItem
        await t
            .drag(sliderHandle, 0,  -10 )
    }

    getTaskName = async(opc)=>{
        switch (opc){
            case 1: //Generate new task Name
                return 'Task' + Math.floor(Math.random()*200000)
                break
            case 2: //Gets the task name
                return this.lastTask.innerText
                break
        }
    }

    getCountTasks = async() => {
        await t.hover(this.checkBoxTask)
        return this.checkBoxTask.count
    }
}
export default new TaskPage()