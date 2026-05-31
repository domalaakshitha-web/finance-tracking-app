function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "laddu4" && password === "200305") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerHTML =
            "Invalid Username or Password";
    }
}

