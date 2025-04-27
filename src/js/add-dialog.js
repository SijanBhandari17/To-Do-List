import { createProjectObject } from '/src/js/create-projects.js'

(() => {
    const dialog = document.createElement("dialog");
    dialog.classList.add("add-dialog");
    document.body.appendChild(dialog);
})()

export function addDialog(objectType) {

    const dialog = document.querySelector(".add-dialog");
    dialog.innerHTML = `
<img class="close-dialog-icon" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
<form action="#" class="add-${objectType}-form" id="add-${objectType}-form">
    <h1>${objectType} Info</h1>
    <div class="${objectType}-name">
        <input type="text" id="${objectType}-name" name="${objectType}Name" placeholder=" " required>
        <label for="${objectType}-name">${objectType} Name<span class="required">*</span></label>
    </div>
    <div class="${objectType}-description">
        <input type="text" id="${objectType}-description" name="${objectType}Description" placeholder=" " required>
        <label for="${objectType}-description">${objectType} Description<span class="required">*</span></label>
    </div>
    <div class="${objectType}-due-date">
        <input type="date" id="${objectType}-due-date" name="${objectType}DueDate" placeholder=" " required>
        <label for="${objectType}-due-date">${objectType} Due Date<span class="required">*</span></label>
    </div>
    <div class="${objectType}-priority">
        <label for="${objectType}-priority">Priority</label>
        <select id="${objectType}-priority" name="${objectType}Priority" form="add-${objectType}-form">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    </div>
    <button type="submit" class="add-${objectType}">Add ${objectType}</button>
</form>
`;
    addEventListenerToForm();
    return dialog;
}
function addEventListenerToForm() {

    const form = document.querySelector("form");
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
}

