//  EJERCICIO 3. Crea las funciones (exportadas) que hagan lo siguiente
//      * Devolver la lista de préstamos formateada con bootstrap, en cada fila aparecerán todos los datos del préstamo
//      * Devolver la imagen correspondiente a préstamos o a socios
//      * Devolver la lista de socios formateada con bootstrap, puedes elegir entre una tabla o una lista con los datos en cada item del socio
// Te dejo los arrays de datos necesarios:

const arrayPrestamos = [
    { id: 1, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', editorial: 'Minotauro', tema: 'aventuras', prestado: true },
    { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', editorial: 'Planeta', tema: 'aventuras', prestado: true },
    { id: 3, titulo: 'El Sanador de Caballos', autor: 'Gonzalo Giner', editorial: 'Espasa', tema: 'novela histórica', prestado: true },
    { id: 4, titulo: 'Yo, César', autor: 'Santiago Posteguillo', editorial: 'Paaneta', tema: 'novela histórica', prestado: true },
    { id: 5, titulo: 'El gran libro de Angular', autor: 'Varios', editorial: 'Tecnolibros', tema: 'diseño web', prestado: true },
    { id: 6, titulo: 'Mil recetas de cocina', autor: 'La abuela cocinera', editorial: 'Tecnolibros', tema: 'cocina', prestado: true },
    { id: 7, titulo: 'Reinos de Sangre', autor: 'Oscar Eimil', editorial: 'epubLibre', tema: 'novela histórica', prestado: true },
    { id: 8, titulo: 'Los cinco lenguajes del amor', autor: 'Gary Chapman', editorial: 'Unilit', tema: 'familia', prestado: true },
    { id: 9, titulo: 'Paternidad Robada', autor: 'María Calvo', editorial: 'Almuzara', tema: 'familia', prestado: true },
    { id: 10, titulo: 'El Macedonio', autor: 'Nicholas Guild', editorial: 'Planeta', tema: 'historia', prestado: true },
    { id: 11, titulo: 'El Ritmo de la Guerra', autor: 'Brandon Sanderson', editorial: 'epulibre', tema: 'aventuras', prestado: true },
];

const arraySocios = [
    { idSocio: 1001, nombre: 'Aitor Tilla Depapas', mail: 'atilpas@biblio.bi' },
    { idSocio: 1011, nombre: 'Domingo Díaz de Carreras', mail: 'ddiaras@biblio.bi' },
    { idSocio: 1013, nombre: 'Josechu Letón', mail: 'joston@biblio.bi' },
    { idSocio: 1021, nombre: 'Dolores Fuertes de Barriga', mail: 'dfuriga@biblio.bi' },
    { idSocio: 1022, nombre: 'Encarna Vales', mail: 'encles@biblio.bi' },
    { idSocio: 1025, nombre: 'Armando Jaleo', mail: 'armleo@biblio.bi' },
    { idSocio: 1129, nombre: 'Carmelo Cotón', mail: 'carton@biblio.bi' },
    { idSocio: 1131, nombre: 'Alberto Mate Frito', mail: 'atomito@biblio.bi' }
];

const imagenes = { prestamos: 'prestamosbiblio.jpg', socios: 'userbiblio.jpg', inicio: 'biblioteca.jpg' }


// Aquí van las funciones

export function listaPrestamos() {
    // crea una lista de préstamos y la devuelve
    const tabla = document.createElement('table');
    tabla.className = "table table-striped";

    const encabezado = document.createElement('thead');
    const filaEncabezado = document.createElement('tr');
    const titulos = ["ID", "Título", "Autor", "Editorial", "Tema", "Prestado"];
    
    titulos.forEach(titulo => {
        const th = document.createElement('th');
        th.innerText = titulo;
        filaEncabezado.appendChild(th);
    });

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement('tbody');
    
    arrayPrestamos.forEach(prestamo => {
        const fila = document.createElement('tr');
        Object.values(prestamo).forEach(valor => {
            const td = document.createElement('td');
            td.innerText = valor;
            fila.appendChild(td);
        });
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    return tabla;

}


export function imgPrestamos() {
    // devuelve la imagen de préstamos
    return imagenes.prestamos; 
}

export function listaSocios() {
    // Crea y devuelve la lista de socios
    const table = document.createElement('table');
    table.className = "table table-striped  col-5"; 

    const tr = document.createElement('thead');
    const th1 = document.createElement('th');
    th1.innerText = "ID Socio";
    const th2 = document.createElement('th');
    th2.innerText = "Nombre";
    const th3 = document.createElement('th');
    th3.innerText = "Email";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);

    const tbody = document.createElement('tbody');
    
    arraySocios.forEach(socio => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerText = socio.idSocio;
        td2.innerText = socio.nombre;
        td3.innerText = socio.mail;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
}

export function imgSocios() {
    // devuelve laimagen de socios
    return imagenes.socios
}