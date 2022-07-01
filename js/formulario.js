const formulario = document.getElementById("formu");
const year = new Date().getFullYear();

const listo = () => {
    Swal.fire({
        title: 'Excelente',
        icon: 'success',
        confirmButtonText: 'Empecemos'
    })
};
const noListo = (argumento) => {
    Swal.fire({
        title: 'Algo salio mal!',
        icon: 'error',
        text: argumento,
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
        noListo("Por favor llena el campo 'Ingrese su nombre'")
    } else {
        if (edad < 10) {
            mensaje = `<p>Hola ${nombre}!! tienes ${edad} años. Mínimo 10 años. Te fáltan ${restante} años para poder jugar</p>`;
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
        } else if (edad >= 10 && edad < 50) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años.</p>`;
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            listo();
        } else if (edad >= 50 && edad <= 85) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años, ésto te será de gran ayuda</p>`
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            listo();
        } else if (edad > 85 && edad < 105) {
            mensaje = `<p>Hola ${nombre}, Bienvenido/a!! Tienes ${edad} años, Me cuesta creerlo! Pero adelante</p>`
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            listo();
        } else if (fecha == "") {
            noListo("Por favor llena el campo 'Año de nacimiento'");
        } else {
            noListo("Por favor ingresa fecha creible")
        } 
    }
}

formulario.addEventListener("submit", recogeDatos);