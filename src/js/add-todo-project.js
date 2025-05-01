import { initAsideBar } from '/src/js/aside-bar.js'

export function addTodoToProject(project, todoInfo) {
    project.createToDoList(todoInfo)
    return project.getProjectTodoList()
}
