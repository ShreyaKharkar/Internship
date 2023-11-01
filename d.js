document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Placeholder logic for user authentication
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});