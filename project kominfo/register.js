document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Assuming the login is successful (you should replace this with your actual check)
        const isLoginSuccessful = true;

        if (isLoginSuccessful) {
            // Handle successful login here
            alert('Login successful. Redirecting to dashboard.');

            // You can also redirect to the dashboard page or perform other actions as needed
            window.location.href = 'dashboard.html';
        } else {
            // Handle unsuccessful login here
            alert('Login failed. Please check your credentials and try again.');
        }
    });
});