import { Recursos } from "./RecursosModel.js";


export class Incubadora extends Recursos {
    #tipoIncubadora;
    #inversion;

    constructor({ nombre, descripcion, tipo, ubicacion, duracion, requisitos, tipoIncubadora, inversion }) {
        super({ nombre, descripcion, tipo, ubicacion, duracion, requisitos });
        this.#tipoIncubadora = tipoIncubadora;
        this.#inversion = inversion;
    }

    get tipoIncubadora() {
        return this.#tipoIncubadora;
    }

    get inversion() {
        return this.#inversion;
    }   

    toJSON() {
        return {
            ...super.toJSON(),
            tipoIncubadora: this.#tipoIncubadora,
            inversion: this.#inversion,
        };
    }
    
}