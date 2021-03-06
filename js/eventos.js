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
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    pintarCarrito();
  }
  localStorage.getItem("cantidad")
    ? (cantidad = JSON.parse(localStorage.getItem("cantidad")))
    : false;
});

const cards1 = document.getElementById("items");
cards1.addEventListener("click", (e) => {
  agregarAlCarrito(e);
});

const cards2 = document.getElementById("items2");
cards2.addEventListener("click", (e) => {
  agregarAlCarritoW(e);
});

items3.addEventListener("click", (e) => {
  btnSumarProducto(e);
});

const finaliza = document.getElementById("finalizar-carrito");
finaliza.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "COMPRA REALIZADA CON EXITO",
    text: "Gracias por confiar en nosotros!",
    footer:
      '<a href="mailto:<Camiseta22>info@gmail.com">Pronto nos pondremos en contacto, para mas infor escribinos ???</a>',
  });
  carrito = {};
  pintarCarrito();
  cambiarTitulo2();
  slidebar.classList.toggle("activoSlider");
});

const agregarAlCarrito = (e) => {
  if (e.target.classList.contains("btnAgregar")) {
    cambiarTitulo();
    setCarrito(e.target.parentElement);
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito",
    });
  } else if (e.target.classList.contains("btnDetalles")) {
    console.log("Presiona DETALLES");
  }
  e.stopPropagation;
};

const agregarAlCarritoW = (e) => {
  if (e.target.classList.contains("btnAgregar")) {
    cambiarTitulo();
    setCarrito(e.target.parentElement);
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito",
    });
  } else if (e.target.classList.contains("btnDetalles")) {
    console.log("Presiona DETALLES");
  }
  e.stopPropagation;
};

const setCarrito = (objeto) => {
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
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const pintarFooter = () => {
  footer.innerHTML = ``;
  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
    <th scope="row" colspan="5">Carrito vacio</th>`;
    return;
  }
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
    Swal.fire({
      title: "El carrito se vacio con exito, vuelva a elegir los productos",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url()",
      backdrop: `
        rgba(0,0,123,0.4)
        url("./img/basquet.gif")
        left top
        no-repeat
      `,
    });

    carrito = {};
    pintarCarrito();
    cambiarTitulo2();
  });
};

const btnSumarProducto = (e) => {
  if (e.target.classList.contains("btn-info")) {
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito",
    });
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++;
    carrito[e.target.dataset.id] = { ...producto };
    pintarCarrito();
  }
  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      console.log("ENTRO EN LA CONDICION", producto.cantidad);
      cambiarTitulo2();
      delete carrito[e.target.dataset.id];
    }
    pintarCarrito();
  }
  e.stopPropagation();
};

/////////////////////////////////////////////////// BOTON AGREGAR -- FIN /////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////  Contador de carrito en el titulo - INICIO /////////////////////////////////////////////////////////////////////////////
//const titulo = document.getElementById("btnToggle");

const cambiarTitulo = () => {
  document.getElementById("btnToggle").textContent = `???? Carrito`;
};

const cambiarTitulo2 = () => {
  document.getElementById("btnToggle").textContent = `Carrito`;
};
//////////////////////////////////////////////////  Contador de carrito en el titulo - FIN /////////////////////////////////////////////////////////////////////////////
