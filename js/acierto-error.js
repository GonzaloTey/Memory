// Funciones 

const acierto = (lasTarjetas) => {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada")
  })
};
const error = (lasTarjetas) => {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  setTimeout(function () {
    lasTarjetas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
};