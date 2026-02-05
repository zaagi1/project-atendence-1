// Mark page-ku load noqdo
document.addEventListener("DOMContentLoaded", function () {

    // Get Started Button (Home)
    let startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.onclick = function () {
            alert("Welcome to Attendance System 😊");
            window.location.href = "signup.html";
        };
    }

    // Contact Form Validation
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.onsubmit = function (e) {
            e.preventDefault();

            let name = document.getElementById("cName").value;
            let email = document.getElementById("cEmail").value;
            let msg = document.getElementById("cMsg").value;

            if (name == "" || email == "" || msg == "") {
                alert("Fadlan buuxi dhammaan fields-ka ❌");
            } else {
                alert("Message sent successfully ✅");
                contactForm.reset();
            }
        };
    }
});