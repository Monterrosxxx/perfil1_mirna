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
agregarEmprendedor("Mark Zuckerberg", "Cofundador de Facebook. Facebook es la red social más grande del mundo. También fundó la compañía de realidad virtual Oculus.");
agregarEmprendedor("Steve Jobs", "Cofundador de Apple. Revolucionó las computadoras personales, los teléfonos inteligentes, la música digital y las películas de animación. ");
agregarEmprendedor("Bill Gates", " Cofundador de Microsoft. Desarrolló el sistema operativo Windows y varios programas de software populares. También es filántropo.");
agregarEmprendedor("Larry Page", "Cofundador de Google junto a Larry Page. Supervisó el desarrollo del motor de búsqueda de Google.");
agregarEmprendedor("Sergey Brin", "Cofundador de Google junto a Larry Page. Supervisó el desarrollo del motor de búsqueda de Google.");
agregarEmprendedor("Jack Ma", "Fundador de Alibaba Group. Alibaba opera sitios de comercio electrónico para empresas y consumidores, incluyendo Taobao y Tmall. ");
agregarEmprendedor("Brian Chesky", "Cofundador y CEO de Airbnb. Airbnb es una plataforma de alojamiento entre pares que permite a las personas alquilar sus hogares o espacios a huéspedes a corto plazo. ");
agregarEmprendedor("Palmer Luckey", "Fundador de Oculus VR. Oculus hace cascos de realidad virtual avanzados adquiridos por Facebook en 2014. ");
