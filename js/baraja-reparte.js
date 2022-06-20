// Funciones 

const barajaTarjetas = () => {
    let resultado;
    resultado = totalTarjetas.sort(function () {
        return 0.5 - Math.random();
    });
    return resultado;
}

const reparteTarjetas = () => {
    let mesa = document.querySelector("#mesa");
    let tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function (elemento) {
        let tarjeta = document.createElement("div");

        tarjeta.innerHTML = `<div class='tarjeta' data-valor='${elemento}'>
                         <div class='tarjeta__contenido'>
                         ${elemento}
                         </div>
                         </div>`
        mesa.appendChild(tarjeta);
    });
}
