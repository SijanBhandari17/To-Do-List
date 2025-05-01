import { Project, Todo } from "/src/js/class-project-todo";

export function fetchAsideBarContent() {
	return Project.getFromLocalStorage();

}
export function fetchMainContent(project) {

	addMarkProject(project.getProjectId());

	const mainContent = document.querySelector('.main-content');
	mainContent.innerText = " "
	const projectDesc = document.createElement("p");
	projectDesc.classList.add("project-description");
	projectDesc.textContent = project.getProjectDescription();

	const projectDueDate = document.createElement("p");
	projectDueDate.classList.add("project-due-date");
	projectDueDate.textContent = project.getProjectDueDate();

	const projectPriority = document.createElement("p");
	projectPriority.classList.add("project-priority");
	projectPriority.textContent = project.getProjectPriority();


	const projectTodo = document.createElement('div');
	projectTodo.classList.add('project-todo');
	if (project.getProjectTodoList()) {
		const todoList = project.getProjectTodoList();

		todoList.forEach((todo) => {
			const todoName = document.createElement('h2');
			todoName.textContent = todo.getTodoName();

			const todoDescription = document.createElement('p');
			todoDescription.innerText = todo.getTodoDescription()

			const todoDueDate = document.createElement('p');
			todoDueDate.innerText = todo.getTodoDueDate();

			const todoPriority = document.createElement('p');
			todoPriority.innerText = todo.getTodoPriority();

			projectTodo.appendChild(todoName);
			projectTodo.appendChild(todoDueDate);
			projectTodo.appendChild(todoDescription);
			projectTodo.appendChild(todoPriority);

		})
	}

	mainContent.appendChild(projectDesc);
	mainContent.appendChild(projectDueDate);
	mainContent.appendChild(projectPriority);
	mainContent.appendChild(projectTodo);

}

function addMarkProject(id) {

	const selectedElement = document.querySelector('.selected');
	if (selectedElement) {
		selectedElement.classList.remove('selected')
	}

	const stringId = String(id);
	const element = document.querySelector(`[data-id="${stringId}"]`);
	element.classList.add('selected')
}

