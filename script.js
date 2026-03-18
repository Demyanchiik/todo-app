let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");
    let text = input.value;

    if (text === "") return;

    tasks.push(text);

    saveTasks();

    input.value = "";

    showTasks();
}

function showTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.innerHTML =
            tasks[i] +
            " <button onclick='deleteTask(" + i + ")'>Delete</button>" +
            " <button onclick='doneTask(" + i + ")'>Done</button>";

        list.appendChild(li);
    }
}

function deleteTask(i) {

    tasks.splice(i, 1);

    saveTasks();

    showTasks();
}

function doneTask(i) {

    tasks[i] = "✔ " + tasks[i];

    saveTasks();

    showTasks();
}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let data = localStorage.getItem("tasks");

    if (data) {
        tasks = JSON.parse(data);
    }

    showTasks();
}

loadTasks();
