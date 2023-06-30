import { openNavigation, closeNavigation, toggleNavigation, setCookie, getCookie, deleteCookie } from "./all.js";

const menulistDiv = document.querySelector(".menu_list_div");
const openNavigationDiv = document.querySelector(".open_navigations_div");


menulistDiv.addEventListener("click", (e) => {
    e.preventDefault();
    openNavigation(openNavigationDiv, "open_navigation")
})

const exitNavigation = document.querySelector(".exit_navigation");
exitNavigation.addEventListener("click", (e) => {
    e.preventDefault();
    closeNavigation(openNavigationDiv, "open_navigation")
})


const span = document.createElement("span");
span.innerHTML = "&#10004;";

const trial_divs = document.querySelector(".trial_divs");
const div_Trial = trial_divs.querySelectorAll("div");
div_Trial.forEach(each => {
    each.setAttribute("data-good", span.innerHTML);
})

const multidropContainer = document.querySelector(".multi_drop_container");
const feature = document.getElementById("feature");

const feature2 = document.getElementById("feature2");
const multi_multi_divs = document.querySelector(".multi_multi_drop_down");
feature2.addEventListener("click", (e) => {
    let lastChild = e.currentTarget.lastElementChild;
    lastChild.classList.toggle("rotate")
    e.preventDefault();
    toggleNavigation(multi_multi_divs, "toggle_navigation");
    multidropContainer.classList.toggle("style_navigation");
})

const features = document.querySelectorAll("#feature");
function clickFeatures() {
    features.forEach(eachfeature => {
        let parent = eachfeature.parentElement;
        let multiDivs = parent.querySelector(".multi_drop_container");
        eachfeature.addEventListener("click", (e) => {
            e.preventDefault();
            toggleNavigation(multiDivs, "toggle_navigation");
            let lastChild = e.currentTarget.lastElementChild;
            lastChild.classList.toggle("rotate")
        })
    })
}

clickFeatures();


function addElementTimeout(element, classes) {
    setTimeout(function() {
        element.classList.add(classes)
    }, 5000)
}

function addElement5Secs(element, classes) {
    setTimeout(function() {
        element.classList.add(classes)
    }, 2000)
}

const cookieBannerDiv = document.querySelector(".cookie_banner_div")

const messageAiOption = document.querySelector(".message_ai_option");

window.addEventListener("load", (e) => {
    let getcookie = getCookie("userCookie");
    if(getcookie === "denied" || getcookie === undefined || getcookie === "") {
        addElementTimeout(cookieBannerDiv, "display_cookie");
    }
    addElement5Secs(messageAiOption, "open_chat_options")
})

const chatBody = document.querySelector(".chat_body")
const exitChat = document.getElementById("exit_chat");
exitChat.addEventListener("click", (e) => {
    e.preventDefault();
    closeNavigation(chatBody, "open_chat")
})



const chatAi = document.getElementById("chatai");
chatAi.addEventListener("click", (e) => {
    e.preventDefault();
    openNavigation(chatBody, "open_chat")
})

const exitIcon = document.getElementById("exitIcon");
exitIcon.addEventListener("click", (e) => {
    e.preventDefault();
    let parent1 = e.target.parentElement;
    let parent2 = parent1.parentElement;
    parent2.remove()
})


const reject = document.getElementById("reject");
reject.addEventListener("click", (e) => {
    let p1 = e.target.parentElement;
    let p2 = p1.parentElement;
    let p3 = p2.parentElement;
    setCookie("userCookie", "denied", 365)
    p3.remove()
})

const accept = document.getElementById("accept");
accept.addEventListener("click", (e) => {
    e.preventDefault();
    let p1 = e.target.parentElement;
    let p2 = p1.parentElement;
    let p3 = p2.parentElement;
    setCookie("userCookie", "granted", 365)
    p3.remove()
})

const chatPageEmail = document.getElementById("chatpageemail");

const chatbotSignup = document.getElementById("chatbotsignup")

function accessFunction() {
    if(chatPageEmail.value.trim() !== "") {
        if(chatPageEmail.value.indexOf("@") != -1) {
            setCookie("EmailAddress", chatPageEmail.value, 365);
            window.location.href="signup.html";
        }return
    }return
}

chatbotSignup.onclick = accessFunction;







