import { Project, Todo } from "/src/js/class-project-todo";

export function addEventAsidebar() {
    const asideBarContent = document.querySelector('.aside-bar-content')
    asideBarContent.addEventListener('click', (event) => {
        const targetedElement = event.target;
        if (targetedElement.tagName == 'IMG') {
            const projectElement = targetedElement.parentElement.querySelector('.project-title')
            const projectName = projectElement.textContent;
            findTheElement(projectName);
        }
    })
}
function findTheElement(projectName) {

    const projectList = Project.getProjectList();
    console.log(projectList)

    const project = projectList.find((element) => {
        return element.getProjectName() == projectName;
    })
    console.log(project)

}
