//Variables
const inputNombre = document.querySelector("#name");
const inputFecha = document.querySelector("#fecha");
const btnEnviar = document.getElementById("btnEnviar");

let grupoTarjetas = ["👓", "🧦", "🎓", "🧤", "🦺", "🥾", "🩳", "👕"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

let dificultad1 = ["❤", "❤", "🎁", "🎁"];
let dificultad2 = ["😃", "😃", "⚽", "⚽", "🥊", "🥊", "🎩","🎩"];
let dificultad3 = ["📢", "📢", "🎸", "🎸", "☎", "☎", "🚬", "🚬", "✂", "✂", "🍔", "🍔"];

const [feliz] = dificultad2;

const formulario = document.getElementById("formu");
const year = new Date().getFullYear();

/* +++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++Funciones++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++++++++++++++++++ */

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

const gracias = (nombre) => {
    setTimeout(() => {
        Swal.fire({
            title: `Tu cerebro dice ¡Gracias ${nombre}!`,
            text: '¿Disfrutando del juego?',
            imageUrl: 'https://vovonilva.com.br/wp-content/uploads/2018/06/exercicios-memoria-5000x2500.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'CerebroEntrenando',
            confirmButtonText: 'Si, Continuar jugando <i class="fa fa-arrow-right"></i>',
        }) 
    }, 20000);
}

const recogeDatos = (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#name").value;
    let fecha = document.querySelector("#fecha").value;
    let edad = year - fecha;
    let restante = 10 - edad;
    let mensaje;
    let bienvenida = document.querySelector("#mensajeBienvenida");
    let aprobado;

    if (nombre == "") {
        inputNombre.classList.add("input2")
        noListo("Por favor llena el campo 'Ingrese su nombre'")
        setTimeout(() => {
            inputNombre.classList.remove("input2")
        }, 3000);
    } else {
        if (edad < 10) {
            mensaje = `<p>Hola ${nombre}!! tienes ${edad} años. Mínimo 10 años. Te fáltan ${restante} años para poder jugar</p>`;
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            aprobado = false;
            aprobado && reparteTarjetas();
            document.querySelectorAll(".tarjeta").forEach(function (elemento) {
                elemento.addEventListener("click", descubrir);
            });
        } else if (edad >= 10 && edad < 50) {
            mensaje = `<p>Hola ${nombre}${feliz}, Bienvenido/a!! Tienes ${edad} años.</p>`;
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            listo();
            aprobado = true;
            totalTarjetas.push(...dificultad3);
            aprobado && reparteTarjetas();
            document.querySelectorAll(".tarjeta").forEach(function (elemento) {
                elemento.addEventListener("click", descubrir);
            });
            btnEnviar.remove();
            gracias(nombre);
        } else if (edad >= 50 && edad <= 85) {
            mensaje = `<p>Hola ${nombre}${feliz}, Bienvenido/a!! Tienes ${edad} años, ésto te será de gran ayuda</p>`
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            listo();
            aprobado = true;
            totalTarjetas.push(...dificultad2);
            aprobado && reparteTarjetas();
            document.querySelectorAll(".tarjeta").forEach(function (elemento) {
                elemento.addEventListener("click", descubrir);
            });
            btnEnviar.remove();
            gracias(nombre);
        } else if (edad > 85 && edad < 105) {
            mensaje = `<p>Hola ${nombre}${feliz}, Bienvenido/a!! Tienes ${edad} años, Me cuesta creerlo! Pero adelante</p>`
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            listo();
            aprobado = true;
            totalTarjetas.push(...dificultad1);
            aprobado && reparteTarjetas();
            document.querySelectorAll(".tarjeta").forEach(function (elemento) {
                elemento.addEventListener("click", descubrir);
            });
            btnEnviar.remove();
            gracias(nombre);
        } else if (fecha == "") {
            inputFecha.classList.add("input2");
            noListo("Por favor llena el campo 'Año de nacimiento'");
            setTimeout(() => {
                inputFecha.classList.remove("input2")
            }, 3000);
        } else {
            inputFecha.classList.add("input2");
            noListo("Por favor ingresa fecha creible");
            setTimeout(() => {
                inputFecha.classList.remove("input2")
            }, 3000);
        } 
    }
}

formulario.addEventListener("submit", recogeDatos);
//const btnEnviar = document.getElementById("btnEnviar");
