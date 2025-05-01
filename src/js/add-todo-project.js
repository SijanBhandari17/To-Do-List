import { initAsideBar } from '/src/js/aside-bar.js'

export function addTodoToProject(project, todoInfo) {
    console.log(project)
    project.createToDoList(todoInfo)
    return project.getProjectTodoList()
}
