// Datos JSON
const productosJSON = [
    {
        id: 1,
        nombre: "Café Moka",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema",
        imagen: "imagenes/cafe.jpg"
    },
    {
        id: 2,
        nombre: "Té Verde",
        precio: 50.00,
        descripcion: "Hoja de té verde natural",
        imagen: "imagenes/teVerde.jpg"
    },
    {
        id: 3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezcla de frutas tropicales",
        imagen: "imagenes/smoothFrutas.jpeg"
    }
];

// Función principal
function mostrarProductos() {
    const contenedor = document.querySelector('#contenedor-productos');

    productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('productos-card');

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p><strong>Precio: $${producto.precio.toFixed(2)}</strong></p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;

        contenedor.appendChild(card);
    });
}

// Llamar a la función
mostrarProductos();
