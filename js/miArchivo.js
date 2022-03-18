import { pintarSinStock, pintarEnStock } from "./dom.js"
import { getStorage } from "./storage.js"
import { Producto } from "./Producto.js"


getStorage()
pintarSinStock()



export const camisetas = [];
camisetas.push(new Producto(1, 100, 'Racing Titular 2022', 'm', 3));
camisetas.push(new Producto(2, 500, 'Racing Homenaje 2001', 's', 3));
camisetas.push(new Producto(3, 300, "Seleccion Argentina", 'm', 3));

pintarEnStock(camisetas)





// se dispara cuando el html esta cargado





//////////////////////////////////////////////////////////////////////// API PARA CARGAR IMG /////////////////////////////////////////////////////////////////////////

const img = document.querySelectorAll('.card-img-top'); // la referencia de lo que quiero observar


const intersection = (entries, observer) => { //entradas y observador
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
        }
    });
    // observer.unobserve(entry.target);
};

const options = {
    root: null, // --> cual es el viwport
    rootMargin: '0px', //---> margin al viwport
    threshold: 0 ///---> umbral de colicion ni bien aparece en pantalla
};


const observer = new IntersectionObserver(intersection, options); // ---> Primer parametro es la funcion a la cual va a llamar y segundo parametro son las opciones para que se dispare

img.forEach(img => {
    observer.observe(img);
});

//////////////////////////////////////////////////////////////////////// FIN API PARA CARGAR IMG /////////////////////////////////////////////////////////////////////////