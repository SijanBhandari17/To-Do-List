import { Project, Todo } from "/src/js/class-project-todo";

export function fetchAsideBarContent() {
	console.log(Project.getProjectList());
	return Project.getFromLocalStorage();

}

