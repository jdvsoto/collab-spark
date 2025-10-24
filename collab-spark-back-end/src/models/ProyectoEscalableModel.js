import { Proyectos } from "./ProyectosModel.js";
export class ProyectoEscalable extends Proyectos{
    #etapas
    #presupuesto

    constructor(Nombre, Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion, Etapas, Presupuesto){
        super(Nombre, "Escalable", Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion)
        this.#etapas = Etapas;
        this.#presupuesto = Presupuesto;
    }
    get Etapas(){
        return this.#etapas;
    }
    get Presupuesto(){
        return this.#presupuesto;
    }

    set Etapas(value) { this.#etapas = value; }
    set Presupuesto(value) { this.#presupuesto = value; }
    

    toJSON(){
        return {
            ...super.toJSON(),
            Etapas: this.#etapas,
            Presupuesto: this.#presupuesto
        };
    }
}
export const proyectosEscalables = [];