
const navBar = document.querySelector(".hidden_bar");
navBar.onclick = function() {
    addClass(document.querySelector(".first_aside"), "active")
}




function addClass(element, classes) {
    element.classList.add(classes)
}

function removeClass(element, classes) {
    element.classList.remove(classes)
}


document.querySelector(".close_aside").onclick = function() {
    removeClass(document.querySelector(".first_aside"), "active")
}


