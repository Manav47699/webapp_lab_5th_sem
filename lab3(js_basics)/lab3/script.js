let addBtn = document.getElementById("add");
let table = document.querySelector("table");

addBtn.onclick = function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if(name == "" || age == "") return;

    let row = table.insertRow();

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);

    c1.innerHTML = name;
    c2.innerHTML = age;

//below line jsut mean put this HTML inside c3 -> <button onclick="delRow(this)">delete</button>
    c3.innerHTML = '<button onclick="delRow(this)">delete</button>';

};


function delRow(btn){
    let r = btn.parentNode.parentNode;
    r.remove();
}