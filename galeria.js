// Agrega efecto al hacer clic sobre las imágenes
const imagenes = document.querySelectorAll('.galeria img');

imagenes.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('ampliada');
    });
});

// Estilo dinámico para imagen ampliada
const style = document.createElement('style');
style.textContent = `
    .ampliada {
        transform: scale(1.2);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        z-index: 10;
    }
`;
document.head.appendChild(style);
