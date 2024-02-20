const btnSubir = document.querySelector('.ir-arriba');

btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})

window.addEventListener('scroll', () => {
  let botonIrArriba = document.querySelector('.ir-arriba');
  if (window.scrollY > 0) {
    botonIrArriba.classList.add('mostrar');
  } else {
    botonIrArriba.classList.remove('mostrar');
  }
});

