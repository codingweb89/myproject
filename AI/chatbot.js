import { openNavigation, closeNavigation, toggleNavigation } from "./all.js";

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

clickFeatures()