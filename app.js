
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellidos = document.querySelector("#apellidos").value
    const Email = document.querySelector("#Email").value
    const clave = document.querySelector("#clave").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `tus datos ${nombre} apellido${apellidos} Email ${Email} clave${clave} `
}

//numero entre 1 y 6
let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)