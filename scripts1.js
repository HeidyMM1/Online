const productos = [
    { nombres: ['Veridex', 'Ivermectina'], href: 'detalle_producto1.html' },
    { nombres: ['TempraForte', 'Tempra', 'paracetamol', 'forte'], href: 'detalle_producto2.html' },
    { nombres: ['Treda', 'Antidiarreico'], href: 'detalle_producto3.html' },
    { nombres: ['ADerogyl', 'ADerogyl Efe', 'Efe', 'ad'], href: 'detalle_producto4.html' },
    { nombres: ['C-Blast', 'Blast', 'C-Blast +D'], href: 'detalle_producto5.html' }
];

const formularioBusqueda = document.querySelector('nav form');
const inputBusqueda = document.getElementById('busqueda');
const resultados = document.getElementById('resultados');

formularioBusqueda.addEventListener('submit', (event) => {
    event.preventDefault();

    const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
    console.log(`Término de búsqueda: ${terminoBusqueda}`);

    if (terminoBusqueda === '') {
        alert('Por favor, ingresa un término de búsqueda.');
        resultados.innerHTML = '';
        return;
    }

    const productosEncontrados = productos.filter(producto =>
        producto.nombres.some(nombre => nombre.toLowerCase().includes(terminoBusqueda))
    );
    console.log('Productos encontrados:', productosEncontrados);

    if (productosEncontrados.length === 0) {
        alert('Producto inexistente.');
        resultados.innerHTML = '';
        inputBusqueda.value = ''; // Limpiar el texto en la barra de búsqueda
    } else if (productosEncontrados.length === 1) {
        console.log('Redirigiendo a:', productosEncontrados[0].href);
        window.location.href = productosEncontrados[0].href;
    } else {
        mostrarResultados(productosEncontrados);
    }
});

function mostrarResultados(productos) {
    resultados.innerHTML = productos.map(producto => `<div>${producto.nombres.join(', ')}</div>`).join('');
}
