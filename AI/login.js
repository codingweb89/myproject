import { getCookie, setCookie, deleteCookie } from "./all.js";


const headerZone = document.querySelector(".header_zone");
headerZone.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "chatbot.html"
})


const form1 = document.getElementById("form1");
const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");
function logInFunction() {
    const error = document.getElementById("error");
    let result = "";
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    let getEmail = getCookie("userEmail");
    let getPassword = getCookie("password");

    if(getEmail === "" || getEmail === undefined) result = "Invalid Email";
    else if(getPassword === "" || getPassword === undefined) result = "Invalid Password";
    else if(getEmail === "" && getPassword === "") result = "Invalid Email and Password Credientials";

    else {
        if(getEmail !== emailValue) result = "Invalid Email";
        else if(getPassword !== passwordValue) result = "Invalid Password";
        else {
            console.log("Logged in successfully")
        }
    }
    error.textContent = result;
    return result;

    console.log(getEmail, getPassword)
}

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    logInFunction()
})