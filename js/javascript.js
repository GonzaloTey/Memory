//Variables

let grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

// Funciones 

const barajaTarjetas = () => {
  let resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

const reparteTarjetas = () => {
  let mesa = document.querySelector("#mesa");
  let tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    let tarjeta = document.createElement("div");

    tarjeta.innerHTML = `<div class='tarjeta'>
                         <div class='tarjeta__contenido'>
                         ${elemento}
                         </div>
                         </div>`
    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.classList.add("descubierta");
}

//Puesta en marcha

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});