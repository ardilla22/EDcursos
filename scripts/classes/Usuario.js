export default class Usuario {
    constructor(nombre, apellido, correo, activo) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo,
        this.activo = activo
    }

    presentarse() {
        return `Hola, me llamo ${this.nombre} y mi correo es: ${this.correo}`
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

    setNombre(nuevoNombre) {
        this.apellido = nuevoNombre
    }
    setApellido(nuevoApellido) {
        this.apellido = nuevoApellido
    }
}