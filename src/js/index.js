import '/src/css/style.css'
import { initAsideBar } from '/src/js/aside-bar.js'
import { addDialog } from '/src/js/add-dialog.js'
import { createProjectObject } from '/src/js/create-projects.js'
import { addEventToForms } from "./add-event-form";

(() => {
	initAsideBar();
	addEventListenerToIcon();
})()

function addEventListenerToIcon() {
	const addIcon = document.querySelector(".add-project-icon");
	addIcon.addEventListener('click', () => {
		handleDialog();
	})
}
async function handleDialog() {
	const dialogProject = addDialog("Project");
	dialogProject.showModal();
	const projectForm = document.querySelector('.add-Project-form');

	try {
		const projectInfo = await addEventToForms(projectForm);
		console.log(projectInfo)
		createProjectObject(projectInfo)
		dialogProject.close();

	}
	catch (error) {
		console.log(error);
	}
}

