let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");


let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save() {
    alert(count)
    let countStr = count +  " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}



