import { Toast } from "./sweetalert.js"


let pagarTotal = 0;

function comprar(valor) {

    pagarTotal = pagarTotal + valor;
}

// por defecto todos los elemento inician sin stock

let divs = document.getElementsByClassName("stock");

for (const div of divs) {

    div.innerHTML = `SIN STOCK`;
    div.className += " sinStock";
}



function pintarSinStock(idStock) {
    let contenedor = document.getElementById(`${idStock}`);
    contenedor.innerHTML = "SIN STOCK";
    contenedor.className = " sinStock";

}

class Producto {

    constructor(id, precio, modelo, talle, cantidad) {
        this.id = id;
        this.precio = precio;
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.talle = talle;
    }

    crearLista(camisetaID, camisetaNombre) {
        let ul = document.createElement("ul");
        ul.innerHTML = `<li> ID:${camisetaID} MODELO:${camisetaNombre}</li>`;
        document.body.appendChild(ul);
    }


    sacarDelStock(id) {
        if (this.cantidad > 0) {
            this.cantidad--;
        } else {
            Toast.fire({
                icon: 'error',
                title: 'NO HAY MAS STOCK'
            })
            pintarSinStock(id);
        }
    }


}



const colorFondoOscuro = document.querySelector("#dark");
const body = document.querySelector("body");

getStorage()

colorFondoOscuro.addEventListener('click', e => {
    body.classList.toggle('darkMode');
    setSorage(body.classList.contains('darkMode'))
})



function getStorage() {
    const modoOscuro = localStorage.getItem('darkMode');

    if (!modoOscuro) {
        setSorage('false')
    } else if (modoOscuro == 'true') {
        body.classList.add('darkMode')
    }

}

function setSorage(value) {
    localStorage.setItem('darkMode', value)
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


// interaccion con el usuario

// let seleccion;

// while (seleccion != 4) {
//     seleccion = prompt("Elegir camiseta\n1) Racing Titular 2022 \n2) Racing Homenaje 2001 \n3) Seleccion Argentina \n4) Finalizar compra")

//     switch (seleccion) {
//         case "1":
//             comprar(camisetas[0].precio);
//             camisetas[0].sacarDelStock(camisetas[0].id);
//             camisetas[0].crearLista(camisetas[0].id, camisetas[0].modelo);
//             break
//         case "2":
//             comprar(camisetas[1].precio);
//             camisetas[1].sacarDelStock(camisetas[1].id)
//             camisetas[2].crearLista(camisetas[2].id, camisetas[2].modelo);
//             break
//         case "3":
//             comprar(camisetas[2].precio);
//             camisetas[2].sacarDelStock(camisetas[2].id);
//             camisetas[2].crearLista(camisetas[2].id, camisetas[2].modelo);
//             break
//         case "4":
//             alert("Total a pagar \n $" + pagarTotal);

//             break
//         default:
//             alert("Opcion incorrercta");

//     }
// }