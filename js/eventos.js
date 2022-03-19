import { Toast } from './sweetalert.js'


let pagarTotal = 0;
const comprar = (valor) => {

    pagarTotal = pagarTotal + valor;
    console.log(pagarTotal)
}


const cards1 = document.getElementById('items')
console.log(cards1)
cards1.addEventListener("click", e => {
    agregarAlCarrito(e)
})

const cards2 = document.getElementById('items2')
console.log(cards2)
cards2.addEventListener("click", e => {
    agregarAlCarritoW(e)
})

const agregarAlCarrito = (e) => {
    if (e.target.classList.contains('btnAgregar')) {
        console.log("Presiona Agregar")
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else if (e.target.classList.contains('btnDetalles')) {
        console.log("Presiona DETALLES")
    }
    //  else if(no hay stoxk){
    //     Toast.fire({
    //         icon: 'error',
    //         title: 'NO HAY MAS STOCK'
    //     })
    // }
    e.stopPropagation;
}


const agregarAlCarritoW = (e) => {
    if (e.target.classList.contains('btnAgregar')) {
        console.log("Presiona Agregar")
        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        })
    } else if (e.target.classList.contains('btnDetalles')) {
        console.log("Presiona DETALLES")
    }
    //  else if(no hay stoxk){
    //     Toast.fire({
    //         icon: 'error',
    //         title: 'NO HAY MAS STOCK'
    //     })
    // }
    e.stopPropagation;
}