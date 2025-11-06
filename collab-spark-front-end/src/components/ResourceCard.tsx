import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight, Bookmark, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteIncubadora, deleteFondo, deletePrograma } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface ResourceCardProps {
  nombre: string;
  tipo: string;
  descripcion: string;
  ubicacion: string;
  duracion: string;
  requisitos: string[];
  // Campos específicos según el tipo
  tipoFondo?: string;
  fondos?: string;
  tipoIncubadora?: string;
  inversion?: string;
  tipoPrograma?: string;
  onDelete?: () => void;
  resourceType?: "incubadoras" | "fondos" | "programas"; // Tipo de recurso para saber qué API usar
}

const ResourceCard = ({
  nombre,
  tipo,
  descripcion,
  ubicacion,
  duracion,
  requisitos,
  tipoFondo,
  fondos,
  tipoIncubadora,
  inversion,
  tipoPrograma,
  onDelete,
  resourceType = "incubadoras", // Por defecto es incubadora
}: ResourceCardProps) => {
  const handleTrashClick = async () => {
    try {
      // Usar la función correcta según el tipo de recurso
      if (resourceType === "incubadoras") {
        await deleteIncubadora(nombre);
      } else if (resourceType === "fondos") {
        await deleteFondo(nombre);
      } else if (resourceType === "programas") {
        await deletePrograma(nombre);
      }

      toast({
        title: "Recurso eliminado",
        description: `El recurso "${nombre}" ha sido eliminado correctamente.`,
      });
      // Llamar al callback para actualizar la lista en el componente padre
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error("Error al eliminar el recurso:", error);
      toast({
        title: "Error",
        description: "No se pudo eliminar el recurso. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  // Determinar el badge de financiamiento/inversión
  const getFundingBadge = () => {
    if (fondos) return fondos;
    if (inversion) return inversion;
    return "Consultar";
  };

  // Determinar el tipo específico
  const getSpecificType = () => {
    if (tipoFondo) return tipoFondo;
    if (tipoIncubadora) return tipoIncubadora;
    if (tipoPrograma) return tipoPrograma;
    return tipo;
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="secondary" className="text-xs">
            {getSpecificType()}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {getFundingBadge()}
          </Badge>
          {/* Trash button */}
          <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
            <Trash
              className="w-4 h-4 text-foreground hover:text-red-500 transition-colors"
              onClick={handleTrashClick}
            />
          </button>
        </div>

        {/* Title */}
        <Link to={`/recurso/${encodeURIComponent(nombre)}`}>
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
            {nombre}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {descripcion}
        </p>

        {/* Location & Duration */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="line-clamp-1">{ubicacion}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span>{duracion}</span>
          </div>
        </div>

        {/* Requirements */}
        {requisitos && requisitos.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-3 mb-4">
            <p className="text-xs text-muted-foreground mb-1">
              Requisitos principales:
            </p>
            <p className="text-sm font-medium text-foreground line-clamp-2">
              {Array.isArray(requisitos)
                ? requisitos.slice(0, 2).join(", ")
                : requisitos}
              {Array.isArray(requisitos) && requisitos.length > 2 && "..."}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-6 pt-0 flex gap-2">
        <Link to={`/recurso/${encodeURIComponent(nombre)}`} className="flex-1">
          <Button className="w-full group/btn">
            Ver detalles
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Button variant="outline" size="icon">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
