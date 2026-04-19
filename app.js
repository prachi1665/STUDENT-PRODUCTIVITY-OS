let user = localStorage.getItem("user");

if (!user) {
    window.location.href = "index.html";
} else {
    document.getElementById("user").innerText = user;
}

/* LOGOUT */
function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

/* NOTES SAVE */
function saveNote() {
    let note = document.getElementById("noteInput").value;
    localStorage.setItem("note", note);
    alert("Note Saved ✔");
}

/* LOAD NOTE */
window.addEventListener("load", () => {
    document.getElementById("noteInput").value =
        localStorage.getItem("note") || "";
});

/* TASK SYSTEM */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.addEventListener("load", renderTasks);

function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task === "") return;

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskInput").value = "";

    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        let btn = document.createElement("button");
        btn.innerText = "❌";
        btn.onclick = () => deleteTask(index);

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}
