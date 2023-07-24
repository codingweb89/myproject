document.title = getLocalStorage("documentTitle");

const pageData = {};
const database = {};
function removeDisplay(element) {
    element.style.display = "none";
}

//Code not used in page
const parent_setting = document.querySelectorAll(".parent_setting");
parent_setting.forEach(eachSettings => {
    let childSetting = eachSettings.firstElementChild;
    childSetting.addEventListener("click", (e) => {
        let lastChildSetting = eachSettings.lastElementChild;
        lastChildSetting.classList.toggle("show")
    })
})

//intialize open uploading div;
const uploadFilesDiv = document.querySelector(".uploadfiles_div");


const fullcontainer = document.querySelector(".full_container");
const addTitle = document.querySelector(".add_title");
const cancelTitle = document.getElementById("cancel");
const saveTitle = document.getElementById("save");
const titleInput = document.getElementById("title_input");
const firstH2 = document.getElementById("h2");
const saveAs = document.querySelector(".saveas");
const previewSelect = document.getElementById("preview_select");
const doctypeDiv = document.querySelector(".doctype");
const previewTitle = document.getElementById("preview_title");
const editingBody = document.querySelector(".editing_body");
const preloader = document.querySelector(".preloader");
const saveAlert = document.querySelector(".save_alert");
const fileDiv = document.getElementById("fileDiv");
const fileDivLi = fileDiv.querySelectorAll("li");
const uploadFiles = document.getElementById("upload_files");

//set the value of headers
firstH2.textContent = getLocalStorage("documentTitle")


//checks if user has inputed title or not either to display the title option or not
window.addEventListener("load", (e) => {
    if(localStorage.getItem("documentTitle") !== null) return
    fullcontainer.classList.add("active");
    addTitle.style.display = "block";
    titleInput.select();
})


//Code not used, this code consoles the result when the required key is pressed
window.addEventListener("keydown", (e) => {
    if(e.ctrlKey && e.key === "+") {
        console.log("Control plus pressed")
    }else if(e.ctrlKey && e.key === "-") {
        console.log("Control minus pressed")
    }
})

//function that sets localstorage
function setLocalStorage(key, value) {
     localStorage.setItem(key, value)
}

//function that get localstorage
function getLocalStorage(key) {
     let getValue = localStorage.getItem(key);
     if(getValue === null) getValue = "Untitled";
     return getValue;
     
}

//function that adds title to the page
function addTitleFunc() {
    setLocalStorage("documentTitle", titleInput.value)
    document.title = localStorage.getItem("documentTitle");
    firstH2.textContent = localStorage.getItem("documentTitle")
    addTitle.style.display = "none";
    fullcontainer.classList.remove("active");
    return true;
}

//function that cancels title and returns default
function cancelTitleFunc() {
    setLocalStorage("documentTitle", titleInput.value)
    document.title = localStorage.getItem("documentTitle");
    firstH2.textContent = localStorage.getItem("documentTitle")
    addTitle.style.display = "none";
    fullcontainer.classList.remove("active");
    pageData["title"] = localStorage.getItem("documentTitle")
    return false;
}


//adds title when enter is pressed
titleInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTitleFunc();
    }
})

//when user saves title
saveTitle.onclick = addTitleFunc;
//when user canels title
cancelTitle.onclick = cancelTitleFunc;

//renaming the title function
firstH2.ondblclick = function() {
    this.setAttribute("contenteditable", "true");
};

//As the user is inputing
firstH2.addEventListener("input", (e) => {
    document.title = firstH2.textContent;
    // setLocalStorage("documentTitle", firstH2.textContent)
})

//when the user focus out the header
firstH2.addEventListener("focusout", (e) => {
    firstH2.removeAttribute("contenteditable");
    setLocalStorage("documentTitle", firstH2.textContent);
    document.title = localStorage.getItem("documentTitle");
    firstH2.textContent = localStorage.getItem("documentTitle");
})

//avodis line break when enter is pressed
firstH2.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        firstH2.removeAttribute("contenteditable");
        setLocalStorage("documentTitle", firstH2.textContent);
        document.title = localStorage.getItem("documentTitle");
        firstH2.textContent = localStorage.getItem("documentTitle");
    }
})


//counting words and length of the user input
function editingInputing() {
    const words = document.getElementById("words");
    const length = document.getElementById("length");
    let editingValue = this.textContent;
    let wordsNum = this.textContent.trim().split(" ").length;
    let lengthNum = this.textContent.trim().length;
    words.textContent = wordsNum;
    length.textContent = lengthNum;
    // localStorage.setItem("editText", editingBody.innerHTML);
}
editingBody.addEventListener("input", editingInputing);


