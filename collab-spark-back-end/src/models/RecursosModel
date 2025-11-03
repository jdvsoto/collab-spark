export class Recursos {
    #nombre;
    #descripcion;
    #tipo;
    #ubicacion;
    #duracion;
    #requisitos;

    constructor({ nombre, descripcion, tipo, ubicacion, duracion, requisitos }) {
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#tipo = tipo;
        this.#ubicacion = ubicacion;
        this.#duracion = duracion;
        this.#requisitos = requisitos;
    }

    get nombre() {
        return this.#nombre;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get tipo() {
        return this.#tipo;
    }

    get ubicacion() {
        return this.#ubicacion;
    } 

    get duracion() {
        return this.#duracion;
    }

    get requisitos() {
        return this.#requisitos;
    }

    toJSON() {
        return {
            nombre: this.#nombre,
            descripcion: this.#descripcion,
            tipo: this.#tipo,
            ubicacion: this.#ubicacion,
            duracion: this.#duracion,
            requisitos: this.#requisitos,
        };
    }
}