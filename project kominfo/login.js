document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        let inputNama = document.getElementById("username").value;
        let inputPassword = document.getElementById("password").value;

        if (inputNama === "admin" && inputPassword === "123") {
            alert("Login Berhasil");
            // Redirect to the dashboard.html after successful login
            window.location.href = "dashboard.html";
        } else {
            alert("Username atau password salah");
        }
    });
});
