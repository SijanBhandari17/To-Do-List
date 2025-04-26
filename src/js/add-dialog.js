import { createProjectObject } from '/src/js/create-projects.js'

let dialog = null;

export function addDialog() {

    if (dialog) {
        return dialog;
    }

    dialog = document.createElement("dialog");
    dialog.classList.add("add-dialog");
    dialog.innerHTML = `
<img class="close-dialog-icon" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
<form action="#" class="add-project-form" id="add-project-form">
    <h1>Book Info</h1>
    <div class="project-name">
        <input type="text" id="project-name" name="projectName" placeholder=" " required>
        <label for="project-name">Project Name<span class="required">*</span></label>
    </div>
    <div class="project-description">
        <input type="text" id="project-description" name="projectDescription" placeholder=" " required>
        <label for="project-description">Project Description<span class="required">*</span></label>
    </div>
    <div class="project-due-date">
        <input type="date" id="project-due-date" name="projectDueDate" placeholder=" " required>
        <label for="project-due-date">Project-Due-Date<span class="required">*</span></label>
    </div>
    <div class="project-priority">
        <label for="project-priority">Priority</label>
        <select id="project-priority" name="projectPriority" form="add-project-form">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    </div>
    <button type="submit" class="add-project">Add Project</button>
</form>
`;
    document.body.appendChild(dialog);
    addEventListenerToForm();
    return dialog;
}
function addEventListenerToForm() {

    const form = document.querySelector(".add-project-form");
    const dialog = document.querySelector(".add-dialog");
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        saveDialog(form, dialog);
    });

}

function saveDialog(form, dialog) {
    dialog.close();
    const formData = new FormData(form);
    const dataEntries = Object.fromEntries(formData);
    createProjectObject(dataEntries)
    form.reset();
    console.log(dataEntries);
}

