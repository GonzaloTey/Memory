const juegos = document.getElementById("juegosNuevos");
const verJuegos = document.getElementById("verJuegos");
const demoraContainer = document.querySelector(".demoraContainer")

const llamarJuegos = async () => {
    const response = await fetch('/datos.json');
    const data = await response.json();

    data.forEach(element => {
        const marco = document.createElement("div")

        marco.innerHTML = `
                            <div class="card h-100 bg-light">
                                <img src= "../assets/juego${element.id}.png"
                                class="card-img-top" alt="juegos">
                                <div class="card-body fs-5">
                                    <h5 class="card-title">${element.nombre}</h5>
                                    <p class="card-text">
                                    - Dificultad: ${element.dificultad}.<br>
                                    - Estado: ${element.estado}.<br>
                                    - Edad: ${element.edad}</p>

                                </div>
                                <button type="button" class="btn btn-secondary disabled">Jugar!</button>
                            </div>`
        marco.classList.add("col-12", "col-sm-6", "col-xl-3", "shadow", "p-3", "mb-5", "bg-body", "rounded")
        juegos.append(marco)
    });
}

const timer = () => {
    const demora = document.createElement("h3");
    demora.textContent = "La carga puede demorar unos segundos...";
    demoraContainer.append(demora);
    setTimeout(() => {
        llamarJuegos();
        demora.textContent = " "
    }, 2500);
}

verJuegos.addEventListener("click", () => {
    timer()
    verJuegos.remove()
})

