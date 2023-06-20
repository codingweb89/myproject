export function openList(element) {
    element.classList.toggle("open_list");
    console.log(element)
}

export function reveal(element, height, revealPoint) {
    let elemHeight = element.getBoundingClientRect().top;
    if(elemHeight < (height - revealPoint)) {
        element.classList.add("active")
    }
}


export function reveal2(element, height, revealPoint) {
    element.forEach(elem => {
        let elemHeight = elem.getBoundingClientRect().top;
        if(elemHeight < (height - revealPoint)) {
            elem.classList.add("active")
        }
    })
}