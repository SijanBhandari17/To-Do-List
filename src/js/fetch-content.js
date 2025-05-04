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

	const projectInfo = document.createElement("div");
	projectInfo.className = "project-info"

	const infoDatePriority = document.createElement("div");
	infoDatePriority.className = "project-info-date-priority"

	const projectDueDate = document.createElement("p");
	projectDueDate.classList.add("project-due-date");
	projectDueDate.textContent = project.getProjectDueDate();

	const projectPriority = document.createElement("p");

	if (project.getProjectTodoList()) {
		fetchTodoContent(project);

	}
	projectInfo.appendChild(projectDesc);
	infoDatePriority.appendChild(projectDueDate);

	if (project.getProjectPriority()) {
		projectPriority.classList.add("project-priority");
		projectPriority.classList.add(project.getProjectPriority())
		projectPriority.textContent = project.getProjectPriority();
		infoDatePriority.appendChild(projectPriority);

	}

	projectInfo.appendChild(infoDatePriority)

	mainContent.appendChild(projectInfo)

}

function fetchTodoContent(project) {


	const mainContent = document.querySelector('.main-content');
	const existingTodoSection = mainContent.querySelector('.project-todo');
	if (existingTodoSection) {
		existingTodoSection.remove();
	}
	const projectTodo = document.createElement('div');
	projectTodo.classList.add('project-todo');

	const todoList = project.getProjectTodoList();
	const sortedTodoList = sortTodoList(todoList);


	sortedTodoList.forEach((todo) => {

		const checkboxContainer = document.createElement('div');
		checkboxContainer.classList.add('checkbox-container')

		const checkbox = document.createElement('div');
		checkbox.classList.add('checkbox');

		checkboxContainer.appendChild(checkbox);

		checkbox.addEventListener('click', (event) => addChecked(event, project))

		const individualTodoContainer = document.createElement('div');
		individualTodoContainer.className = 'individual-todo-container'

		const todoDatePriority = document.createElement('div');
		todoDatePriority.className = 'todo-date-priority'

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
		todoPriority.classList.add(todo.getTodoPriority());
		todoPriority.innerText = todo.getTodoPriority();

		todoName.addEventListener('click', (event) => showTodoContent(event));

		todoDatePriority.appendChild(todoDueDate)
		todoDatePriority.appendChild(todoPriority)

		individualTodoContainer.appendChild(checkboxContainer)
		individualTodoContainer.appendChild(todoName);
		individualTodoContainer.appendChild(todoDescription);
		individualTodoContainer.appendChild(todoDatePriority);

		projectTodo.appendChild(individualTodoContainer)
		mainContent.appendChild(projectTodo);
	})
	projectTodo.style.order = 8

}

function sortTodoList(todoList) {
	const map = new Map();
	const order = ["high", "medium", "low"];
	order.forEach((x, i) => map.set(x, i));
	return todoList.sort((x, y) => {
		return map.get(x.getTodoPriority()) - map.get(y.getTodoPriority())
	});
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

	const todoContainer = event.target.closest('.individual-todo-container');
	const todoDetails = todoContainer.querySelectorAll('.todo-due-date, .todo-description, .todo-priority');

	todoDetails.forEach(element => {
		element.classList.toggle('show');
	});

}
function addChecked(event, project) {
	const checkBox = event.target;
	const checkBoxContainer = checkBox.parentNode;
	const todoName = checkBoxContainer.parentNode.querySelector('.todo-name');
	project.updateProjectTodoList(findTodo(todoName.textContent, project))
	todoName.style.textDecoration = "line-through"
	checkBox.classList.toggle('checked')
	setTimeout(() => { fetchTodoContent(project) }, 3000);

}

function findTodo(todoName, project) {
	const todoList = project.getProjectTodoList();
	console.log(todoList);
	console.log(todoName)

	const todo = todoList.find((element) => {
		console.log(element.getTodoName())
		return element.getTodoName() == todoName;
	});
	console.log(todo);
	return todo;
}