//reading file option
fileDivLi.forEach(eachLi => {
    eachLi.addEventListener("click", (event) => {
        let targetValue = event.target.textContent;
        if(targetValue === "New") {
            let newWindow = window.open(document.baseURI);
            localStorage.clear()
            return newWindow;
        }
        if(targetValue === "File") {
            openDisplay(uploadFilesDiv)
        }
        if(targetValue === "Save") {
            document.body.style.cursor = "wait";
            preloader.style.display = "block";
            setTimeout(function() {
                preloader.style.display = "none";
                saveAlert.style.display = "flex";
                document.body.style.cursor = "auto";
                setLocalStorage("editText", editingBody.textContent)
                setLocalStorage("editHTML", editingBody.innerHTML)
            }, 2000)
            setTimeout(function() {
                saveAlert.style.display = "none";
            }, 5000)
        }
        if(targetValue === "Save As") {
            openDisplay(preloader)
            setTimeout(() => {
                saveAs.style.display = "block";
                closeDisplay(preloader)
            }, 1000)
        }
        if(targetValue === "Download") {
            downloadWebsite()
        }
        if(targetValue === "Exit") {
            return window.close()
        }
    })
})

//exit save alert
let exitSaveAlert = document.querySelector(".fa-times");
function exitSaveAlertFunc() {
    saveAlert.style.display = "none";
}
exitSaveAlert.onclick = exitSaveAlertFunc;


const saveAsLi = document.getElementById("saveAs").addEventListener("click", () => {
    previewTitle.textContent = document.title;
})

//adds the document title
const doctypeChildDiv = doctypeDiv.querySelectorAll("div").forEach(each => {
    each.addEventListener("click", (e) => {
        let target = e.currentTarget;
        let label = target.firstElementChild;
        let inputRadio = target.lastElementChild;
        if(inputRadio.checked !== true)return;
        else {
            previewSelect.textContent = "." + label.textContent.substring(5);
            pageData["type"] = label.textContent;
            setLocalStorage("doctype", previewSelect.textContent);
        }
    })
})


//Set localStorage
function setLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

//Get localStorage
function getLocalStorage(key) {
    return localStorage.getItem(key)
}


//remove saveas
document.getElementById("submitPreview").addEventListener("click", () => {
    if(pageData.type === undefined) return;
    removeDisplay(saveAs);

})

//remove save as
document.querySelector(".exitsaveas").addEventListener("click", () => {
    removeDisplay(saveAs)
})



const editDiv = document.getElementById("EditDiv");
const editDivLi = editDiv.querySelectorAll("li");


//All editing functions
function undoFunc() {
    document.execCommand("undo", false, null);
}
function redoFunc() {
    document.execCommand("redo", false, null)
}
function cutFunc() {
    document.execCommand("cut", false, null);
}
function copyFunc() {
    document.execCommand("copy", false, null);
}
function pasteFunc(element) {
    navigator.clipboard.readText()
    .then(text => element.append(text));
}
function deleteFunc() {
    document.execCommand("delete", false, null);
}
function insertFontName(value) {
    return document.execCommand("fontName", false, value)
}
function insertFontSize(value) {
    document.execCommand("fontSize", false, value)
}
function insertHTMLBlock(value) {
    document.execCommand("formatBlock", false, value);
}
function boldFunc() {
    document.execCommand("bold", false, null)
}
function italicFunc() {
    document.execCommand("italic", false, null)
}
function underlineFunc() {
    document.execCommand("underline", false, null)
}


//Targets the editing option in the page
editDivLi.forEach(each => {
    each.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "Undo":
                undoFunc();
                break;
            case "Cut": 
                cutFunc();
                break;
            case "Copy": 
                copyFunc();
                break;
            case "Paste":
                pasteFunc(editingBody);
                break;
            case "Delete":
                deleteFunc();
                break;
        }
    })
})


//functions that opens an element
function openDisplay(element) {
    element.style.display = "block";
}

//functions that closes an element
function closeDisplay(element) {
    element.style.display = "none";
}

//functions that creates a date
function createDate(element) {
    let d = new Date();
    let date = d.toLocaleString();
    element.append(date)
}


const findReplaceDiv = document.querySelector(".find_replace");

