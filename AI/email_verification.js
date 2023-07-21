const loadingHr = document.querySelector(".loading_hr");
const levelsContainer = document.querySelector(".levels_container");
let levelsDiv = levelsContainer.querySelectorAll("div");






const verify = document.getElementById("verify");
const verifyCode = document.getElementById("verify_code");
const allResend = document.querySelector(".all_resend");
const validCode = document.getElementById("valid_code")


function verifyEmail() {
    this.style.display = "none"
    allResend.style.display = "block";

    let generateRandom = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    this.generateRandom = this.generateRandom;
    setTimeout(function() {
        if(confirm("Copy your OTP code " + generateRandom)) {
            navigator.clipboard.writeText(generateRandom)
        }
    }, 2000)
}

verify.addEventListener("click", verifyEmail)

const speech = document.querySelector(".speech");

function verifyCodeFunc() {
    let errorCode = ""
    if(validCode.value.trim() === "") speech.textContent = "Input can't be empty";
    let result = navigator.clipboard.readText();
    result.then((value) => {
        let resultValue = value;
        if(resultValue !== validCode.value) {
            speech.textContent = "Invalid Code!"
        }else {
            alert("Congrats on your signing up!")
        }
    })

    result.catch((value) => {
        speech.textContent = value;
    })


    return errorCode;
}

verifyCode.addEventListener("click", verifyCodeFunc)

console.log(speech)

document.getElementById("resendCode").addEventListener("click", (e) => {
    e.preventDefault();
    verify.click()
})

window.addEventListener("load", (e) => {
    loadingHr.style.width = "88%";


    loadingHr.addEventListener("transitionend", (e) => {
        levelsDiv[3].style.backgroundColor = "rgb(38, 0, 255)";
    })
})


console.log(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))