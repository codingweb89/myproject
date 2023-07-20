


self.onmessage = function(e) {
    let reader = new FileReader();
    reader.onload = function(e) {
        let targeted = e.target.result;
        postMessage(targeted)
    }
    reader.readAsText(e.data)
}