const fontBody = document.querySelector(".font_body");
const insertDiv = document.getElementById("insertDiv");
const insertDivLi = insertDiv.querySelectorAll("li");
insertDivLi.forEach(each => {
    each.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "Font": 
                openDisplay(preloader);
                setTimeout(() => {
                    closeDisplay(preloader);
                    openDisplay(fontBody);
                }, 1000);
                break;
                case "Replace":
                    openDisplay(preloader);
                    setTimeout(() => {
                        closeDisplay(preloader);
                        openDisplay(findReplaceDiv)
                        fullcontainer.classList.add("active")
                    }, 1000)
                    break;
                case "Select All":
                    selectAllDoc(editingBody)
                    break;
                case "Date/Time":
                    createDate(editingBody)
                    break;
                case "Word Wrap":
                    break;
        }
    })
})

const closefontdisplay = document.querySelector(".closedisplay");
closefontdisplay.onclick = function() {
    closeDisplay(fontBody)
}

const cancelfontdisplay = document.getElementById("cancel_fonts");
cancelfontdisplay.onclick = function() {
    closeDisplay(fontBody)
}


const closeReplaceDiv = document.querySelector(".close_replace");
closeReplaceDiv.onclick = function() {
    closeDisplay(findReplaceDiv);
    fullcontainer.classList.remove("active")
}


//Selects all document
function selectAllDoc(element) {
    let range = document.createRange();
    range.selectNodeContents(element);
    let selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range)
}

function incrementZoom(zoomKey) {
    return zoomKey++
}

let zoom = 0;
const zoomKeys = document.querySelector(".zoom_keys");
const zoomKeysLi = zoomKeys.querySelectorAll("li");
zoomKeysLi.forEach(each => {
    each.addEventListener("click", (e) => {
        let target = e.currentTarget.textContent;
        switch(target) {
            case "Zoom In Ctrl Plus": 
            zoom += 150;
            document.body.style.zoom = zoom + "%";
            break;
            case "Zoom Out Ctrl Minus":
            zoom -= 150;
            document.body.style.zoom = zoom + "%";
            break;
            case "Restore Default Zoom Ctrl 0":
            zoom = 0;
            document.body.style.zoom = zoom + "%";
            break;
        }
    })
})

const toolsFile = document.querySelector(".tools_file");
const toolsSearch = document.querySelector(".tools_search");
const toolsSave = document.querySelector(".tools_save");
const toolsPrint = document.querySelector(".tools_print");
const toolsCut = document.querySelector(".tools_cut");
const toolsCopy = document.querySelector(".tools_copy");
const toolsClipDuplicate = document.querySelector(".tools_clipboard_duplicate");
const toolsUndo = document.querySelector(".tools_undo");
const toolsRedo = document.querySelector(".tools_redo");
const toolsBold = document.querySelector(".tools_bold");
const toolsItalic = document.querySelector(".tools_italic");
const toolsUnderline = document.querySelector(".tools_underline");

toolsFile.onclick = function() {
    openDisplay(uploadFilesDiv)
}
const searchBarDiv = document.querySelector(".search_bar_div");
toolsSearch.onclick = function() {
    openDisplay(searchBarDiv);
    fullcontainer.classList.add("active")
    let searchBarInput = searchBarDiv.querySelector("input");
    setTimeout(() => {
        searchBarInput.classList.add("border")
    }, 100)
}

document.querySelector(".exitSearchBarDiv").addEventListener("click", () => {
    closeDisplay(searchBarDiv);
    let searchBarInput = searchBarDiv.querySelector("input");
    searchBarInput.classList.remove("border");
    fullcontainer.classList.remove("active")
})

toolsSave.onclick = () => {
    openDisplay(preloader);
    setTimeout(() => {
        saveAlert.style.display = "flex";
        closeDisplay(preloader)
        setLocalStorage("editText", editingBody.textContent);
        setLocalStorage("editHTML", editingBody.innerHTML)
    }, 2000);
    setTimeout(() => {
        saveAlert.style.display = "none";
    }, 5000)
}

toolsPrint.onclick = () => {
    openDisplay(preloader);
    setTimeout(() => {
        closeDisplay(preloader)
        openNewWindow()
    }, 1000)
}

toolsCut.onclick = () => {
    cutFunc();
}

toolsCopy.onclick = () => {
    selectAllDoc(editingBody);
    copyFunc();
}

toolsClipDuplicate.onclick = () => {
    pasteFunc(editingBody);
}

toolsUndo.onclick = () => {
    undoFunc()
}

