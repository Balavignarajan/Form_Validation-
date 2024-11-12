const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
  
    // Track form validation
    let isFormValid = true;

    // Username
    if (usernameValue === '') {
        setError(username, 'Username cannot be blank');
        isFormValid = false;
    } else {
        setSuccess(username);
    }

    // Email
    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
        isFormValid = false;
    } else if (!isEmail(emailValue)) {
        setError(email, 'Email not valid');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    // Password
    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
        isFormValid = false;
    } else {
        setSuccess(password);
    }

    // Confirm password
    if (password2Value === '') {
        setError(password2, 'Confirm password cannot be blank');
        isFormValid = false;
    } else if (passwordValue !== password2Value) {
        setError(password2, 'Passwords do not match');
        isFormValid = false;
    } else {
        setSuccess(password2);
    }

    // Show success alert if all fields are valid
    if (isFormValid) {
        alert('Account created successfully!');
    }
}

// Functions
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// For Email Validation
function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
