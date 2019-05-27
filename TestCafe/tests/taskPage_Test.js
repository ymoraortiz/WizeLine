import {t, Selector} from 'testcafe'
import landingPage from '../pages/landingPage'
import homePage from '../pages/homePage'
import taskPage from '../pages/taskPage';

fixture('Successful Task')
    .page('https://todoist.com/')

test('Create NewTask', async t=> {
    await landingPage.LoginFLow('ymora.ortiz@gmail.com', 'academy1234')
    await homePage.Inbox()
    const afterCreateTask = await taskPage.getCountTasks()
    await taskPage.CreateNewTask(await taskPage.getTaskName(1))
    await t.expect(await taskPage.getCountTasks() - afterCreateTask).eql(1)
    await t.wait(3000)
})

test ('Edit Task - NAME', async t => {
    await landingPage.LoginFLow('ymora.ortiz@gmail.com', 'academy1234')
    await homePage.Inbox()
    const afterUpdateName = await taskPage.getTaskName(2)
    const newName = await taskPage.getTaskName(1)
    await taskPage.EditTask(1, newName)
    await t.expect(afterUpdateName).notEql(newName)
    await t.wait(3000)
})

test ('Edit Task - DATE', async t => {
    await landingPage.LoginFLow('ymora.ortiz@gmail.com', 'academy1234')
    await homePage.Inbox()
    await taskPage.EditTask(2,'')
    await t.wait(3000)
})

test ('Delete Task', async t => {
    await landingPage.LoginFLow('ymora.ortiz@gmail.com', 'academy1234')
    await homePage.Inbox()
    const beforeDeleteTask = await taskPage.getCountTasks()
    await taskPage.DeleteTask()
    await t.expect(beforeDeleteTask - (await taskPage.getCountTasks())).eql(1)
    await t.wait(3000)
})

test('Drag Task', async t=> {
    await landingPage.LoginFLow('ymora.ortiz@gmail.com', 'academy1234')
    await homePage.Inbox()
    await taskPage.DragTask()
    await t.wait(3000)
})
