import { Toast } from "./sweetalert.js"
import { pintarSinStock, pintarSinStockConID } from "./dom.js"
import { getStorage } from "./storage.js"
import { Producto } from "./Producto.js"


getStorage()
pintarSinStock()

let pagarTotal = 0;

function comprar(valor) {

    pagarTotal = pagarTotal + valor;
}

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

const camisetas = [];


camisetas.push(new Producto(1, 100, 'Racing Titular 2022', 'm', 3));
camisetas.push(new Producto(2, 500, 'Racing Homenaje 2001', 's', 3));
camisetas.push(new Producto(3, 300, "Seleccion Argentina", 'm', 3));

// pintar stock de camisetas
for (const camiseta of camisetas) {
    let elementoContenedor = document.getElementById(camiseta.id);
    elementoContenedor.innerHTML = "EN STOCK";
    elementoContenedor.className = " enStock";
}


let boton1 = document.querySelector("#btn1");
boton1.addEventListener("click", respuestaClick1);


function respuestaClick1() {


    if (camisetas[0].cantidad > 0) {
        comprar(camisetas[0].precio);
        camisetas[0].sacarDelStock(camisetas[0].id);
        camisetas[0].crearLista(camisetas[0].id, camisetas[0].modelo);



        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else {
        Toast.fire({
            icon: 'error',
            title: 'NO HAY MAS STOCK'
        })
        pintarSinStock(camisetas[0].id);
    }

}



let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", respuestaClick2);

function respuestaClick2() {
    if (camisetas[1].cantidad > 0) {
        comprar(camisetas[1].precio);
        camisetas[1].sacarDelStock(camisetas[1].id);
        camisetas[1].crearLista(camisetas[1].id, camisetas[1].modelo);
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else {
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
        pintarSinStock(camisetas[1].id);
    }
}


let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", respuestaClick3);

function respuestaClick3() {
    if (camisetas[2].cantidad > 0) {
        comprar(camisetas[2].precio);
        camisetas[2].sacarDelStock(camisetas[2].id);
        camisetas[2].crearLista(camisetas[2].id, camisetas[2].modelo);
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else {
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
        pintarSinStock(camisetas[1].id);
    }
}