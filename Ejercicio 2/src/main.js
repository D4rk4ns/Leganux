fetch('http://localhost:3000/api/classroom')
.then(response => response.json())
.then(data => {

var tabla = document.createElement('table');

// por cada dato se crea una fila

/*Llenando el titulo
let title = document.createElement('tr'),
    Class = document.createElement('th'),
    Order = document.createElement('th'),
    numberOfStudents = document.createElement('th'),
    active = document.createElement('th'),
    students = document.createElement('th');

    title.appendChild(Class);
    title.appendChild(Order);
    title.appendChild(numberOfStudents);
    title.appendChild(students);
Llenando el titulo*/

for (const fila of data.classroom){
    let tr = document.createElement('tr');

    // otro bucle para recorrer los datos de cada objeto
    for (const atributo of Object.values(fila)) {

        var celda = document.createElement('td');
        celda.textContent = atributo;
        celda.style.border = '1px solid';
        tr.appendChild(celda);
    }

    tr.appendChild(celda);

    tabla.appendChild(tr);
}
document.body.appendChild(tabla);
})


fetch('http://localhost:3000/api/student')
.then(response => response.json())
.then(data => {

var tabla = document.createElement('table');

// por cada dato se crea una fila
for (const fila of data.student){
    let tr = document.createElement('tr');

    // otro bucle para recorrer los datos de cada objeto
    for (const atributo of Object.values(fila)) {

        var celda = document.createElement('td');
        celda.textContent = atributo;
        celda.style.border = '1px solid';
        tr.appendChild(celda);
    }

    tr.appendChild(celda);

    tabla.appendChild(tr);
}
document.body.appendChild(tabla);
})