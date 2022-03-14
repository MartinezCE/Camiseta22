import { pintarSinStockConID } from "./dom.js"



export class Producto {

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
            pintarSinStockConID(id);
        }
    }


}