toolsRedo.onclick = () => {
    redoFunc()
}

toolsBold.onclick = () => {
    boldFunc()
}

toolsItalic.onclick = () => {
    italicFunc()
}

toolsUnderline.onclick = () => {
    underlineFunc()
}

const fontFamily1Select = document.querySelector(".family");
const fontFamily1SelectLi = fontFamily1Select.querySelectorAll("li");
fontFamily1SelectLi.forEach(each => {
    each.addEventListener("click", (e) => {
        let target = e.target.textContent;
        insertFontName(e.target.textContent);
    })
})

const fontSize1Select = document.querySelector(".size");
const fontSize1SelectLi = fontSize1Select.querySelectorAll("li");
fontSize1SelectLi.forEach(each => {
    each.addEventListener("click", (e) => {
        let target = e.target.textContent;
        insertFontSize(target);
    })
})

const inserthtmlblock = document.querySelector(".htmlblock");
const inserthtmlblockLi = inserthtmlblock.querySelectorAll("li");
inserthtmlblockLi.forEach(each => {
    each.addEventListener("click", (e) => {
        let target = e.target.textContent;
        switch(target) {
            case "Normal":
            insertHTMLBlock("span");
            break;
            case "Major Heading":
            insertHTMLBlock("h1");
            break;
            case "Minor Heading":
            insertHTMLBlock("h2");
            break;
            case "Sub Heading":
            insertHTMLBlock("h3");
            break;
            case "Paragraph":
            insertHTMLBlock("p")
        }
    })
})


const selectInputFont = document.getElementById("select_input_font");
const selectInputStyle = document.getElementById("select_input_style");
const selectInputSize = document.getElementById("select_input_size");
const nameSelect = document.getElementById("name_select");
const styleSelect = document.getElementById("style_select");
const sizeSelect = document.getElementById("size_select");
const experimentAlpha = document.querySelector(".experiment_alpha");
let nameSelectedAttr = nameSelect.querySelector("[selected]")
let styleSelectedAttr = styleSelect.querySelector("[selected]")
let sizeSelectedAttr = sizeSelect.querySelector("[selected]")
selectInputFont.value = nameSelectedAttr.textContent;
selectInputStyle.value = styleSelectedAttr.textContent;
selectInputSize.value = sizeSelectedAttr.textContent;

nameSelect.addEventListener("change", (e) => {
    let target = e.target.value;
    selectInputFont.value = target;
    experimentAlpha.style.fontFamily = target;
})

styleSelect.addEventListener("change", (e) => {
    let target = e.target.value;
    selectInputStyle.value = target;
    switch(target) {
        case "Regular":
            experimentAlpha.style.fontStyle = "normal";
            experimentAlpha.style.fontWeight = "normal";
            break;
        case "Oblique":
            experimentAlpha.style.fontStyle = "oblique";
            break;
        case "Bold":
            experimentAlpha.style.fontWeight = "bold";
            break;
        case "Bold Oblique":
            experimentAlpha.style.fontWeight = "bold";
            experimentAlpha.style.fontStyle = "oblique";
            break;
    }
})

sizeSelect.addEventListener("change", (e) => {
    let target = e.target.value;
    selectInputSize.value = target;
    experimentAlpha.style.fontSize = target + "px";
})


//Sets body fonts
function submitFontQuestionaiire() {
    openDisplay(preloader)
    pageData["fontName"] = selectInputFont.value;
    pageData["fontStyle"] = selectInputStyle.value;
    pageData["fontSize"] = selectInputSize.value;
    setTimeout(() => {
        closeDisplay(preloader)
        closeDisplay(fontBody)
    }, 1000)
    editingBody.style.fontName = pageData.fontName;
    editingBody.style.fontSize = pageData.fontSize + "px";
    if(pageData.fontStyle === "Regular") editingBody.style.fontWeight = "normal"; editingBody.style.fontStyle = "normal";
    if(pageData.fontStyle === "Oblique") editingBody.style.fontStyle = "oblique";
    if(pageData.fontStyle === "Bold") editingBody.style.fontWeight = "bold";
    if(pageData.fontStyle === "Bold Oblique") editingBody.style.fontWeight = "bold"; editingBody.style.fontStyle = "oblique";
    setLocalStorage("pageData", JSON.stringify(pageData))
}

