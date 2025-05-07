let indice = 0;

function mostrarImagen() {
  const carrusel = document.getElementById('imagenes');
  const total = carrusel.children.length;
  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

function siguiente() {
  const carrusel = document.getElementById('imagenes');
  indice = (indice + 1) % carrusel.children.length;
  mostrarImagen();
}

function anterior() {
  const carrusel = document.getElementById('imagenes');
  indice = (indice - 1 + carrusel.children.length) % carrusel.children.length;
  mostrarImagen();
}
