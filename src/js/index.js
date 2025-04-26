import '/src/template.html'
import { initAsideBar } from '/src/js/aside-bar.js'
import { initMainContent } from '/src/js/main-content.js'
import { addDialog } from '/src/js/add-dialog.js'

(() => {
	initAsideBar();
	initMainContent();
	addEventListenerToIcon();
})()

function addEventListenerToIcon() {
	const addIcon = document.querySelector(".add-project-icon");
	addIcon.addEventListener('click', () => {
		addDialog().showModal();
	})
}

