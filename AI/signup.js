import { toggleNavigation, setCookie, getCookie, deleteCookie } from "./all.js";


const languageText = document.querySelector(".language_text");
const languageList = document.querySelector(".languages_lists");

languageText.addEventListener("click", (e) => {
    e.preventDefault();
    toggleNavigation(languageList, "open_languages")
})

const logoPartSection = document.querySelector(".logo_part_section");
logoPartSection.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "chatbot.html"
})


const NameInput = document.getElementById("name_input");
const EmailInput = document.getElementById("email_input");
const PasswordInput = document.getElementById("passoword_input");
const ConfirmPasswordInput = document.getElementById("confirm_password_input");
const checkBoxInput = document.getElementById("checkbox_input")
const span1 = document.getElementById("span1")
const cookieBanner = document.querySelector(".cookie_banner_div")


function validateForm() {

    let result = "";
    if(PasswordInput.value !== ConfirmPasswordInput.value) result = "Password and Confirm password does not match"
    else {
        let checkCookie = getCookie("userCookie");
        if(checkCookie === "denied" || checkCookie === "") {
            result = "Please enable cookie to proceed";
            cookieBanner.classList.add("openCookie")
        }else {          
        setCookie("userName", NameInput.value, 365);
        setCookie("userEmail", EmailInput.value, 365);
        setCookie("password", PasswordInput.value, 365)

        // NameInput.value = ""; EmailInput.value = ""; PasswordInput.value = ""; ConfirmPasswordInput.value = ""; checkBoxInput.checked = false;
        alert("Submitted")
        window.location.reload()
        }
    }
    span1.textContent = result;
    span1.style.color = "red";
    return result;
}

const accept = document.getElementById("accept");
accept.addEventListener("click", (e) => {
    e.preventDefault();
    cookieBanner.classList.remove("openCookie")
    setCookie("userCookie", "granted", 365)
})


const reject = document.getElementById("reject");
reject.addEventListener("click", (e) => {
    cookieBanner.classList.remove("openCookie")
    setCookie("userCookie", "denied", 365)
})


document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm()
})


window.addEventListener("load", (e) => {
    EmailInput.value = getCookie("EmailAddress")
})

