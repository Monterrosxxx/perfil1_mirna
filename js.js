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

agregarEmprendedor(
    "Mark Zuckerberg",
    "Cofundador de Facebook. Facebook es la red social más grande del mundo. También fundó la compañía de realidad virtual Oculus.",
    "Mark Zuckerberg es un empresario estadounidense conocido por ser el cofundador de Facebook, la red social más grande del mundo. Nació en White Plains, Nueva York, en 1984. Mientras estudiaba en Harvard, Zuckerberg lanzó Facebook en 2004 junto con sus compañeros de habitación. La plataforma ha crecido rápidamente y ha cambiado la forma en que las personas se conectan en línea. Además de Facebook, Zuckerberg adquirió Oculus VR, una empresa de realidad virtual, en 2014.",
    "Facebook",
    ["Facebook", "Oculus VR"],
    ["Enfoque en la innovación", "Mentalidad de crecimiento", "Trabajo en equipo"]
);

agregarEmprendedor(
    "Steve Jobs",
    "Cofundador de Apple. Revolucionó las computadoras personales, los teléfonos inteligentes, la música digital y las películas de animación.",
    "Steve Jobs fue un empresario y magnate estadounidense conocido por cofundar Apple Inc. Nació en San Francisco, California, en 1955. Jobs cofundó Apple en 1976 junto con Steve Wozniak y Ronald Wayne. Fue pionero en la industria de la tecnología con productos icónicos como el Macintosh, el iPod, el iPhone y el iPad. Además de su trabajo en Apple, Jobs también fue cofundador de Pixar Animation Studios, una compañía que revolucionó la industria de la animación.",
    "Apple",
    ["iPhone", "Macintosh", "iPad", "iTunes"],
    ["Perfeccionismo", "Pasión por el diseño", "Enfoque en la simplicidad"]
);

agregarEmprendedor(
    "Bill Gates",
    "Cofundador de Microsoft. Desarrolló el sistema operativo Windows y varios programas de software populares. También es filántropo.",
    "Bill Gates es un empresario y filántropo estadounidense conocido por cofundar Microsoft Corporation. Nació en Seattle, Washington, en 1955. Gates fundó Microsoft en 1975 junto con Paul Allen. La empresa se convirtió en una de las principales desarrolladoras de software del mundo, especialmente después del lanzamiento de su sistema operativo Windows. Gates es también conocido por sus esfuerzos filantrópicos a través de la Fundación Bill y Melinda Gates, que trabaja en áreas como la salud global y la educación.",
    "Microsoft",
    ["Windows", "Microsoft Office", "Xbox", "Azure"],
    ["Enfoque en la innovación", "Pensamiento estratégico", "Filantropía"]
);

agregarEmprendedor(
    "Larry Page",
    "Cofundador de Google junto a Larry Page. Supervisó el desarrollo del motor de búsqueda de Google.",
    "Larry Page es un empresario estadounidense conocido por ser el cofundador de Google junto con Sergey Brin. Nació en East Lansing, Michigan, en 1973. Page estudió en la Universidad de Stanford, donde conoció a Brin. Juntos, desarrollaron un motor de búsqueda que se convertiría en Google en 1998. Page también fue CEO de Google antes de convertirse en CEO de Alphabet Inc., la empresa matriz de Google.",
    "Google",
    ["Google Search", "Android", "Google Maps", "YouTube"],
    ["Mentalidad de riesgo", "Enfoque en la innovación", "Trabajo en equipo"]
);

agregarEmprendedor(
    "Sergey Brin",
    "Cofundador de Google junto a Larry Page. Supervisó el desarrollo del motor de búsqueda de Google.",
    "Sergey Brin es un empresario estadounidense conocido por ser el cofundador de Google junto con Larry Page. Nació en Moscú, Rusia, en 1973. Brin emigró a Estados Unidos con su familia cuando era niño. Se graduó de la Universidad de Stanford, donde conoció a Page. Juntos, desarrollaron un motor de búsqueda que se convertiría en Google en 1998. Brin también ha participado en proyectos de investigación de vanguardia en Google, como Google Glass y vehículos autónomos.",
    "Google",
    ["Google Search", "Android", "Google Maps", "YouTube"],
    ["Mentalidad de riesgo", "Enfoque en la innovación", "Trabajo en equipo"]
);

agregarEmprendedor(
    "Jack Ma",
    "Fundador de Alibaba Group. Alibaba opera sitios de comercio electrónico para empresas y consumidores, incluyendo Taobao y Tmall.",
    "Jack Ma es un empresario chino conocido por ser el fundador de Alibaba Group, una de las empresas de comercio electrónico más grandes del mundo. Nació en Hangzhou, China, en 1964. Ma fundó Alibaba en 1999 con el objetivo de ayudar a las pequeñas empresas chinas a conectarse con compradores internacionales. La empresa ha crecido rápidamente y ahora ofrece una variedad de servicios, incluyendo plataformas de comercio electrónico como Taobao y Tmall.",
    "Alibaba Group",
    ["Taobao", "Tmall", "Alipay", "AliExpress"],
    ["Visión a largo plazo", "Resiliencia", "Enfoque en el crecimiento sostenible"]
);

agregarEmprendedor(
    "Brian Chesky",
    "Cofundador y CEO de Airbnb. Airbnb es una plataforma de alojamiento entre pares que permite a las personas alquilar sus hogares o espacios a huéspedes a corto plazo.",
    "Brian Chesky es un empresario estadounidense conocido por ser el cofundador y CEO de Airbnb, una plataforma de alojamiento entre pares. Nació en Niskayuna, Nueva York, en 1981. Chesky cofundó Airbnb en 2008 junto con Joe Gebbia y Nathan Blecharczyk. La plataforma permite a las personas alquilar sus hogares o espacios a huéspedes a corto plazo. Airbnb ha crecido rápidamente y ha cambiado la forma en que las personas viajan y encuentran alojamiento.",
    "Airbnb",
    ["Airbnb"],
    ["Creatividad", "Enfoque en la experiencia del usuario", "Adaptabilidad"]
);

agregarEmprendedor(
    "Palmer Luckey",
    "Fundador de Oculus VR. Oculus hace cascos de realidad virtual avanzados adquiridos por Facebook en 2014.",
    "Palmer Luckey es un empresario estadounidense conocido por ser el fundador de Oculus VR, una empresa de tecnología de realidad virtual. Nació en Long Beach, California, en 1992. Luckey fundó Oculus VR en 2012 y lanzó su primer casco de realidad virtual, el Oculus Rift, en 2016. La empresa fue adquirida por Facebook en 2014 y ha seguido desarrollando tecnología de realidad virtual avanzada.",
    "Oculus VR",
    ["Oculus Rift", "Oculus Quest", "Oculus Go"],
    ["Pasión por la tecnología", "Visión disruptiva", "Enfoque en la calidad"]
);

// Continuar con los demás emprendedores...
