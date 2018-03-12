// JavaScript source code
function signupValidate() {
    if (document.signup.reg_first_name.value == '') {
        alert('Please fill in your first name!');
        document.signup.reg_first_name.focus();
        return false;
    }
    if (document.signup.reg_last_name.value == '') {
        alert('Please fill in your last name!');
        document.signup.reg_last_name.focus();
        return false;
    }
    if (document.signup.reg_email_address.value == '') {
        alert('Please fill in your email address!');
        document.signup.reg_email_address.focus();
        return false;
    }
    if (document.signup.reg_birthdate.value == '') {
        alert('Please fill in your birth date!');
        document.signup.reg_birthdate.focus();
        return false;
    }
    if (document.signup.reg_password.value == '') {
        alert('Please type the password!');
        document.signup.reg_password.focus();
        return false;
    }
    if (document.signup.reg_password.value !=
        document.signup.reg_confirm_password.value) {
        alert("The two passwords are not identical! " +
            "Please enter the same password again for confirmation");
        return false;
    }
    return true;
}

function loginValidate() {
    if (document.login.login_email_address.value == '') {
        alert('Please fill in your email address!');
        document.signup.login_email_address.focus();
        return false;
    }
    if (document.login.login_password.value == '') {
        alert('Please fill in your password!');
        document.login.login_password.focus();
        return false;
    }
    return true;
}

