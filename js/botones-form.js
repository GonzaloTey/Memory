//Seccion especifica para guardar en el local Storage sugerencias usuario

//variables

const sugerencias = []; //Este va a ser mi array de elementos
const listadoSugerencias = [] //Mi array de objetos

const inputSugerencias = document.getElementById("sugerencias");

const ulSugerencias = document.getElementById("sugerenciasUl");

const enviar = document.getElementById("enviar");
const borrar = document.getElementById("borrar");
const ver = document.getElementById("ver");


//constante para mejorar el alert con sweeetAlert

const listado = (suge) => {
    Swal.fire({
        title: 'Enviado',
        text: suge,
        icon: 'success'
    })
}
const verListado = (sug) => {
    Swal.fire({
        title: 'Tus sugerencias Enviadas',
        icon: 'info',
        text: sug
    })
}
const verListado2 = () => {
    Swal.fire({
        title: 'No enviaste sugerencias',
        icon: 'warning'
    })
}

//funciones y eventos
/* ACLARACION: Se supone que al hacer click en enviar mandamos las sugerencias a mi backend pero alno tenerlo pongo el preventDefault ya que sino no podria ver el proceso */

enviar.addEventListener("click", (e) => {
    e.preventDefault();
    let suge = inputSugerencias.value;
    sugerencias.push(inputSugerencias.value);
    borrar.click(); //Excelente Truco
    inputSugerencias.focus(); // Excelente truco
    localStorage.setItem("sugerencias", JSON.stringify(sugerencias)) //Convierto array a string con el objeto JSON y su metodo stringify
    if (suge !== "") {
        listado(suge);
    } else verListado2()
});

borrar.addEventListener("click", (e) => {
    e.preventDefault()
    inputSugerencias.value = " "
});

ver.addEventListener("click", (e) => {
    e.preventDefault()
    const mostrar = JSON.parse(localStorage.getItem("sugerencias"))
    let sugerencia = "";
    for (muestra of mostrar) {
            sugerencia += `<li>${muestra}</>`
    }
    ulSugerencias.innerHTML = sugerencia;
    verListado(mostrar);
});