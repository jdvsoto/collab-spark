import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, ArrowRight, Clock, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteMicroproyecto, deleteProyectoEscalable } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface ProjectCardProps {
  nombre: string;
  tipo: string;
  duracion: string;
  modalidad: string;
  tecnologias: string[];
  categoria: string;
  participantes: number;
  descripcion: string;
  isLiked?: boolean;
  featured?: boolean;
  onDelete?: () => void;
  projectType?: 'micro' | 'escalar'; // Tipo de proyecto para saber qué API usar
}

const ProjectCard = ({
  nombre,
  tipo,
  duracion,
  modalidad,
  tecnologias,
  categoria,
  participantes,
  descripcion,
  isLiked = false,
  featured = false,
  onDelete,
  projectType = 'micro' // Por defecto es microproyecto
}: ProjectCardProps) => {
  const handleTrashClick = async () => {
    try {
      // Usar la función correcta según el tipo de proyecto
      if (projectType === 'micro') {
        await deleteMicroproyecto(nombre);
      } else {
        await deleteProyectoEscalable(nombre);
      }
      
      toast({
        title: "Proyecto eliminado",
        description: `El proyecto "${nombre}" ha sido eliminado correctamente.`,
      });
      // Llamar al callback para actualizar la lista en el componente padre
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
      toast({
        title: "Error",
        description: "No se pudo eliminar el proyecto. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  }
  return (
    <div className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border ${
      featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5' : 'border-border/50'
    } hover:border-primary/20`}>
      
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-hero text-white shadow-glow">
            Destacado
          </Badge>
        </div>
      )}

      {/* Trash button */}
      <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
        <Trash className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'}`} onClick={handleTrashClick}/>
      </button>

      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">{nombre[0]}</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        {/* Project type badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-background/80 backdrop-blur-sm">
            {tipo}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <Badge variant="secondary" className="mb-3">
          {categoria}
        </Badge>

        {/* Title & Description */}
        <Link to={`/proyecto/${encodeURIComponent(nombre)}`}>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors cursor-pointer">
            {nombre}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {descripcion}
        </p>

        {/* Tags (Tecnologías) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {tecnologias.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{tecnologias.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{participantes} {participantes === 1 ? 'participante' : 'participantes'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duracion}</span>
          </div>
        </div>

        {/* Modalidad badge */}
        <div className="mb-4">
          <Badge variant="outline" className="text-xs">
            {modalidad}
          </Badge>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Link to={`/proyecto/${encodeURIComponent(nombre)}`} className="flex-1">
            <Button className="w-full group/btn">
              Ver proyecto
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Users className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;