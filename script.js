
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const button = document.getElementById('submit');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const outputs = document.getElementById('outputs');
button.addEventListener('click', (e) => {
    button.classList.add("submit-transform")
    setTimeout((e) => {
        button.classList.remove("submit-transform")
    }, 250);

    e.preventDefault();
    form.dispatchEvent(new Event('submit'));
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    messages = [];
    if (password.value === '' || password.value == null) {
        messages.push('Please enter a password');
        console.log("p1")
    }
    else if (password.value == confirmPassword.value && confirmPassword.value != '' && password.value != '') {
        messages.push("Both the passwords are the same")
        console.log("test")
        errorElement.innerText = messages.join(", ")
    }
    else {
        messages.push("The passwords do not match");
        errorElement.innerText = messages.join(", ")
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ")
    }
    if (first_name.value != '' ** lastName.value != null && email.value != null && phone.value != null) {
        outputs.innerText = "Name: " + first_name.value + " " + last_name.value + "|| Email: " + email.value + "|| Phone: " + phone.value
  console.log("test")
    }
});

