function read(text) {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', text);
    xhr.onload = show;
    xhr.send();
}

function show() {
    var text = this.response;
    document.body.innerHTML = text; //you can replace document.body with whatever element you want to wrap your imported HTML 
}

read(Sell);