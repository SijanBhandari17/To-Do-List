import { Project, Todo } from "/src/js/class-project-todo";
import '/src/css/todo.css'

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


	if (project.getProjectTodoList()) {
		const projectTodo = document.createElement('div');
		projectTodo.classList.add('project-todo');
		const todoList = project.getProjectTodoList();
		console.log(todoList)

		todoList.forEach((todo) => {
			const todoName = document.createElement('h2');
			todoName.className = 'todo-name';
			todoName.textContent = todo.getTodoName();

			const todoDescription = document.createElement('p');
			todoDescription.className = 'todo-description';
			todoDescription.innerText = todo.getTodoDescription();

			const todoDueDate = document.createElement('p');
			todoDueDate.className = 'todo-due-date';
			todoDueDate.innerText = todo.getTodoDueDate();

			const todoPriority = document.createElement('p');
			todoPriority.className = 'todo-priority';
			todoPriority.innerText = todo.getTodoPriority();

			todoName.addEventListener('click', (event) => showTodoContent(event));

			projectTodo.appendChild(todoName);
			projectTodo.appendChild(todoDueDate);
			projectTodo.appendChild(todoDescription);
			projectTodo.appendChild(todoPriority);

			mainContent.appendChild(projectTodo);
		})

		projectTodo.style.order = 8
	}

	mainContent.appendChild(projectDesc);
	mainContent.appendChild(projectDueDate);
	mainContent.appendChild(projectPriority);

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

function showTodoContent(event) {

	const targetedEvent = event.target;
	const siblingsNodes = targetedEvent.parentNode.childNodes;
	const siblingsArray = Array.from(siblingsNodes)

	siblingsArray.filter((element) => element != targetedEvent).forEach((element) => {
		element.classList.add('show');
	})

}
