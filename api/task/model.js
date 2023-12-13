// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = async function () {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            "task_id",
            "task_description",
            "task_notes",
            "task_completed",
            "project_name", 
            "project_description"
        )
        tasks.map(task => {
            task.task_completed = Boolean(task.task_completed)
        })

    return tasks
}
const postTask = async function (task) {
    await db('tasks')
        .insert(task)

    const tasks = await getTasks()
    let result
    for (const t of tasks) {
        if (t.task_description === task.task_description) {
            result = t
            delete result.task_id
        }
    }
    return result
}

module.exports = {
    getTasks, 
    postTask }
