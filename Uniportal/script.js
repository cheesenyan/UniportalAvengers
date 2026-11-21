
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentID = document.getElementById("studentID").value.trim();
    const password = document.getElementById("password").value.trim();

    if (studentID !== "" && password !== "") {
        sessionStorage.setItem("studentID", studentID);

        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMessage").textContent =
            "Please enter your Student ID and Password.";
    }
});