document.getElementById("ok_fonts").addEventListener("click", submitFontQuestionaiire);
//close the upload files div with the exit button
document.querySelector(".exit_uploadfiles").onclick = () => {
    closeDisplay(uploadFilesDiv)
    document.querySelector(".error_uploading").textContent = "";
}
//close the upload files div with the cancel button
document.getElementById("cancel_file").onclick = () => {
    closeDisplay(uploadFilesDiv)
    document.querySelector(".error_uploading").textContent = "";
}

//when click the choose upload files button
document.getElementById("choose_upload_file").onclick = function() {
    uploadFiles.click()
}

let w;
const showCase = document.querySelector(".showcase");
const showCaseSpinner = document.querySelector(".showase_spinner")


//Upload file
function uploadChangeValue() {
    let value = event.target.files;
    let valueType = value[0].type;
    if(valueType === "image/jpeg" || valueType === "image/png") {
            w = new Worker("read_image.js");
            openDisplay(showCaseSpinner)
            w.onmessage = function(e) {
                let img = new Image();
                img.src = e.data;
                showCase.appendChild(img);
                closeDisplay(showCaseSpinner)
            }
            w.postMessage(value[0]);
    }else if(valueType === "text/html" || valueType === "text/css" || valueType === "text/javascript" || valueType === "text/plain") {
            w = new Worker(`read_file.js`);
            openDisplay(showCaseSpinner)
            w.onmessage = function(e) {
                let pre = document.createElement("pre");
                pre.textContent = e.data;
                showCase.appendChild(pre)
                closeDisplay(showCaseSpinner);
            }
            w.postMessage(value[0]);
    }else {
        document.querySelector(".error_uploading").textContent = new Error(valueType + " File not supported");
    }
}
uploadFiles.addEventListener("change", uploadChangeValue)



//click the select button
document.getElementById("select_file").onclick = function() {
    editingBody.innerHTML += showCase.innerHTML;
    closeDisplay(uploadFilesDiv);
    showCase.innerHTML = "";
    document.querySelector(".error_uploading").textContent = "";

}

const findInputReplace = document.getElementById("find_input");
const replaceInputReplace = document.getElementById("replace_input");
let resultSearch = document.getElementById("result_search");
const replaceButtonSearch = document.getElementById("replace_button");

function findingFunc() {
    let regFind = new RegExp(findInputReplace.value, "gi");
    let matches = editingBody.textContent.trim().match(regFind);
    if(matches) {
        resultSearch.textContent = matches.length;
    }else {
        resultSearch.textContent = 0;
    }
}

findInputReplace.oninput = findingFunc;

function replaceFunc() {
    findingFunc()
    let editingReg = new RegExp(findInputReplace.value, "gi");
    if(editingBody.textContent.includes(replaceInputReplace.value)) return;
    editingBody.textContent = editingBody.textContent.replace(editingReg, replaceInputReplace.value);
    openDisplay(document.querySelector(".alert_result"));
    setTimeout(() => {
        closeDisplay(document.querySelector(".alert_result"))
    }, 2000)
}

replaceButtonSearch.onclick = replaceFunc;

class myFindReplaceClass {
    constructor(editor, findInput, replaceInput) {
        this.editor = editor;
        this.findInput = findInput;
        this.replaceInput = replaceInput;
    }
    result = "";
    findFunc() {

    }
    replaceFunc() {

    }
}

const insertImageURL = document.querySelector(".insert_image_url");
const insertImage = document.querySelector(".insert_url");
const insertImagebtn = insertImage.querySelectorAll("div");
const fetchImageInput = document.getElementById("fetch_input");
const fetchResult = document.querySelector(".fetch_result");
insertImagebtn.forEach(each => {
    each.addEventListener("click", (event) => {
        let value = event.target.textContent;
        switch(value) {
            case " Upload by computer": 
            openDisplay(uploadFilesDiv);
            break;
            case " Insert by url":
                openDisplay(insertImageURL);
                fetchImageInput.focus()
                break;
        }
    })
})

document.querySelector(".exit_insert_image").onclick = function() {
    closeDisplay(insertImageURL);
    fetchImageInput.value = ""
    fetchResult.innerHTML = ""
}

document.querySelector("#cancelImage").onclick = () => {
    closeDisplay(insertImageURL);
    fetchImageInput.value = ""
    fetchResult.innerHTML = ""
}


//Fetch image url
function fetchImageURLFunc() {
    let error = ""
    fetch(event.target.value)
    .then(response => {
        if(response.ok && response.status === 200) {
            let img = new Image();
            img.src = event.target.value;
            fetchResult.appendChild(img)
        }else {
            error = "Unable to fetch image";
        }
    })
    .catch((err) => {
        error = "Unable to fetch image" + err;
    })
    document.querySelector(".error_fetching").textContent = error;
    return error;
}

