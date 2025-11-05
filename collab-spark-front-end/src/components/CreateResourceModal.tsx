import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createFondo, createIncubadora, createPrograma } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface CreateResourceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onResourceCreated: () => void;
}

const CreateResourceModal = ({ open, onOpenChange, onResourceCreated }: CreateResourceModalProps) => {
  const [resourceType, setResourceType] = useState<'fondo' | 'incubadora' | 'programa'>('incubadora');
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    ubicacion: "",
    duracion: "",
    requisitos: "",
    // Campos específicos
    tipoFondo: "",
    fondos: "",
    tipoIncubadora: "",
    inversion: "",
    tipoPrograma: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const baseData = {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        tipo: formData.tipo,
        ubicacion: formData.ubicacion,
        duracion: formData.duracion,
        requisitos: formData.requisitos,
      };

      if (resourceType === 'fondo') {
        await createFondo({
          ...baseData,
          tipoFondo: formData.tipoFondo,
          fondos: formData.fondos,
        });
      } else if (resourceType === 'incubadora') {
        await createIncubadora({
          ...baseData,
          tipoIncubadora: formData.tipoIncubadora,
          inversion: formData.inversion,
        });
      } else if (resourceType === 'programa') {
        await createPrograma({
          ...baseData,
          tipoPrograma: formData.tipoPrograma,
          fondos: formData.fondos,
        });
      }

      toast({
        title: "¡Éxito!",
        description: "El recurso ha sido creado correctamente",
      });

      // Resetear formulario
      setFormData({
        nombre: "",
        descripcion: "",
        tipo: "",
        ubicacion: "",
        duracion: "",
        requisitos: "",
        tipoFondo: "",
        fondos: "",
        tipoIncubadora: "",
        inversion: "",
        tipoPrograma: "",
      });

      onResourceCreated();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "No se pudo crear el recurso",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Crear nuevo recurso</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo de recurso */}
          <div className="space-y-2">
            <Label htmlFor="resourceType">Tipo de recurso *</Label>
            <Select
              value={resourceType}
              onValueChange={(value: 'fondo' | 'incubadora' | 'programa') => setResourceType(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="incubadora">Incubadora</SelectItem>
                <SelectItem value="fondo">Fondo</SelectItem>
                <SelectItem value="programa">Programa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Campos comunes */}
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre *</Label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              placeholder="Nombre del recurso"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción *</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => handleChange("descripcion", e.target.value)}
              placeholder="Describe el recurso..."
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo *</Label>
              <Input
                id="tipo"
                value={formData.tipo}
                onChange={(e) => handleChange("tipo", e.target.value)}
                placeholder="Ej: Público, Privado"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubicacion">Ubicación *</Label>
              <Input
                id="ubicacion"
                value={formData.ubicacion}
                onChange={(e) => handleChange("ubicacion", e.target.value)}
                placeholder="Ej: Madrid, España"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duracion">Duración *</Label>
              <Input
                id="duracion"
                value={formData.duracion}
                onChange={(e) => handleChange("duracion", e.target.value)}
                placeholder="Ej: 6 meses"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requisitos">Requisitos *</Label>
              <Input
                id="requisitos"
                value={formData.requisitos}
                onChange={(e) => handleChange("requisitos", e.target.value)}
                placeholder="Requisitos necesarios"
                required
              />
            </div>
          </div>

          {/* Campos específicos por tipo */}
          {resourceType === 'fondo' && (
            <div className="grid grid-cols-2 gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="tipoFondo">Tipo de Fondo *</Label>
                <Input
                  id="tipoFondo"
                  value={formData.tipoFondo}
                  onChange={(e) => handleChange("tipoFondo", e.target.value)}
                  placeholder="Ej: Semilla, Serie A"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fondos">Fondos disponibles *</Label>
                <Input
                  id="fondos"
                  value={formData.fondos}
                  onChange={(e) => handleChange("fondos", e.target.value)}
                  placeholder="Ej: Hasta 50k€"
                  required
                />
              </div>
            </div>
          )}

          {resourceType === 'incubadora' && (
            <div className="grid grid-cols-2 gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="tipoIncubadora">Tipo de Incubadora *</Label>
                <Input
                  id="tipoIncubadora"
                  value={formData.tipoIncubadora}
                  onChange={(e) => handleChange("tipoIncubadora", e.target.value)}
                  placeholder="Ej: Tecnológica, Social"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inversion">Inversión *</Label>
                <Input
                  id="inversion"
                  value={formData.inversion}
                  onChange={(e) => handleChange("inversion", e.target.value)}
                  placeholder="Ej: Hasta 25k€"
                  required
                />
              </div>
            </div>
          )}

          {resourceType === 'programa' && (
            <div className="grid grid-cols-2 gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="tipoPrograma">Tipo de Programa *</Label>
                <Input
                  id="tipoPrograma"
                  value={formData.tipoPrograma}
                  onChange={(e) => handleChange("tipoPrograma", e.target.value)}
                  placeholder="Ej: Aceleración, Mentoría"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fondosPrograma">Fondos *</Label>
                <Input
                  id="fondosPrograma"
                  value={formData.fondos}
                  onChange={(e) => handleChange("fondos", e.target.value)}
                  placeholder="Ej: Hasta 30k€"
                  required
                />
              </div>
            </div>
          )}

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creando..." : "Crear recurso"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateResourceModal;
