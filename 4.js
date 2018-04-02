
var name;
var surname;
var age;

function addRow() {

    name = document.getElementById('name').value;
    surname = document.getElementById('surname').value;
    age = document.getElementById('age').value;

    var tbody = document.getElementById('tab1').getElementsByTagName('TBODY')[0];

    var row = document.createElement("TR");
    tbody.appendChild(row);

    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    td1.innerHTML = name + ' ' + surname;
    td2.innerHTML = age;
}


