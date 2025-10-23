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
    mostrar(){
        return{

        }
    }
}