/* *********************************
EJERCICIO 2. CREA EL CONTROLADOR DE LA PÁGINA. DEBERÁ PODER CAMBIAR LA COLUMNA DE LA IZQUIERDA PARA QUE MUESTRE LOS DATOS SOLICITADOS Y EN LA COLUMNA DE LA DERECHA LA IMAGEN QUE CORRESPONDE.
EN CONCRETO, HAY QUE MOSTRAR UNA LISTA DE PRÉSTAMOS Y UNA LISTA DE SOCIOS
************************************ */


// EJERCICIO 2.1 Importar las funciones correspondientes
import { listaPrestamos, imgPrestamos, listaSocios, imgSocios } from './funciones.js';
//Aqui importo las funciones

// Ahora puedes usar las funciones en main.js





// EJERCICIO 2.2 Crear las funciones de control de contenidos
//      * Una función (o dos) que solicitará el listado formateado de préstamos/de socios y el nombre de la imagen correspondiente
//      * Luego colocará el listado en el bloque de la izquierda sustituyendo lo que allí aparezca
//      * Para terminar, colocará la imagen en la columna de la derecha
window.listadoPrestamos = function() {
    const textoContainer = document.getElementById('texto');
    //Vaciamos el contenedor
    textoContainer.innerHTML = '';
    textoContainer.appendChild(listaPrestamos());

    const imagenContainer = document.getElementById('imagen');
    imagenContainer.innerHTML = "";
    //Creo elemento de la imagen
    const imgElement = document.createElement('img');
    //Llamo al elemento de la imagen
    imgElement.src = imgPrestamos();
   
   
    imgElement.alt = "Imagen de Préstamos";
   
    imgElement.className = "img-fluid col-5 w-100";
    imagenContainer.appendChild(imgElement); 
}


window.listaSocios = function() {
    const textoContainer = document.getElementById('texto');
    //Vacio el contenedo
    textoContainer.innerHTML = '';
    textoContainer.appendChild(listaSocios());

    const imagenContainer = document.getElementById('imagen');
    imagenContainer.innerHTML = '';

    const imgElement = document.createElement('img');
   
    imgElement.src = imgSocios();
    imgElement.alt = "Imagen de Socios";
    // le doy un tamaño para que no sea muy gande
    imgElement.className = "img-fluid col-5 w-100";
    imagenContainer.appendChild(imgElement);
}


// EJERCICIO 2.3 Enlazar las funciones del módulo main con las funciones del objeto window

    //Te he agregado las funcioes window arriba en forma de implementacion al fuction