import addIcon from '/src/assets/add-icon.png'
import { fetchAsideBarContent } from '/src/js/fetch-content.js'
import { initialHomeProject } from './create-projects'
import { addEventAsidebar } from '/src/js/create-todo.js'
import { fetchMainContent } from './fetch-content'

(() => {

	if (!localStorage.getItem('projectList')) {
		initialHomeProject();
	}
	const asideBar = document.querySelector(".aside-bar")
	const asideBarContent = document.createElement("div");
	asideBarContent.classList.add("aside-bar-content")
	asideBar.appendChild(asideBarContent)

	const projectList = fetchAsideBarContent();
	const firstProject = projectList[0];
	document.addEventListener('DOMContentLoaded', () => { fetchMainContent(firstProject) })

})()

export function initAsideBar() {

	const asideBarContent = document.querySelector(".aside-bar-content");
	asideBarContent.innerHTML = " "

	const projectList = fetchAsideBarContent()
	Object.values(projectList).forEach((project) => {


		const individualProject = document.createElement('div');
		individualProject.classList.add("individual-projects")

		const projectTitle = document.createElement("h1");
		projectTitle.classList.add("project-title");
		projectTitle.textContent = project.getProjectName();

		const addTodo = document.createElement("img");
		addTodo.classList.add("add-todo-icon")
		addTodo.src = addIcon

		individualProject.dataset.id = project.getProjectId();

		individualProject.appendChild(projectTitle);
		individualProject.appendChild(addTodo);

		asideBarContent.appendChild(individualProject)

	})
	addEventAsidebar();
}

