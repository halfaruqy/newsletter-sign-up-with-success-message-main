const emailValidator = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(re)) {
        return true
    } else {
        return false
    }
}

var userInput = document.getElementById("userInput");
var invalidText = document.getElementById("invalidText");
var containerForm = document.getElementById("containerForm");
var containerMsg = document.getElementById("containerMsg");
const submitForm = document.getElementById("submitForm");

userInput.onkeyup = () => {
    if (emailValidator(userInput.value) == false) {
        userInput.classList.add("invalid")
        invalidText.classList.add("true")
    } else {
        userInput.classList.remove("invalid")
        invalidText.classList.remove("true")
    }
};

submitForm.addEventListener("submit", e => {
    e.preventDefault()
    const userEmail = userInput.value;
    containerForm.classList.add("submitted")
    document.getElementById("userEmail").innerText = userEmail
    containerMsg.classList.remove("hidden")

    console.log(userInput.value)
})

document.getElementById("buttonDismiss").addEventListener("click", e => {
    e.preventDefault()
    userInput.value = "";
    containerForm.classList.remove("submitted")
    containerMsg.classList.add("hidden")
})