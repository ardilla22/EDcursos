import Curso from "./classes/Cursos.js"
import Alumno from "./classes/Alumno.js"
import Profesor from "./classes/Profesor.js"
import mostrarCurso from "./classes/MostrarCurso.js"
import mostrarAlumno from "./classes/MostrarAlumno.js"
import mostrarProfesor from "./classes/MostrarProfesor.js"

const crearUsuario = document.getElementById("crearUsuario")
const crearCurso = document.getElementById("crearCurso")
const eleccionCrear = document.getElementById("eleccionCrear")
const bttf1 = document.getElementById("bttf1")
const bttf2 = document.getElementById("bttf2")
const formCursos = document.getElementById("formCursos")
const formUsuario = document.getElementById("formUsuario")
const calificacionProfesor = document.getElementById("calificacionProfesor")
const detectarProfesor = document.getElementById("idProfesor")
const detectarAlumno = document.getElementById("idAlumno")
const cursosDiv = document.getElementById("cursos")
const usuariosDiv = document.getElementById("usuarios")

formCursos.style.display ='none'
formUsuario.style.display ='none'

crearCurso.addEventListener("mousedown", e => {
    eleccionCrear.style.display = 'none'
    formCursos.style.display ='block'
    cursosDiv.style.display =''
    // console.log(crearCurso)
})
bttf1.addEventListener("mousedown", e => {
    eleccionCrear.style.display = ''
    formCursos.style.display ='none'
    cursosDiv.style.display ='none'
    // console.log(crearCurso)
})
crearUsuario.addEventListener("mousedown", e => {
    eleccionCrear.style.display = 'none'
    formUsuario.style.display ='block'
    usuariosDiv.style.display = ''
    // console.log(eleccionCrear)
})
bttf2.addEventListener("mousedown", e => {
    eleccionCrear.style.display = ''
    formUsuario.style.display ='none'
    usuariosDiv.style.display = 'none'
    // console.log(eleccionCrear)
})

formCursos.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
})

detectarProfesor.addEventListener("mousedown", e => {
    calificacionProfesor.disabled = false
})
detectarAlumno.addEventListener("mousedown", e => {
    calificacionProfesor.disabled = true
})

formUsuario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const opciones = target.querySelectorAll(".opcionCursos")[0]
    const cursosSeleccionados = opciones.selectedOptions    //Obtengo los cursos seleccionados
    // ciclo for para obtener el value de los cursos seleccionados y almacenarlos en un array
    var cursadas = [ ]
    for (var i = 0;i < cursosSeleccionados.length; i++) {
            cursadas.push(cursosSeleccionados[i].value)
        }
    console.log(cursadas)
    //Crear usuario Alumno o Profesor
    if (target.tipoUsuario.value === "Alumno") {
        const alumno = new Alumno(target.nombreUsuario.value,target.apellidoUsuario.value,target.correoUsuario.value,target.actividadUsuario.value,cursadas)
        mostrarAlumno(alumno)
    } else {
        const profesor = new Profesor(target.nombreUsuario.value,target.apellidoUsuario.value,target.correoUsuario.value,target.actividadUsuario.value,cursadas,target.calificacionProfesor.value)
        mostrarProfesor(profesor)
    }
})