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

    set Nombre(value) { this.#nombre = value; }
    set Tipo(value) { this.#tipo = value; }
    set Duracion(value) { this.#duracion = value; }
    set Modalidad(value) { this.#modalidad = value; }
    set Tecnologias(value) { this.#tecnologias = value; }
    set Categoria(value) { this.#categoria = value; }
    set Participantes(value) { this.#participantes = value; }
    set Descripcion(value) { this.#descripcion = value; }

    toJSON(){
        return {
            Nombre: this.#nombre,
            Tipo: this.#tipo,
            Duracion: this.#duracion,
            Modalidad: this.#modalidad,
            Tecnologias: this.#tecnologias,
            Categoria: this.#categoria,
            Participantes: this.#participantes,
            Descripcion: this.#descripcion
        };
    }
}
export const proyectos = [];