fetchImageInput.oninput = function(event) {
    if(!event.target.value) return;
    if(event.target.value.trim() === "") return;
    document.querySelector(".error_fetching").textContent = ""
    fetch(event.target.value)
    .then(response => {
        if(response.ok && response.status === 200) {
            let img = new Image();
            img.src = event.target.value;
            fetchResult.appendChild(img)
            fetchImageInput.value = ""
        }else {
            document.querySelector(".error_fetching").textContent = "Unable to fetch image";
        }
    })
    .catch((err) => {
        document.querySelector(".error_fetching").textContent = "Unable to fetch image" + err;
    })
};


document.getElementById("selectImage").addEventListener("click", () => {
    editingBody.innerHTML += fetchResult.innerHTML;
    fetchResult.innerHTML = "";
    closeDisplay(insertImageURL)
})

// pageData["title"] = localStorage.getItem("documentTitle")

const lastObjectTrial = document.querySelector(".last_object");






//function that runs the print.
let newWindow;
function openNewWindow() {
    newWindow = window.open("preview_notepad.html", "newWindow", "width=700,height=500");
    newWindow.moveBy(50, 50)
    newWindow.location.reload()
    newWindow.focus();
    setTimeout(() => {
        if(newWindow.print()) {
            newWindow.print()
        }else {
            newWindow.close()
        }
    }, 4000)
}


//Downloads document
function downloadWebsite() {
    if(getLocalStorage("doctype") === null) {
        openDisplay(saveAs);
        previewTitle.textContent = document.title;
    }
    else {
        let title = getLocalStorage("documentTitle");
        let downloadEditing;
        if(getLocalStorage("doctype") === ".html") {
            downloadEditing = getLocalStorage("editHTML")
        }else {
            downloadEditing = getLocalStorage("editText")
        }
        // let downloadEditing = localStorage.getItem("editText");
        let downloadBlob = new Blob([downloadEditing], {type: "text/html"});
        let downloadURL = URL.createObjectURL(downloadBlob);
        let a = document.createElement("a");
        a.href = downloadURL;
            switch(getLocalStorage("doctype")) {
            case ".html":
            a.download = title + ".html";
            break;
            case ".css":
            a.download = title + ".css";
            break;
            case ".js":
            a.download = title + ".js";
            break;
            case ".txt":
            a.download = title + ".txt"
            break;
            case ".doc":
            a.download = title + ".doc"
        }

        fullcontainer.classList.add("active");
        openDisplay(document.querySelector(".thanks_div"))
        setTimeout(() => {
            a.click()
        }, 3000)
    }
}

document.querySelector(".close_thanks_div").onclick = function() {
    closeDisplay(document.querySelector(".thanks_div"))
    fullcontainer.classList.remove("active")
}

if(getLocalStorage("doctype") !== null) {
    document.querySelector("#preview_select").textContent = getLocalStorage("doctype");
}

if(getLocalStorage("editText") !== null) {
    editingBody.innerHTML = getLocalStorage("editHTML")
}

if(getLocalStorage("pageData") !== null) {
    let parse = JSON.parse(getLocalStorage("pageData"));
    editingBody.style.fontName = parse.fontName;
    editingBody.style.fontSize = parse.fontSize + "px";
    editingBody.style.fontStyle = parse.fontStyle;
}

if(editingBody.textContent.trim() !== "") {
    const words = document.getElementById("words");
    const length = document.getElementById("length");
    let editingValue = editingBody.textContent;
    let wordsNum = editingBody.textContent.trim().split(" ").length;
    let lengthNum = editingBody.textContent.length;
    words.textContent = wordsNum;
    length.textContent = lengthNum;
}

//open about notepad
document.getElementById("about_notepad").onclick = function() {
    openDisplay(document.querySelector(".about_notepad_fa"))
}

//close about notepad
document.querySelector(".close_about_notepad").onclick = function() {
    closeDisplay(document.querySelector(".about_notepad_fa"))
}

//close about notepad
document.getElementById("ok_notepad").onclick = function() {
    closeDisplay(document.querySelector(".about_notepad_fa"))
}


document.onclick = function(e) {
    
}


/*
This is the informative code you need to read the above code. This code is brought to you by Gideon/uptodateacademy.
All right reserved. Happy Coding!
*/