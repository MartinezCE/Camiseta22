export function pintarSinStock() {
    let divs = document.getElementsByClassName("stock");

    for (const div of divs) {

        div.innerHTML = `SIN STOCK`;
        div.className += " sinStock";
    }
}

export function pintarSinStockConID(idStock) {
    let contenedor = document.getElementById(`${idStock}`);
    contenedor.innerHTML = "SIN STOCK";
    contenedor.className = " sinStock";

}