

window.addEventListener("load", (e) => {
    document.querySelector(".opening_preloader").classList.add("remove_preloader")
})

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


let videoArray = [
    "videos/desert sand.mp4",
    "videos/desert tree.mp4"
]

let videoRandom = Math.floor(Math.random() * videoArray.length);

const overlay_images = document.querySelectorAll(".overlay_images");
overlay_images.forEach(img => {
    let parent = img.parentElement;
    parent.style.position = "relative";
    let parentImg = parent.querySelector("img");
    img.style.backgroundImage = `url(${parentImg.src})`;
    let parentImgBorderRadius = window.getComputedStyle(parentImg).borderRadius;
    console.log(parentImgBorderRadius)
    img.style.borderRadius = "50%";
    parentImg.onload = function() {
        img.style.opacity = "0";
        img.style.pointerEvents = "none"
    }
})


// window.addEventListener("load", (e) => {
//     e.preventDefault();
//     let videoSection = document.querySelector(".video_section");
//     let video = document.createElement("video");
//     video.src = videoArray[videoRandom];
//     video.oncanplaythrough = function(e) {
//         videoSection.append(video)
//         video.play()
//     }
//     video.loop
//     // video.play()
//     // let videobtn = document.createElement("button");
//     // videobtn.onclick = function() {
//     //     if(video.paused) {
//     //         video.play()
//     //     }
//     // }
//     // videobtn.click();
//     // videobtn.remove()
//     // video.loop
//     // video.muted
//     // video.autoplay
//     // video.controls
// })


window.ontouchstart = function(e) {
    console.log("Window touched?")
}