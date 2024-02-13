const btnSubir = document.querySelector('.ir-arriba');

btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})

window.addEventListener('scroll', () => {
  var botonIrArriba = document.querySelector('.ir-arriba');
  if (window.scrollY > 0) {
    botonIrArriba.classList.add('mostrar');
  } else {
    botonIrArriba.classList.remove('mostrar');
  }
});


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
      card.querySelector('.card-inner').classList.toggle('flipped');
  });
});

function flipCard(card) {
  card.classList.toggle('flipped');
}
