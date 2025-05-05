import { fetchMainContent } from './fetch-content';
import { Todo, Project } from '/src/js/class-project-todo.js'
import { format, formatDistanceStrict, isPast, parse } from 'date-fns'

export function getTodayDue() {

    const projectList = Project.getFromLocalStorage();
    const todayDue = [];
    const todayDate = format(new Date(), 'yyyy-MM-dd')
    projectList.forEach((project) => {
        project.getProjectTodoList().forEach((todo) => {
            if (todo.getTodoDueDate() == todayDate) {
                todayDue.push({ project: project, todo: todo });
            }
        })
    })
    console.log(todayDue)
    checkDueTime(todayDue)
    setInterval(() => checkDueTime(todayDue), 10000);
}
function checkDueTime(todayDue) {

    const now = new Date()
    const currentTimeString = format(now, 'HH:mm')

    todayDue.forEach((element) => {
        console.log(element)

        const dueTimeString = element.todo.getTodoDueTime();

        const currentDate = parse(currentTimeString, 'HH:mm', now);
        const dueDate = parse(dueTimeString, 'HH:mm', now);

        if (isPast(dueDate)) {
            alert(`${element.todo.getTodoName()} is past its due date`)
            element.project.updateProjectTodoList(element.todo)
            fetchMainContent(element.project)
        }

        const timeDifference = formatDistanceStrict(currentDate, dueDate, { unit: 'minute' });

        console.log(timeDifference.split(" ")[0])

        const time = timeDifference.split(" ")[0]

        if (time == "30") {
            alert(`${element.todo.getTodoName()} is due in 30 minutes`)
        }
        if (time == "15") {
            alert(`${element.todo.getTodoName()} is due in 15 minutes`)
        }
    })
}

