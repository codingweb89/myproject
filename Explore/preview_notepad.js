




let pre = document.querySelector("pre");
pre.innerHTML += localStorage.getItem("editText");

let printbtn = document.getElementById("print");
let downloadbtn = document.getElementById("download");
printbtn.onclick = () => {
    window.print();
}



