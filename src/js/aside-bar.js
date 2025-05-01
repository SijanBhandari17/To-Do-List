import addIcon from '/src/assets/add-icon.png'
import { fetchAsideBarContent } from '/src/js/fetch-content.js'
import { initialHomeProject } from './create-projects'
import { addEventAsidebar } from '/src/js/create-todo.js'

(() => {

	if (!localStorage.getItem('projectList')) {
		initialHomeProject();
	}
	const asideBar = document.querySelector(".aside-bar")
	const asideBarContent = document.createElement("div");
	asideBarContent.classList.add("aside-bar-content")
	asideBar.appendChild(asideBarContent)
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

		const projectTodo = document.createElement('div');
		projectTodo.classList.add('project-todo');
		// if (project.getProjectTodoList()) {
		// 	const todoList = project.getProjectTodoList();
		//
		// 	todoList.forEach((todo) => {
		// 		const todoName = document.createElement('h2');
		// 		todoName.textContent = todo.getTodoName();
		//
		// 		const todoDescription = document.createElement('p');
		// 		todoDescription.innerText = todo.getTodoDescription()
		//
		// 		const todoDueDate = document.createElement('p');
		// 		todoDueDate.innerText = todo.getTodoDueDate();
		//
		// 		const todoPriority = document.createElement('p');
		// 		todoPriority.innerText = todo.getTodoPriority();
		//
		// 		projectTodo.appendChild(todoName);
		// 		projectTodo.appendChild(todoDueDate);
		// 		projectTodo.appendChild(todoDescription);
		// 		projectTodo.appendChild(todoPriority);
		//
		// 	})
		// }

		individualProject.appendChild(projectTitle);
		individualProject.appendChild(addTodo);

		asideBarContent.appendChild(individualProject)

	})
	addEventAsidebar();
}

