function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Función para agregar elementos a la lista de emprendedores
function agregarEmprendedor(nombre, descripcion) {
    var listaEmprendedores = document.getElementById("emprendedores-list");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre + " - " + descripcion;
    listaEmprendedores.appendChild(nuevoElemento);
}

// Agregar emprendedores a la lista
agregarEmprendedor("Jeff Bezos", "Fundador de Amazon...");
agregarEmprendedor("Elon Musk", "Cofundador de PayPal, Tesla Motors, SpaceX y Neuralink...");
// Agregar los demás emprendedores aquí..