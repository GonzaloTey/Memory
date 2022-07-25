//Seccion especifica para guardar en el local Storage sugerencias usuario

//variables

const sugerencias = []; 
const listadoSugerencias = [];

const inputSugerencias = document.getElementById("sugerencias");

const ulSugerencias = document.getElementById("sugerenciasUl");

const enviar = document.getElementById("enviar");
const borrar = document.getElementById("borrar");
const ver = document.getElementById("ver");


//constantes para mejorar el alert con sweeetAlert

const listado = (suge) => {
    Swal.fire({
        title: 'Sugerencia enviada',
        text: suge,
        icon: 'success'
    })
};
const verListado = (sug) => {
    Swal.fire({
        title: 'Tus sugerencias Enviadas',
        icon: 'info',
        text: sug
    })
};
const verListado2 = () => {
    Swal.fire({
        title: 'No enviaste sugerencias',
        icon: 'warning'
    })
};

//funciones y eventos

enviar.addEventListener("click", (e) => {
    e.preventDefault();
    let suge = inputSugerencias.value;
    
    //Aplicacion de operador Ternario

    (suge !== "" && suge !== " ") ?
    (sugerencias.push(inputSugerencias.value), borrar.click(), inputSugerencias.focus(), localStorage.setItem("sugerencias", JSON.stringify(sugerencias)), listado(suge))
    :
    (verListado2())
});

borrar.addEventListener("click", (e) => {
    e.preventDefault()
    inputSugerencias.value = ""
});

ver.addEventListener("click", (e) => {
    e.preventDefault()
    const mostrar = JSON.parse(localStorage.getItem("sugerencias")) || [];
    (mostrar === "" || mostrar === " ") ? verListado2() : verListado(mostrar)
});