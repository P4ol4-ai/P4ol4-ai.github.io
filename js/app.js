// ===========================
// MENÚ ADAPTATIVO
// ===========================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ===========================
// CARRITO DE COMPRAS
// ===========================
const botonesAgregar = document.querySelectorAll(".agregar");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");
const btnVaciar = document.getElementById("vaciar");

let carrito = [];
let total = 0;

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = parseFloat(boton.dataset.precio);

    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
  });
});

if (btnVaciar) {
  btnVaciar.addEventListener("click", () => {
    carrito = [];
    total = 0;
    actualizarCarrito();
  });
}

function actualizarCarrito() {
  if (!listaCarrito || !totalCarrito) return;

  listaCarrito.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
  });
  totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

// ===========================
// FORMULARIO DE CONTACTO
// ===========================
const formContacto = document.getElementById("form-contacto");

if (formContacto) {
  formContacto.addEventListener("submit", e => {
    e.preventDefault();
    alert("💖 ¡Gracias por contactarnos! Te responderemos pronto.");
    formContacto.reset();
  });
}
