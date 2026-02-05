// ================= DOM EXAMPLES =================

// Change text in Home page
let title = document.querySelector(".hero-content h1");
if (title) {
    title.innerHTML = "Welcome to Smart Attendance System";
}

// ================= EVENTS EXAMPLES =================

// Button click event
let startBtn = document.getElementById("startBtn");
if (startBtn) {
    startBtn.addEventListener("click", function () {
        alert("Button Clicked (Event Example) ✅");
    });
}

// Mouse hover event
if (startBtn) {
    startBtn.addEventListener("mouseover", function () {
        startBtn.style.backgroundColor = "red";
    });
}

// ================= VALIDATION EXAMPLES =================
let signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("suName").value.trim();
        let email = document.getElementById("suEmail").value.trim();
        let pass = document.getElementById("suPass").value;

        // Name must be letters only
        let namePattern = /^[A-Za-z\s]+$/;

        if (name == "") {
            alert("Name is required ❌");
            return;
        }

        if (!namePattern.test(name)) {
            alert("Name must contain letters only ❌");
            return;
        }

        if (email == "") {
            alert("Email is required ❌");
            return;
        }

        if (pass.length < 6) {
            alert("Password must be at least 6 characters ❌");
            return;
        }

        alert("Validation Passed ✅");
    });
}


// Contact Form Validation
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("cName").value;
        let email = document.getElementById("cEmail").value;
        let msg = document.getElementById("cMsg").value;

        if (name == "" || email == "" || msg == "") {
            alert("All fields required ❌");
        } else {
            alert("Message Sent Successfully ✅");
        }
    });
}
// Buy Now buttons
let buyButtons = document.querySelectorAll(".buyBtn");

buyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let price = btn.getAttribute("data-price");
        alert("You have purchased this course for $" + price + " ✅");
    });
});

