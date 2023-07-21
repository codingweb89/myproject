const loadingHr = document.querySelector(".loading_hr");
const levelsContainer = document.querySelector(".levels_container");
let levelsDiv = levelsContainer.querySelectorAll("div");
const span1 = document.getElementById("span1");
span1.style.color = "red";


const dateofbirth = document.getElementById("date_of_birth");
const form1 = document.getElementById("form1");








form1.addEventListener("submit", (e) => {
    let result = "";
    e.preventDefault();

    let dateValue = dateofbirth.value;
    let firstDate = new Date(dateValue).getFullYear();
    let currentYear = new Date().getFullYear();
    let calc = currentYear - firstDate;
    if(calc < 18) {
        result = "You will have to be at least 18 to get in";
    }else {
        window.location.reload();
        window.location.href = "signup_payment_page3.html";
    }

    span1.textContent = result;
    span1.style.color = "red";
    return result;
})







window.addEventListener("load", (e) => {
    loadingHr.style.width = "40%";

    loadingHr.addEventListener("transitionend", (e) => {
        levelsDiv[1].style.backgroundColor = "rgb(38, 0, 255)"
    })

    console.log(window.getComputedStyle(dateofbirth).fontSize)
})


document.querySelector(".logo_part_section").addEventListener("click", (e) => {
    window.location.href = "chatbot.html"
})