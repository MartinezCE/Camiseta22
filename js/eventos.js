import { Toast } from "./sweetalert.js"
import { pintarSinStockConID } from "./dom.js"
import { Producto } from "./Producto.js"
import { camisetas } from "./miArchivo.js"


let pagarTotal = 0;
const comprar = (valor) => {

    pagarTotal = pagarTotal + valor;
    console.log(pagarTotal)
}

let boton1 = document.querySelector("#btn1");
boton1.addEventListener("click", respuestaClick1)


function respuestaClick1() {


    if (camisetas[0].cantidad > 0) {
        comprar(camisetas[0].precio);
        camisetas[0].sacarDelStock(camisetas[0].id, camisetas[0].precio);
        camisetas[0].crearLista(camisetas[0].id, camisetas[0].modelo);


        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else if (camisetas[0].cantidad == 0) {
        Toast.fire({
            icon: 'error',
            title: 'NO HAY MAS STOCK'
        })
        console.log((camisetas[0].id))
        pintarSinStockConID(camisetas[0].id);
    }

}



let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", respuestaClick2)

function respuestaClick2() {
    if (camisetas[1].cantidad > 0) {
        comprar(camisetas[1].precio);
        camisetas[1].sacarDelStock(camisetas[1].id, camisetas[1].precio);
        camisetas[1].crearLista(camisetas[1].id, camisetas[1].modelo);


        console.log(camisetas[1].cantidad)

        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else if (camisetas[1].cantidad == 0) {
        Toast.fire({
            icon: 'error',
            title: 'NO HAY MAS STOCK'
        })
        pintarSinStockConID(camisetas[1].id);
    }
}


let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", respuestaClick3)

function respuestaClick3() {
    if (camisetas[2].cantidad > 0) {
        comprar(camisetas[2].precio);
        camisetas[2].sacarDelStock(camisetas[2].id, camisetas[2].precio);
        camisetas[2].crearLista(camisetas[2].id, camisetas[2].modelo);

        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else {
        Toast.fire({
            icon: 'error',
            title: 'NO HAY MAS STOCK'
        })
        pintarSinStockConID(camisetas[2].id);
    }
}