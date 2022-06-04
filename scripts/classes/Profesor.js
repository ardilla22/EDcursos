import Usuario from "./Usuario.js"

export default class Profesor extends Usuario {
    constructor(nombre,apellido,correo,activo,cursoDictado,calificacion) {
        super(nombre,apellido,correo,activo),
        this.cursoDictado = cursoDictado,
        this.calificacion = calificacion
    }
    
    getNombre() {
        return this.nombre
    }

    getApellido() {
        return this.apellido
    }
    
    getCorreo() {
        return this.correo
    }

    getActivo() {
        return this.activo
    }

    getCursoDictado() {
        return this.cursoDictado
    }

    getCalificacion() {
        return this.calificacion
    }
}