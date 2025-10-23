export class Proyectos{
    #nombre;
    #tipo;
    #duracion;
    #modalidad;
    #tecnologias;
    #categoria;
    #participantes;
    #descripcion;

    constructor(Nombre, Tipo, Duracion, Modalidad, Tecnologias, Categoria, Participantes, Descripcion){
        this.#nombre = Nombre;
        this.#tipo = Tipo;
        this.#duracion = Duracion;
        this.#modalidad = Modalidad;
        this.#tecnologias = Tecnologias;
        this.#categoria = Categoria;
        this.#participantes = Participantes;
        this.#descripcion = Descripcion;

    }
    get Nombre(){
        return this.#nombre;
    }
    get Tipo(){
        return this.#tipo;
    }
    get Duracion(){
        return this.#duracion;
    }
    get Modalidad(){
        return this.#modalidad;
    }
    get Tecnologias(){
        return this.#tecnologias;
    }
    get Categoria(){
        return this.#categoria;
    }
    get Participantes(){
        return this.#participantes
    }
    get Descripcion(){
        return this.#descripcion;
    }

    mostrar(){
        return {
            
        }

    }
}