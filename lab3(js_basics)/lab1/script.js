let addBtn = document.getElementById("add");
let removeBtn = document.getElementById("remove");

let input = document.getElementById("itemInput");
let list = document.getElementById("item");

addBtn.onclick = function () {
    if(input.value == "") return;

    let li = document.createElement("li");
    li.innerText = input.value;

    list.appendChild(li);

    input.value = "";
};


removeBtn.onclick = function () {
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
};