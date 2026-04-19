
// ---------- NOTES ----------
function saveNote() {
    let note = document.getElementById("noteInput").value;
    localStorage.setItem("note", note);
    document.getElementById("savedNote").innerText = "Saved ✔";
}

window.onload = function () {
    document.getElementById("savedNote").innerText =
        localStorage.getItem("note") || "";
};

// ---------- TODO ----------
function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}

// ---------- TIMER ----------
let time = 1500;
let timerRunning;

function startTimer() {
    timerRunning = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerRunning);
            alert("Time's up!");
        } else {
            time--;
            updateTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerRunning);
    time = 1500;
    updateTimer();
}

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
