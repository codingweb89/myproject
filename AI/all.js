
// export function setCookie(key, value, daysToLive) {
//     let date = new Date();
//     date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
//     let expires = "expires=" + date.toUTCString()
//     document.cookie = `${key}=${value}; ${expires}; path=/; secure;`
// }

// export function getCookie(key) {
//     let decode = decodeURIComponent(document.cookie);
//     let decodeArray = decode.split("; ");
//     let result;
//     decodeArray.forEach(elem => {
//         if(elem.indexOf(key) === 0) {
//             result = elem.substring(key.length + 1)
//         }
//     })
//     return result;
// }


// export function deleteCookie(key) {
//     setCookie(key, null, null)
// }



// let noteNumber = 0;

export function openNavigation(element, classes) {
    element.classList.add(classes);
}

export function closeNavigation(element, classes) {
    element.classList.remove(classes)
}

export function toggleNavigation(element, classes) {
    element.classList.toggle(classes)
}