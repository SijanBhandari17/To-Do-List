import { Project, Todo } from '/src/js/class-project-todo.js'

import { initAsideBar } from '/src/js/aside-bar.js'

export function createObject(data) {
    new Project(data.projectName, data.projectDuedate, data.projectDescription, data.projectPriority);
    console.log(Project.getProjectList())
    initAsideBar();
    return 0;
}
export function initialHomeProject() {
    new Project("Home", "", "This is the intial project you will have. Add your daily To-Do's which is not linked to any project here");
}
