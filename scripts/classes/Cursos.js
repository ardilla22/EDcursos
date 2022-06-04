export default class Curso {
    constructor(nombre, poster, clases) {
        this.nombre = nombre
        this.poster = poster
        this.clases = clases
        this.inscriptos = []
    }

    getNombre() {
        return this.nombre
    }
    getPoster() {
        return this.poster
    }
    getClases() {
        return this.clases
    }
    getInscriptos() {
        return this.inscriptos
    }

    setNombre(nombre) {
        this.nombre = nombre
    }
    setPoster(poster) {
        this.poster = poster
    }
    setClases(clases) {
        this.clases = clases
    }
    setInscriptos(inscriptos) {
        this.inscriptos = inscriptos
    }
}