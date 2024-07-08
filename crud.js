const form = document.getElementById("formRegister");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const departamentoInput = document.getElementById("departamentoInput");
const tableBody = document.getElementById("tableBody");

// Almacenar datos en el localStorage para que no se borren los datos al recargar la web
let data = JSON.parse(localStorage.getItem("formdata")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Almacenar valores que vengan de nombre, email y departamento
    const name = nameInput.value;
    const email = emailInput.value;
    const departamento = departamentoInput.value;

    // Validar un correo, nombre y departamento
    if (name && email && departamento) {
        const newData = { name, email, departamento };
        data.push(newData);
        saveDataToLocalStorage();
        // Actualizar empleados
        renderTable();
        form.reset();
    } else {
        alert("Llene todos los datos");
    }
});

function saveDataToLocalStorage() {
    localStorage.setItem("formdata", JSON.stringify(data));
}

function renderTable() {
    tableBody.innerHTML = '';

    data.forEach(function(item, index) {
        // Crear fila
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const departamentoCell = document.createElement("td");
        const actionCell = document.createElement("td");

        // Crear botón de editar y eliminar
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        nameCell.textContent = item.name;
        emailCell.textContent = item.email;
        departamentoCell.textContent = item.departamento;

        // Agregar texto a los botones
        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        editButton.classList.add("button", "button--secundary");
        deleteButton.classList.add("button", "button--tertiary");

        editButton.addEventListener("click", function() {
            editData(index);
        });

        deleteButton.addEventListener("click", function() {
            deleteData(index);
        });

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(departamentoCell);
        row.appendChild(actionCell);

        // Agregar filas al table body
        tableBody.appendChild(row);
        
    });
}
//funciones para editar y eliminar tabla
function editData(index) {
    const item = data[index];
    nameInput.value = item.name;
    emailInput.value = item.email;
    departamentoInput.value = item.departamento;
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

function deleteData(index) {
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
    
}

renderTable();

//vamos a hacer el reloj

function updateClock() {
    //para tomar el tiempo real
    const now=new Date();

    //tomar hora, minutos y seg
    const hours=now.getHours().toString().padStart(2,"0");
    const minutes=now.getMinutes().toString().padStart(2,"0");
    const seconds=now.getSeconds().toString().padStart(2,"0");

    //mostrarlo 
    const timeString=`${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent=timeString;
}
//para que se cambie cada 1000s
setInterval(updateClock,1000);

updateClock();
    