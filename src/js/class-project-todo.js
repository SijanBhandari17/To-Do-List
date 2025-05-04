import { format, formatDistanceStrict, isPast, parse } from 'date-fns'


export class Project {
	#projectName;
	#projectDueDate;
	#projectDescription;
	#projectPriority;
	#projectTodoList = [];
	#projectId;

	static #projectList = [];

	constructor(projectName, projectDueDate = "", projectDescription = "", projectPriority = "", skipStore = false) {
		this.#projectPriority = projectPriority;
		this.#projectName = projectName;
		this.#projectDueDate = projectDueDate;
		this.#projectDescription = projectDescription;
		this.#projectId = crypto.randomUUID();

		if (!skipStore) {
			Project.storeProjectList(this);
		}
	}

	static storeProjectList(project) {
		Project.#projectList.push(project);
		Project.setToLocalStorage();
	}

	changeProjectName(newProjectName) {
		this.#projectName = newProjectName;
		Project.setToLocalStorage();
	}

	changeProjectDate(newProjectDate) {
		this.#projectDueDate = newProjectDate;
		Project.setToLocalStorage();
	}
	updateProjectTodoList(todo) {
		this.#projectTodoList = this.#projectTodoList.filter((element) => element != todo);
		Project.setToLocalStorage();
	}

	getProjectName() {
		return this.#projectName;
	}

	getProjectDueDate() {
		return this.#projectDueDate;
	}

	getProjectDescription() {
		return this.#projectDescription;
	}

	getProjectPriority() {
		return this.#projectPriority;
	}

	getProjectId() {
		return this.#projectId;
	}

	getProjectTodoList() {
		return this.#projectTodoList;
	}

	createToDoList(todoObject) {
		const todo = new Todo(todoObject);
		this.#projectTodoList.push(todo);
		Project.setToLocalStorage();
	}

	toJson() {
		return {
			projectName: this.#projectName,
			projectDueDate: this.#projectDueDate,
			projectDescription: this.#projectDescription,
			projectPriority: this.#projectPriority,
			projectId: this.#projectId,
			projectTodoList: this.#projectTodoList.map((todo) => todo.toJson())
		};
	}

	static getProjectList() {
		return Project.#projectList;
	}

	static setToLocalStorage() {
		const serializedProjects = Project.#projectList.map(project => project.toJson());
		localStorage.setItem('projectList', JSON.stringify(serializedProjects));
	}

	static getFromLocalStorage() {
		const storedProjects = localStorage.getItem('projectList');
		if (!storedProjects) return [];

		Project.#projectList = [];

		const parsedProjects = JSON.parse(storedProjects);
		parsedProjects.forEach(projectData => {
			const project = new Project(
				projectData.projectName,
				projectData.projectDueDate,
				projectData.projectDescription,
				projectData.projectPriority,
				true
			);

			project.#projectId = projectData.projectId;

			project.#projectTodoList = [];
			if (projectData.projectTodoList && projectData.projectTodoList.length > 0) {
				projectData.projectTodoList.forEach(todoData => {
					const todo = new Todo({
						TodoName: todoData.todoName,
						TodoDueDate: todoData.todoDueDate,
						TodoDescription: todoData.todoDescription,
						TodoPriority: todoData.todoPriority
					});
					project.#projectTodoList.push(todo);
				});
			}

			Project.#projectList.push(project);
		});

		return Project.#projectList;
	}
}

export class Todo {
	#todoName;
	#todoDueDate;
	#todoDescription;
	#todoPriority;

	constructor(todoObject) {
		this.#todoName = todoObject.TodoName;
		this.#todoDueDate = todoObject.TodoDueDate;
		this.#todoDescription = todoObject.TodoDescription;
		this.#todoPriority = todoObject.TodoPriority;
	}

	getTodoName() {
		return this.#todoName;
	}

	getTodoDueDate() {
		return this.#todoDueDate;
	}

	getTodoDescription() {
		return this.#todoDescription;
	}

	getTodoPriority() {
		return this.#todoPriority;
	}

	changeTodoName(newTodoName) {
		this.#todoName = newTodoName;
	}

	changeTodoDate(newTodoDate) {
		this.#todoDueDate = newTodoDate;
	}

	changeTodoDescription(newDescription) {
		this.#todoDescription = newDescription;
	}

	changeTodoPriority(newPriority) {
		this.#todoPriority = newPriority;
	}

	toJson() {
		return {
			todoName: this.#todoName,
			todoDueDate: this.#todoDueDate,
			todoDescription: this.#todoDescription,
			todoPriority: this.#todoPriority
		};
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

