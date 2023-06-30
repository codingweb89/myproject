
function setCookie(key, value, daysToLive) {
    let date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expires = "expires=" + date.toUTCString()
    document.cookie = `${key}=${value}; ${expires}; path=/; secure;`
}

function getCookie(key) {
    let decode = decodeURIComponent(document.cookie);
    let decodeArray = decode.split("; ");
    let result;
    decodeArray.forEach(elem => {
        if(elem.indexOf(key) === 0) {
            result = elem.substring(key.length + 1)
        }
    })
    if(result === undefined) {
        result = ""
    }
    return result;
}


function deleteCookie(key) {
    setCookie(key, null, null)
}


function storeLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}

function getLocalStorage(key) {
    return localStorage.getItem(key)
}



// let noteNumber = 0;

function openNavigation(element, classes) {
    element.classList.add(classes);
}

function closeNavigation(element, classes) {
    element.classList.remove(classes)
}

function toggleNavigation(element, classes) {
    element.classList.toggle(classes)
}


export { setCookie, getCookie, deleteCookie, openNavigation, closeNavigation, toggleNavigation, storeLocalStorage, getLocalStorage };