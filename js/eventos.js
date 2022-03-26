import { Toast } from "./sweetalert.js";

/////////////////////////////////////////////////// BOTON CARRITO -- INICIO /////////////////////////////////////////////////////////////////////////////////////////

const slideOnOff = document.querySelector("#btnToggle");
const navBtn1 = document.querySelector(".navBtn1");
const navBtn2 = document.querySelector(".navBtn2");
const slidebar = document.querySelector(".slidebar");

navBtn1.addEventListener("click", (e) => {
  slidebar.classList.toggle("activoSlider")
    ? slidebar.classList.toggle("activoSlider")
    : "";
});

navBtn2.addEventListener("click", (e) => {
  slidebar.classList.toggle("activoSlider")
    ? slidebar.classList.toggle("activoSlider")
    : "";
});

slideOnOff.addEventListener("click", (e) => {
  slidebar.classList.toggle("activoSlider");
});

/////////////////////////////////////////////////// BOTON CARRITO -- FIN /////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////// BOTON AGREGAR -- INICIO /////////////////////////////////////////////////////////////////////////////////////////
const items3 = document.getElementById("items3");
const fragment = document.createDocumentFragment();
const templeFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
let carrito = {};
const cards1 = document.getElementById("items");
cards1.addEventListener("click", (e) => {
  agregarAlCarrito(e);
});

const cards2 = document.getElementById("items2");
cards2.addEventListener("click", (e) => {
  agregarAlCarritoW(e);
});

const agregarAlCarrito = (e) => {
  if (e.target.classList.contains("btnAgregar")) {
    setCarrito(e.target.parentElement);
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito",
    });
  } else if (e.target.classList.contains("btnDetalles")) {
    console.log("Presiona DETALLES");
  }
  //  else if(no hay stoxk){
  //     Toast.fire({
  //         icon: 'error',
  //         title: 'NO HAY MAS STOCK'
  //     })
  // }
  e.stopPropagation;
};

const agregarAlCarritoW = (e) => {
  if (e.target.classList.contains("btnAgregar")) {
    setCarrito(e.target.parentElement);
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito",
    });
  } else if (e.target.classList.contains("btnDetalles")) {
    console.log("Presiona DETALLES");
  }
  //  else if(no hay stoxk){
  //     Toast.fire({
  //         icon: 'error',
  //         title: 'NO HAY MAS STOCK'
  //     })
  // }
  e.stopPropagation;
};

const setCarrito = (objeto) => {
  console.log(objeto.modelo);
  const producto = {
    id: objeto.querySelector(".btnAgregar").dataset.id,
    modelo: objeto.querySelector(".card-title").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1,
  };
  carrito.hasOwnProperty(producto?.id)
    ? (producto.cantidad = carrito[producto?.id].cantidad + 1)
    : false;

  carrito[producto.id] = { ...producto };
  pintarCarrito();
};

const pintarCarrito = () => {
  items3.innerHTML = "";
  Object.values(carrito).forEach((producto) => {
    console.log(producto.modelo);
    console.log(producto.cantidad);
    console.log(producto.id);
    console.log(producto.precio);
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.modelo;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
    templateCarrito.querySelector("span").textContent =
      producto.cantidad * producto.precio;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items3.appendChild(fragment);
  pintarFooter();
};

const pintarFooter = () => {
  footer.innerHTML = `
    <th scope="row" colspan="5"></th>`;
};

const nCantidad = Object.values(carrito).reduce(
  (acc, { cantidad }) => acc + cantidad,
  0
);
const nPrecio = Object.values(carrito).reduce(
  (acc, { cantidad, precio }) => acc + cantidad * precio,
  0
);

templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
templateFooter.querySelector("span").textContent = nPrecio;

const clone = templateFooter.cloneNode(true);
fragment.appendChild(clone);

footer.appendChild(fragment);
const boton = document.querySelector("#vaciar-carrito");
boton.addEventListener("click", () => {
  carrito = {};
  pintarCarrito();
});

/////////////////////////////////////////////////// BOTON AGREGAR -- FIN /////////////////////////////////////////////////////////////////////////////////////////
