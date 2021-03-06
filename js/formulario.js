//Variables
const inputNombre = document.querySelector("#name");
const inputFecha = document.querySelector("#fecha");
const btnEnviar = document.getElementById("btnEnviar");

let grupoTarjetas = ["π", "π§¦", "π", "π§€", "π¦Ί", "π₯Ύ", "π©³", "π"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

let dificultad1 = ["β€", "β€", "π", "π"];
let dificultad2 = ["π", "π", "β½", "β½", "π₯", "π₯", "π©","π©"];
let dificultad3 = ["π’", "π’", "πΈ", "πΈ", "β", "β", "π¬", "π¬", "β", "β", "π", "π"];

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
            title: `Tu cerebro dice Β‘Gracias ${nombre}!`,
            text: 'ΒΏDisfrutando del juego?',
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
            mensaje = `<p>Hola ${nombre}!! tienes ${edad} aΓ±os. MΓ­nimo 10 aΓ±os. Te fΓ‘ltan ${restante} aΓ±os para poder jugar</p>`;
            bienvenida.classList.add("bienvenida");
            bienvenida.innerHTML = mensaje;
            aprobado = false;
            aprobado && reparteTarjetas();
            document.querySelectorAll(".tarjeta").forEach(function (elemento) {
                elemento.addEventListener("click", descubrir);
            });
        } else if (edad >= 10 && edad < 50) {
            mensaje = `<p>Hola ${nombre}${feliz}, Bienvenido/a!! Tienes ${edad} aΓ±os.</p>`;
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
            mensaje = `<p>Hola ${nombre}${feliz}, Bienvenido/a!! Tienes ${edad} aΓ±os, Γ©sto te serΓ‘ de gran ayuda</p>`
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
            mensaje = `<p>Hola ${nombre}${feliz}, Bienvenido/a!! Tienes ${edad} aΓ±os, Me cuesta creerlo! Pero adelante</p>`
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
            noListo("Por favor llena el campo 'AΓ±o de nacimiento'");
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

