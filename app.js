function validatePassword(input) {
    if (input.checkValidity()) {
        input.style.border = "2px solid green";
    } else {
        input.style.border = "2px solid red";
    }
}

document.getElementById("password").oninput = function() {
    validatePassword(this);
};

document.getElementById("confirm_password").oninput = function() {
    validatePassword(this);
};
