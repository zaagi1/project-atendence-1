// ========== SIGNUP ==========
let signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.onsubmit = function (e) {
        e.preventDefault();

        let name = document.getElementById("suName").value;
        let email = document.getElementById("suEmail").value;
        let pass = document.getElementById("suPass").value;

        // Validation
        if (name == "" || email == "" || pass == "") {
            alert("All fields are required ❌");
            return;
        }

        if (pass.length < 6) {
            alert("Password must be 6 characters or more ❌");
            return;
        }

        // Save user
        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);
        localStorage.setItem("name", name);

        alert("Signup Successful ✅");
        window.location.href = "login.html";
    };
}

// ========== LOGIN ==========
let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.onsubmit = function (e) {
        e.preventDefault();

        let email = document.getElementById("liEmail").value;
        let pass = document.getElementById("liPass").value;

        let savedEmail = localStorage.getItem("email");
        let savedPass = localStorage.getItem("password");
        let savedName = localStorage.getItem("name");

        if (email == savedEmail && pass == savedPass) {
            alert("Login Successful ✅ Welcome " + savedName);
            window.location.href = "index.html";
        } else {
            alert("Wrong Email or Password ❌");
        }
    };
}