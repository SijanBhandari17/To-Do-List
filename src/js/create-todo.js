import { Project, Todo } from "/src/js/class-project-todo";

export function addEventAsidebar() {

    const asideBarContent = document.querySelector('.aside-bar-content');
    asideBarContent.removeEventListener('click', handleAsidebarClick);
    asideBarContent.addEventListener('click', handleAsidebarClick);

}
function handleAsidebarClick(event) {
    const targetedElement = event.target;
    console.log(targetedElement)

    if (targetedElement.tagName == 'IMG' && targetedElement.classList.contains('add-todo-icon')) {
        const projectElement = targetedElement.parentElement.querySelector('.project-title');
        const projectName = projectElement.textContent;
        console.log(projectName)
        findTheElement(projectName);
    }
}


function findTheElement(projectName) {
    const projectList = Project.getProjectList();
    const project = projectList.find((element) => {
        return element.getProjectName() == projectName;
    });
    console.log(project)
}
