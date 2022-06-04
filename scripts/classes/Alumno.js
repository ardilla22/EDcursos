import Usuario from "./Usuario.js";

export default class Alumno extends Usuario {
    constructor(nombre,apellido,correo,activo,cursoTomado) {
        super(nombre,apellido,correo,activo),
        this.cursoTomado = cursoTomado
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
    getCursoTomado() {
        return this.cursoTomado
    }
}
