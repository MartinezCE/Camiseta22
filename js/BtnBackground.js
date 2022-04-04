///////////////////////////////////////// BOTON DARK / LIGTH --INICIO ////////////////////////////////////////////////

const colorFondoOscuro = document.querySelector("#dark");
const body = document.querySelector("body");

colorFondoOscuro.addEventListener("click", (e) => {
    body.classList.toggle("darkMode");
    setSorage(body.classList.contains("darkMode"));
});

export function getStorage() {
    const modoOscuro = localStorage.getItem("darkMode");

    !modoOscuro ? setSorage("false") : body.classList.add("darkMode");
}

function setSorage(value) {
    localStorage.setItem("darkMode", value);
}

///////////////////////////////////// BOTON DARK / LIGTH --FIN ////////////////////////////////////////////////