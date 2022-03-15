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


// Agrego en formato JSON
const tabla = document.querySelector('#carrito')

function cargarProductos() {
    fetch('./js/productos.json')
        .then(respuesta => respuesta.json())
        .then(dato => dato.forEach(producto => {


                let i = document.createElement("tr")
                i.innerHTML += `<td>${producto.id} </td> <td>${producto.modelo}</td> <td>${producto.precio}</td>`
                tabla.appendChild(i)
                console.log(tabla.appendChild(i))

            }


        ))
}

cargarProductos()