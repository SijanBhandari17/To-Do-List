import { Project, Todo } from "/src/js/class-project-todo";
import { addDialog } from '/src/js/add-dialog.js'
import { addEventToForms } from "./add-event-form";
import { addTodoToProject } from "./add-todo-project"
import { initAsideBar } from '/src/js/aside-bar.js'


export function addEventAsidebar() {

    const asideBarContent = document.querySelector('.aside-bar-content');
    asideBarContent.removeEventListener('click', handleAsidebarClick);
    asideBarContent.addEventListener('click', handleAsidebarClick);

}
function handleAsidebarClick(event) {
    const targetedElement = event.target;

    if (targetedElement.tagName == 'IMG' && targetedElement.classList.contains('add-todo-icon')) {
        const projectElement = targetedElement.parentElement.querySelector('.project-title');
        const projectName = projectElement.textContent;
        findTheElement(projectName);
    }
}

async function findTheElement(projectName) {
    const projectList = Project.getProjectList();
    const project = projectList.find((element) => {
        return element.getProjectName() == projectName;
    });
    console.log(project)
    const todoDialog = addDialog("Todo")
    todoDialog.showModal();
    const todoForm = document.querySelector('.add-Todo-form');

    try {
        const todoInfo = await addEventToForms(todoForm);
        addTodoToProject(project, todoInfo);
        todoDialog.close();
        initAsideBar();
    }
    catch (error) {
        console.log(error)
    }
}
