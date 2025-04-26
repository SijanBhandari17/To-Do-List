import { format, formatDistanceStrict, isPast, parse } from 'date-fns'

export class Project {
	#projectName;
	#projectDueDate;
	#projectDescription;
	#projectPriority;
	#projectToDoList = [];

	static #projectList = [];

	constructor(projectName, projectDueDate = "", projectDescription = "", projectPriority = "") {
		console.log(projectName)
		this.#projectName = projectName;
		this.#projectDueDate = projectDueDate;
		this.#projectDescription = projectDescription;
		this.#projectPriority = projectPriority;

		Project.#projectList.push({ projectName, projectDueDate, projectDescription, projectPriority });
	}
	changeProjectName(newProjectName) {
		this.#projectName = newProjectName
	}
	changeProjectDate(newProjectDate) {
		this.#projectDueDate = newProjectDate
	}
	getProjectName() {
		return this.#projectName
	}
	getProjectDueDate() {
		return this.#projectDueDate
	}
	getProjectDescription() {
		return this.#projectDescription;
	}

	getProjectPriority() {
		return this.#projectPriority;
	}
	getProjectTodoList() {
		return this.#projectToDoList;
	}
	createToDoList(todoObject) {
		Todo(todoObject)
		this.#projectToDoList.push(todoObject)
	}
	static getProjectList() {
		return Project.#projectList;
	}
}

export class Todo {

	#todoName;
	#todoDueDate;

	constructor(todoObject) {
		this.#todoName = todoObject[todoName];
		this.#todoDueDate = todoObject[todoDueDate]
	}
	getTodoName() {
		return this.#todoName;
	}
	getTodoDueDate() {
		return this.#todoDueDate;
	}
	changeTodoName(newTodoName) {
		this.#todoName = newTodoName
	}
	changeTodoDate(newTodoDate) {
		this.#todoDueDate = newTodoDate
	}
}

// function checkDueDate() {
// 	dueDate = this.getTodoDueDate() || this.getProjectDueDate()
// 	currentDate = new Date();
// 	console.log(format(currentDate, 'yyyy-MM-dd'));
// 	const resultDate = formatDistanceStrict(dueDate, currentDate)
// 	console.log(resultDate)
// }
//
// Object.assign(Todo.prototype, checkDueDate());
// Object.assign(Project.prototype, checkDueDate());
//

