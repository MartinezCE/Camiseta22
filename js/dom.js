//////////////////////////////////////////// PINTAR HTML ////////////////////////////////////////////////////
const items = document.getElementById("items");
const items2 = document.getElementById("items2");
const templateCard = document.getElementById("template-card").content;
const templateCard2 = document.getElementById("template-card2").content;
const fragment = document.createDocumentFragment();
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const respuesta = await fetch("js/api.json");
    const dato = await respuesta.json();
    pintarCard(dato);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (data) => {
  data.forEach((producto) => {
    if (producto.id < 16) {
      templateCard.querySelector("h5").textContent = producto?.modelo;
      templateCard.querySelector("p").textContent = ` ${producto?.precio}`;
      templateCard.querySelector("img").setAttribute("src", producto?.img);
      templateCard.querySelector(".btnAgregar").dataset.id = `${producto?.id}`;
      templateCard.querySelector(
        ".btnDetalles"
      ).dataset.id = `btn-${producto?.id}-b`;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    } else {
      templateCard2.querySelector("h5").textContent = producto?.modelo;
      templateCard2.querySelector("p").textContent = ` ${producto?.precio}`;
      templateCard2.querySelector("img").setAttribute("src", producto?.img);
      templateCard2.querySelector(".btnAgregar").dataset.id = producto?.id;
      templateCard2.querySelector(
        ".btnDetalles"
      ).dataset.id = `${producto?.id}-b`;
      const clone2 = templateCard2.cloneNode(true);
      fragment.appendChild(clone2);
    }
  });
  items.appendChild(fragment);
  items2.appendChild(fragment);
};

//////////////////////////////////////////// PINTAR HTML - FIN ////////////////////////////////////////////////////
