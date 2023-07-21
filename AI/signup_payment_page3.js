document.querySelector(".logo_part_section").addEventListener("click", (e) => {
    window.location.href = "chatbot.html"
})



const form1 = document.getElementById("form1");
const buttonDiv2 = document.querySelector(".button_div2");
let button_button2 = buttonDiv2.querySelector("button");
const debit = document.querySelector(".debit");
const paypal = document.querySelector(".paypal");



debit.addEventListener("click", (e) => {
    form1.classList.remove("class")
    buttonDiv2.classList.remove("class")
    document.body.style.height = "auto"
})

paypal.addEventListener("click", (e) => {
    form1.classList.add("class")
    buttonDiv2.classList.add("class");
    document.body.style.height = "100vh"
})


button_button2.addEventListener("click", (e) => {
    window.open("https://www.paypal.com", "_blank")
})


form1.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location.reload();
    window.location.href = "email_verification.html";
})

const loadingHr = document.querySelector(".loading_hr");
const levelsContainer = document.querySelector(".levels_container");
let levelsDiv = levelsContainer.querySelectorAll("div");


window.addEventListener("load", (e) => {
    loadingHr.style.width = "60%";

    loadingHr.addEventListener("transitionend", (e) => {
        levelsDiv[2].style.backgroundColor = "rgb(38, 0, 255)"
    })
})