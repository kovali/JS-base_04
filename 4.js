var d = document;

var name;
var surname;
var age;

function addRow() {

    name = d.getElementById('name').value;
    surname = d.getElementById('surname').value;
    age = d.getElementById('age').value;

    var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];

    var row = d.createElement("TR");
    tbody.appendChild(row);

    var td1 = d.createElement("TD");
    var td2 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    td1.innerHTML = name + ' ' + surname;
    td2.innerHTML = age;
}


