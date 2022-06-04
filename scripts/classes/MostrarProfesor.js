//Imprime un curso en el DOM
//Recibe un objeto de tipo Profesor

const elem = document.getElementById("usuarios")

export default function mostrarProfesor(profesor) {
    const hijo = document.createElement('div')
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${profesor.getApellido()}, ${profesor.getNombre()}</h3>
        <div  class="s-center">
            <span class="small">E-mail: ${profesor.getCorreo()}</span>  
        </div>
        <div class="s-center">
            Cursos dictados: <span class="small">${profesor.getCursoDictado()}</span>
        </div>
        <div class="s-center">
            Calificación general: <span class="small">${profesor.getCalificacion()}</span>
        </div>
    </div>
    `
    elem.appendChild(hijo)
}