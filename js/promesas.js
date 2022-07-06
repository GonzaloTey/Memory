const juegos = document.getElementById("juegosNuevos");
const verJuegos = document.getElementById("verJuegos");

const llamarJuegos = async () => {
    const response = await fetch('/datos.json');
    const data = await response.json();

    data.forEach(element => {
        const marco = document.createElement("div")

        marco.innerHTML = `<div class="d-flex justify-content-center row row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3 g-3">
                                <div class="col">
                                    <div class="card h-100">
                                        <img src="../assets/logo2.png" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${element.nombre}</h5>
                                            <p class="card-text">
                                            - Dificultad: ${element.dificultad}.<br>
                                            - Estado: ${element.estado}.<br>
                                            - Edad: ${element.edad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>` 
            
        juegos.append(marco)
    });
}

const timer = () => {
    setTimeout(() => {
        llamarJuegos()
    }, 2000);
}

verJuegos.addEventListener("click", () => {
    timer()
    verJuegos.remove()
})

