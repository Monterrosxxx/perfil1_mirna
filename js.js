// Función para cambiar entre pestañas
function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Función para agregar elementos a la lista de emprendedores
function agregarEmprendedor(nombre, descripcion, biografia, empresaDestacada, productosDestacados, habitos) {
    var listaEmprendedores = document.getElementById("emprendedores-list");
    var nuevoElemento = document.createElement("li");
    var contenido = document.createElement("div");

    var titulo = document.createElement("h3");
    titulo.textContent = nombre;

    var info = document.createElement("p");
    info.textContent = biografia + "\n\n" +
                      "Empresa destacada: " + empresaDestacada + "\n" +
                      "Productos destacados: " + productosDestacados.join(", ") + "\n" +
                      "Hábitos del emprendedor: " + habitos.join(", ");

    contenido.appendChild(titulo);
    contenido.appendChild(info);
    nuevoElemento.appendChild(contenido);

    listaEmprendedores.appendChild(nuevoElemento);
}

// Agregar emprendedores a la lista con información extendida
agregarEmprendedor(
    "Jeff Bezos", 
    "Fundador de Amazon...",
    "Jeff Bezos es el fundador de Amazon, una de las mayores empresas de comercio electrónico y servicios en línea del mundo. Nació en Albuquerque, Nuevo México, en 1964. Bezos se graduó de la Universidad de Princeton en 1986. Después de trabajar en Wall Street, fundó Amazon en 1994 como una librería en línea. La empresa pronto se expandió para vender una amplia variedad de productos, y Bezos se convirtió en uno de los hombres más ricos del mundo.",
    "Amazon",
    ["Amazon Web Services (AWS)", "Kindle", "Amazon Prime", "Amazon Echo"],
    ["Innovación constante", "Enfoque en el cliente", "Toma de decisiones audaces"]
);

agregarEmprendedor(
    "Elon Musk",
    "Cofundador de PayPal, Tesla Motors, SpaceX y Neuralink...",
    "Elon Musk es un empresario sudafricano-estadounidense conocido por su trabajo en PayPal, Tesla Motors, SpaceX y Neuralink. Nació en Pretoria, Sudáfrica, en 1971. Después de vender su empresa Zip2, cofundó PayPal, un servicio de pago en línea. Luego, fundó SpaceX para desarrollar tecnología espacial reutilizable. También es conocido por su trabajo en Tesla Motors, fabricante de automóviles eléctricos de lujo, y Neuralink, una empresa que busca fusionar la mente humana con la inteligencia artificial.",
    "SpaceX",
    ["Tesla Model S", "SpaceX Falcon Rocket", "Neuralink Brain-Computer Interface"],
    ["Horarios de trabajo extremadamente largos", "Visión a largo plazo", "Enfoque en la innovación"]
);

// Continuar con los demás emprendedores...
