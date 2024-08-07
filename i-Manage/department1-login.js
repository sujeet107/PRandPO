document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm1');
    const errorMessage = document.getElementById('error-message1');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username1').value;
        const password = document.getElementById('password1').value;

        // Example validation - replace with real authentication logic
        if (username === 'username1' && password === 'password123') {
            window.location.href = 'file:///C:/Users/Admin/Documents/i-Manage/Applyer/pr-approving-page.html'; // Redirect to Department 1 User 1 dashboard
        } else if (username === 'username2' && password === 'password234') {
            window.location.href = 'department1-dashboard-U2.html'; // Redirect to Department 1 User 2 dashboard
        } else if (username === 'username3' && password === 'password345') {
            window.location.href = 'department1-dashboard-U3.html'; // Redirect to Department 1 User 3 dashboard
        } else if (username === 'username4' && password === 'password456') {
            window.location.href = 'department1-dashboard-U4.html'; // Redirect to Department 1 User 4 dashboard
        } else if (username === 'username5' && password === 'password567') {
            window.location.href = 'department1-dashboard-U5.html'; // Redirect to Department 1 User 5 dashboard
        } else if (username === 'username6' && password === 'password678') {
            window.location.href = 'department1-dashboard-U6.html'; // Redirect to Department 1 User 5 dashboard
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
