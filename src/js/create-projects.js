import { Project, Todo } from '/src/js/class-project-todo.js'

import { initAsideBar } from '/src/js/aside-bar.js'

export function createProjectObject(data) {
    new Project(data.ProjectName, data.ProjectDueDate, data.ProjectDescription, data.ProjectPriority);
    initAsideBar();
    return 0;
}
export function initialHomeProject() {
    new Project("Home", "", "This is the initial project you will have. Add your daily To-Do's which is not linked to any project here");

    // Optional: You could also verify it worked by logging
    console.log("Home project initialized:", Project.getProjectList());
}
