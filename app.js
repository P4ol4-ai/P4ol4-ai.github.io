// Datos de productos
const productosJSON = [
    {
        id: 1,
        nombre: "Cafe Moka",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema batida",
        imagen: "imagenes/cafe.jpg"
    },
    {
        id: 2,
        nombre: "Té Verde",
        precio: 50.00,
        descripcion: "Té verde natural de hoja entera, refrescante y saludable",
        imagen: "imagenes/teVerde.jpg"
    },
    {
        id: 3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezcla fresca de frutas tropicales y yogurt",
        imagen: "imagenes/Smoothie de Frutas.jpg"
    }
];

function mostrarProductos() {
    const contenedor = document.getElementById('contenedor-productos');

    productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <div class="precio">$${producto.precio.toFixed(2)}</div>
                <button data-id="${producto.id}">Agregar al carrito</button>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

// Ejecutar cuando la página cargue
mostrarProductos();