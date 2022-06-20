// Funciones 

function descubrir() {
    let descubiertas;
    let totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if (totalDescubiertas.length > 1) {
        return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (descubiertas.length < 2) {
        return;
    }

    comparar(descubiertas);

}

const comparar = (tarjetasAComparar) => {
    if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
        acierto(tarjetasAComparar);
    } else {
        error(tarjetasAComparar);
    }
};