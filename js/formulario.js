const formulario = document.getElementById("formu");
const year = new Date().getFullYear();

const listo = () => {
    Swal.fire({
        title: 'Excelente',
        icon: 'success',
        confirmButtonText: 'Empezemos'
    })
};
const noListo = () => {
    Swal.fire({
        title: 'Algo salio mal!',
        icon: 'error',
        confirmButtonText: 'Inscribirme de vuelta'
    })
};

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
            listo();
        } else if (edad >= 50 && edad <= 85) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años, ésto te será de gran ayuda</p>`
            listo();
        } else if (edad > 85 && edad < 105) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años, Me cuesta creerlo! Pero adelante</p>`
            listo();
        } else if (fecha == "") {
            mensaje = `Por Favor ${nombre} rellena el campo "Año de nacimiento"`;
            noListo();
        } else {
            mensaje = `<p>Hola ${nombre}, Ingresa una fecha creible</p>`;
            noListo()
        } 
    }
    bienvenida.classList.add("bienvenida");
    bienvenida.innerHTML = mensaje;

}

formulario.addEventListener("submit", recogeDatos);