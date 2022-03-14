export const pintarSinStock = () => {
    let divs = document.getElementsByClassName("stock");
    let contador = 1;
    for (const div of divs) {
        div.id = `${contador++}`
        div.innerHTML = `SIN STOCK`;
        div.className += " sinStock";
    }
}

export const pintarEnStock = (camisetas) => {
    for (const camiseta of camisetas) {
        let elementoContenedor = document.getElementById(camiseta.id);
        elementoContenedor.innerHTML = "EN STOCK";
        elementoContenedor.className = " enStock";

    }
}

export const pintarSinStockConID = (idStock) => {
    let contenedor = document.getElementById(`${idStock}`);
    contenedor.innerHTML = "SIN STOCK";
    contenedor.className = " sinStock";

}