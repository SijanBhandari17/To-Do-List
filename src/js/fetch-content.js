import { Project, Todo } from "/src/js/class-project-todo";

export function fetchAsideBarContent() {
	return Project.getFromLocalStorage();

}

