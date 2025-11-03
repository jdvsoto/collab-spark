import { Recursos } from "./RecursosModel.js";

export class Fondos extends Recursos {
    #tipoFondo;
    #fondos;

    constructor({ nombre, descripcion, tipo, ubicacion, duracion, requisitos, tipoFondo, fondos }) {
        super({ nombre, descripcion, tipo, ubicacion, duracion, requisitos });
        this.#tipoFondo = tipoFondo;
        this.#fondos = fondos;
    }

    get tipoFondo() {
        return this.#tipoFondo;
    }

    get fondos() {
        return this.#fondos;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            tipoFondo: this.#tipoFondo,
            fondos: this.#fondos,
        };
    }
}