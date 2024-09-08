const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signInFormButton = document.getElementById('signInButton');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

// Handle panel switching for sign-up/sign-in
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Handle alert for sign-in button click
signInFormButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission for demo purposes
    alert("Sign In Successfully!");
});

// Handle alert for forgot password link click
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link action for demo purposes
    alert("A new password request has been sent to your registered number.");
});
