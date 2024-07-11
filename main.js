
document.addEventListener('DOMContentLoaded', function(){
    var defaultUsername = "1234";
    var defaultPassword = "1234";

    var usernameInput = document.getElementById('username');
    var usernameInput = document.getElementById('password');

    if (usernameInput && passwordInput){
        usernameInput.value = sessionStorage.getItem("username") || defaultUsername;
        passwordInput.value = sessionStorage.getItem("password") || defaultPassword;

    }

    document.getElementById('loginForm').addEventListener('submit', function(event){
        event.preventDefault();
        var username = usernameInput.value;
        var password = passwordInput.value;
        if(username === "1234" && password === "1234"){
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("password", passowrd);
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const password = document.getElementById("registerPassword").value;
            registerUser(username, password);
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            loginUser(username, password);
        });
    }
});

function registerUser(username, password) {
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another one.");
    } else {
        localStorage.setItem(username, password);
        alert("Registration successful! You can now log in.");
        window.location.href = "index.html";
    }
}

function loginUser(username, password) {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
