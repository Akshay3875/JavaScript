function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    clearErrors();
}

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    clearErrors();
}

function clearErrors() {
    document.getElementById('loginError').innerHTML = '';
    document.getElementById('registerError').innerHTML = '';
}

function loginUser() {
    clearErrors();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Simple validation (you should implement more robust validation in a real application)
    if (!username || !password) {
        document.getElementById('loginError').innerHTML = 'All fields are required';
        return false;
    }

    // Perform login logic (not implemented in this example)

    return true;
}

function registerUser() {
    clearErrors();

    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Simple validation (you should implement more robust validation in a real application)
    if (!username || !password) {
        document.getElementById('registerError').innerHTML = 'All fields are required';
        return false;
    }

    // Perform registration logic (not implemented in this example)

    return true;
}
