import addIcon from '/src/assets/add-icon.png'
import { fetchAsideBarContent } from '/src/js/fetch-content.js'
import { initialHomeProject } from './create-projects'
import { addEventAsidebar } from '/src/js/create-todo.js'

(() => {
	initialHomeProject();
	const asideBar = document.querySelector(".aside-bar")
	const asideBarContent = document.createElement("div");
	asideBarContent.classList.add("aside-bar-content")
	asideBar.appendChild(asideBarContent)
})()

export function initAsideBar() {
	const asideBarContent = document.querySelector(".aside-bar-content");
	asideBarContent.innerHTML = ""

	const projectList = fetchAsideBarContent()
	console.log(projectList)
	Object.values(projectList).forEach((project) => {

		const individualProject = document.createElement('div');
		individualProject.classList.add("individual-projects")

		const projectTitle = document.createElement("h1");
		projectTitle.classList.add("project-title");
		projectTitle.textContent = project.getProjectName();

		const projectDesc = document.createElement("p");
		projectDesc.classList.add("project-description");
		projectDesc.textContent = project.getProjectDescription();

		const projectDueDate = document.createElement("p");
		projectDueDate.classList.add("project-due-date");
		projectDueDate.textContent = project.getProjectDueDate();

		const projectPriority = document.createElement("p");
		projectPriority.classList.add("project-priority");
		projectPriority.textContent = project.getProjectPriority();

		const addTodo = document.createElement("img");
		addTodo.classList.add("add-todo-icon")
		addTodo.src = addIcon

		individualProject.appendChild(projectTitle);
		individualProject.appendChild(addTodo);
		individualProject.appendChild(projectDesc);
		individualProject.appendChild(projectDueDate);
		individualProject.appendChild(projectPriority);

		asideBarContent.appendChild(individualProject)

	})
	addEventAsidebar();
}

