import { Proyectos } from "./ProyectosModel.js";
export class Microproyectos extends Proyectos{
    #objetivo

     constructor(Nombre, Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion, objetivo) {
        super(Nombre, "Microproyecto", Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion);
        this.#objetivo = objetivo;
    }
    get objetivo(){
        return this.#objetivo;
    }
    set objetivo(value) { 
        this.#objetivo = value; 
    }
    
    toJSON() {
        return {
            ...super.toJSON(),
            objetivo: this.#objetivo
        };
    }
}

export const microproyectos = [];