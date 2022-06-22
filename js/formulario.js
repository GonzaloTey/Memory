const formulario = document.getElementById("formu");
const year = new Date().getFullYear();


const recogeDatos = (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#name").value;
    let fecha = document.querySelector("#fecha").value;
    let edad = year - fecha;
    let restante = 10 - edad;
    let mensaje;
    let bienvenida = document.querySelector("#mensajeBienvenida");

    if (nombre == "") {
        mensaje = 'Por Favor rellena el campo "TU NOMBRE"'
    } else {
        if (edad < 10) {
            mensaje = `<p>Hola ${nombre}!!, tienes ${edad} años. Mínimo 10 años. Te fáltan ${restante} años</p>`;
        } else if (edad >= 10 && edad < 50) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años.</p>`;
        } else if (edad >= 50 && edad <= 85) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años, ésto te será de gran ayuda</p>`
        } else if (edad > 85 && edad < 105) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años, Me cuesta creerlo! Pero adelante</p>`
        } else if (fecha == "") {
            mensaje = `Por Favor ${nombre} rellena el campo "Año de nacimiento"`;
        } else mensaje = `<p>Hola ${nombre}, Ingresa una fecha creible</p>`
    }
    bienvenida.classList.add("bienvenida");
    bienvenida.innerHTML = mensaje;


    //Local storage - Usuario participante
    if (nombre != " ") {
        const saludo = document.getElementById("saludo");
        const participante = `${nombre}`;
        localStorage.setItem("Usuario", participante);
        let nombreParticipante = localStorage.getItem("Usuario");
        saludo.innerHTML = `Usuario Registrado: ${nombreParticipante}`

    }
}

formulario.addEventListener("submit", recogeDatos);