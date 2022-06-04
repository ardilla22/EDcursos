//Imprime un curso en el DOM
//Recibe un objeto de tipo Alumno

const elem = document.getElementById("usuarios")

export default function mostrarAlumno(alumno) {
    const hijo = document.createElement('div')
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${alumno.getApellido()}, ${alumno.getNombre()}</h3>
        <div  class="s-center">
            <span class="small">E-mail: ${alumno.getCorreo()}</span>  
        </div>
        <div class="s-center">
            <span class="small">Cursos tomados: ${alumno.getCursoTomado()}</span>
        </div>
    </div>
    `
    elem.appendChild(hijo)
}