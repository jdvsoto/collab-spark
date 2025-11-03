export class Microproyectos extends Proyectos{
    #objetivo

     constructor(Nombre, Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion, objetivo) {
        super(Nombre, "Microproyecto", Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion);
        this.#objetivo = objetivo;
    }
    get objetivo(){
        return this.#objetivo;
    }
    
    mostrar(){
        return {
            
        }
    }

}