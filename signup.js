document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const submitButton = document.getElementById('submit-btn');

    function validatePassword() {
        if (passwordInput.value === confirmPasswordInput.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);
});
