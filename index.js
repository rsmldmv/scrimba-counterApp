//document.getElementById('count-el').innerText = 5;

let count = 0;
let saveEl = document.getElementById("save-el");

function setFocus() {
    document.getElementById('increment-btn').focus();
}
//
//
//
function save() {
    let elSave = count + ' - ';
    saveEl.textContent += elSave;
    document.getElementById('count-el').textContent = 0;
    count = 0;
}
//
//
//
function addOne() {
    count++;
    document.getElementById('count-el').textContent = count;
}