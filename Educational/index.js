import { openList, reveal, reveal2 } from "./all.js";

const listContainer = document.querySelector(".listcontainer");
const ul = listContainer.querySelector("ul")

document.querySelector(".menu_div").addEventListener("click", () => {
    openList(ul)
})



let img = document.querySelectorAll("img");
img.forEach(images => {
    images.style.opacity = "0";
    images.style.visibility = "hidden"
})

let thirdChildContainer = document.querySelector(".third_child_container")

window.addEventListener("load", (event) => {
    for(var i = 0; i < img.length; i++) {
        img[i].style.opacity = "1"
        img[i].style.visibility = "visible"
    }

    //add class to thirdchildcontainer
    thirdChildContainer.classList.add("active")

})



let onlineDiv = document.querySelector(".online_div")
let firstsection = document.querySelector(".first_section");
let secondSection = document.querySelector(".second_section");
let exploreCourses = document.querySelector(".expore_courses");
let firstAnimationContainer = document.querySelector(".first_animation_container");
let endingAdding = document.querySelector(".endingAdding");
let eachOnline = onlineDiv.querySelectorAll(".each_online");
let eachSuccess = document.querySelector(".each_success");
let eachStudents = document.querySelectorAll(".each_students");
let ourBlog = document.querySelector(".our_blog");
let eachBlogcontainer = document.querySelectorAll(".each_blog_container");
let pricing = document.querySelector(".pricing");
let eachItemList = document.querySelectorAll(".each_item_list")




window.addEventListener("scroll", () => {
    reveal(firstsection, window.innerHeight, 150);
    reveal(secondSection, window.innerHeight, 150);
    reveal(exploreCourses, window.innerHeight, 150);
    reveal(firstAnimationContainer, window.innerHeight, 150);
    reveal(endingAdding, window.innerHeight, 150);
    reveal2(eachOnline, window.innerHeight, 150);
    reveal(eachSuccess, window.innerHeight, 150);
    reveal2(eachStudents, window.innerHeight, 150);
    reveal(ourBlog, window.innerHeight, 150);
    reveal2(eachBlogcontainer, window.innerHeight, 150);
    reveal(pricing, window.innerHeight, 150);
    reveal2(eachItemList, window.innerHeight, 150);
})







