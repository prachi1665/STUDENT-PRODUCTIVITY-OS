function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("msg").innerText = "Fill all fields!";
        return;
    }

    // fake login (frontend only)
    localStorage.setItem("user", user);

    window.location.href = "dashboard.html";
}

// auto redirect if already logged in
window.onload = function () {
    if (localStorage.getItem("user")) {
        window.location.href = "dashboard.html";
    }
};
