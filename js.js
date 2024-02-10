function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block"; 
  }
  
  // Función para agregar elementos a la lista de emprendedores
  function agregarEmprendedor(nombre, descripcion, empresa) {
    var listaEmprendedores = document.getElementById("emprendedores-list");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = "<strong>" + nombre + "</strong><p>" + descripcion + "</p><p>Empresa: " + empresa + "</p>";
    listaEmprendedores.appendChild(nuevoElemento);
  }
  
  // Agregar emprendedores modificados
  agregarEmprendedor("Jeff Bezos", "Fundador de Amazon. Bezos fundó Amazon en 1994 como una librería online. Hoy en día Amazon es el minorista online más grande del mundo, con ingresos anuales de más de $100 mil millones de dólares.","Amazon");
  
  // Y así sucesivamente para cada emprendedor...