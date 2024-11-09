// form-validation.js

function validateLogin() {
    let isValid = true;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Limpar mensagens de erro
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Validação de username
    if (username.length < 4) {
        document.getElementById("usernameError").innerText = "Username must be at least 4 characters long";
        isValid = false;
    }

    // Validação de password
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
        isValid = false;
    }

    return isValid;
}

function validateRegister() {
    let isValid = true;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Limpar mensagens de erro
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Validação de username
    if (username.length < 4) {
        document.getElementById("usernameError").innerText = "Username must be at least 4 characters long";
        isValid = false;
    }

    // Validação de password
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
        isValid = false;
    }

    // Verificação de correspondência de senha
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}
