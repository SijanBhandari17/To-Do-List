export function addEventToForms(form) {
    return new Promise((resolve) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formInfo = saveFormInfo(form);
            form.reset();
            resolve(formInfo);
        })

    })
}
function saveFormInfo(form) {
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData);
    return formEntries
}

