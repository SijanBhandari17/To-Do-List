import { fetchAsideBarContent } from '/src/js/fetch-content.js'
import { initialHomeProject } from './create-objects'

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

	projectList.forEach((project) => {

		const projectTitle = document.createElement("h1");
		projectTitle.classList.add("project-title");
		projectTitle.textContent = project.projectName;

		const projectDesc = document.createElement("p");
		projectDesc.classList.add("project-description");
		projectDesc.textContent = project.projectDescription;

		const projectDueDate = document.createElement("p");
		projectDueDate.classList.add("project-due-date");
		projectDueDate.textContent = project.projectDueDate;

		const projectPriority = document.createElement("p");
		projectPriority.classList.add("project-priority");
		projectPriority.textContent = project.projectPriority;

		asideBarContent.appendChild(projectTitle);
		asideBarContent.appendChild(projectDesc);
		asideBarContent.appendChild(projectDueDate);
		asideBarContent.appendChild(projectPriority);

	})
	console.log(asideBarContent)
}
