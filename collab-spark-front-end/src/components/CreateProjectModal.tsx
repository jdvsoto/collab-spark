import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createMicroproyecto, createProyectoEscalable } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface CreateProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProjectCreated: () => void;
}

const CreateProjectModal = ({ open, onOpenChange, onProjectCreated }: CreateProjectModalProps) => {
  const [projectType, setProjectType] = useState<"micro" | "escalable">("micro");
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    Nombre: "",
    Duracion: "",
    Modalidad: "",
    Tecnologias: "",
    Categoria: "",
    Participantes: "",
    Descripcion: "",
    // Campos específicos
    objetivo: "", // Para microproyectos
    Etapas: "", // Para proyectos escalables
    Presupuesto: "" // Para proyectos escalables
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const baseData = {
        Nombre: formData.Nombre,
        Duracion: formData.Duracion,
        Modalidad: formData.Modalidad,
        Tecnologias: formData.Tecnologias.split(",").map(t => t.trim()),
        Categoria: formData.Categoria,
        Participantes: parseInt(formData.Participantes) || 0,
        Descripcion: formData.Descripcion,
      };

      if (projectType === "micro") {
        await createMicroproyecto({
          ...baseData,
          objetivo: formData.objetivo
        });
        toast({
          title: "¡Microproyecto creado!",
          description: "Tu microproyecto ha sido creado exitosamente.",
        });
      } else {
        await createProyectoEscalable({
          ...baseData,
          Etapas: formData.Etapas.split(",").map(e => e.trim()),
          Presupuesto: formData.Presupuesto
        });
        toast({
          title: "¡Proyecto escalable creado!",
          description: "Tu proyecto escalable ha sido creado exitosamente.",
        });
      }

      // Reset form
      setFormData({
        Nombre: "",
        Duracion: "",
        Modalidad: "",
        Tecnologias: "",
        Categoria: "",
        Participantes: "",
        Descripcion: "",
        objetivo: "",
        Etapas: "",
        Presupuesto: ""
      });

      onProjectCreated();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "No se pudo crear el proyecto",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Crear nuevo proyecto</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo de proyecto */}
          <div className="space-y-2">
            <Label>Tipo de proyecto</Label>
            <Select value={projectType} onValueChange={(value: "micro" | "escalable") => setProjectType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="micro">Microproyecto</SelectItem>
                <SelectItem value="escalable">Proyecto Escalable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Campos comunes */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre del proyecto *</Label>
              <Input
                id="nombre"
                required
                value={formData.Nombre}
                onChange={(e) => setFormData({ ...formData, Nombre: e.target.value })}
                placeholder="Mi proyecto increíble"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duracion">Duración *</Label>
              <Input
                id="duracion"
                required
                value={formData.Duracion}
                onChange={(e) => setFormData({ ...formData, Duracion: e.target.value })}
                placeholder="3 meses"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modalidad">Modalidad *</Label>
              <Select value={formData.Modalidad} onValueChange={(value) => setFormData({ ...formData, Modalidad: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona modalidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Remoto">Remoto</SelectItem>
                  <SelectItem value="Presencial">Presencial</SelectItem>
                  <SelectItem value="Híbrido">Híbrido</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoría *</Label>
              <Select value={formData.Categoria} onValueChange={(value) => setFormData({ ...formData, Categoria: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Social">Social</SelectItem>
                  <SelectItem value="Productividad">Productividad</SelectItem>
                  <SelectItem value="Sostenibilidad">Sostenibilidad</SelectItem>
                  <SelectItem value="Educación">Educación</SelectItem>
                  <SelectItem value="Negocios">Negocios</SelectItem>
                  <SelectItem value="Salud">Salud</SelectItem>
                  <SelectItem value="Tecnología">Tecnología</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="participantes">Número de participantes *</Label>
              <Input
                id="participantes"
                type="number"
                required
                min="1"
                value={formData.Participantes}
                onChange={(e) => setFormData({ ...formData, Participantes: e.target.value })}
                placeholder="5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tecnologias">Tecnologías (separadas por coma) *</Label>
              <Input
                id="tecnologias"
                required
                value={formData.Tecnologias}
                onChange={(e) => setFormData({ ...formData, Tecnologias: e.target.value })}
                placeholder="React, Node.js, MongoDB"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción *</Label>
            <Textarea
              id="descripcion"
              required
              value={formData.Descripcion}
              onChange={(e) => setFormData({ ...formData, Descripcion: e.target.value })}
              placeholder="Describe tu proyecto..."
              rows={4}
            />
          </div>

          {/* Campos específicos por tipo */}
          {projectType === "micro" ? (
            <div className="space-y-2">
              <Label htmlFor="objetivo">Objetivo *</Label>
              <Textarea
                id="objetivo"
                required
                value={formData.objetivo}
                onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                placeholder="¿Cuál es el objetivo principal de este microproyecto?"
                rows={3}
              />
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="etapas">Etapas (separadas por coma) *</Label>
                <Textarea
                  id="etapas"
                  required
                  value={formData.Etapas}
                  onChange={(e) => setFormData({ ...formData, Etapas: e.target.value })}
                  placeholder="Investigación, Desarrollo, Testing, Lanzamiento"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="presupuesto">Presupuesto *</Label>
                <Input
                  id="presupuesto"
                  required
                  value={formData.Presupuesto}
                  onChange={(e) => setFormData({ ...formData, Presupuesto: e.target.value })}
                  placeholder="$10,000 USD"
                />
              </div>
            </>
          )}

          {/* Botones */}
          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creando..." : "Crear proyecto"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;
