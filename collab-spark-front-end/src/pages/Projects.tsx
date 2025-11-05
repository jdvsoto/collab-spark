import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Sparkles, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import CreateProjectModal from "@/components/CreateProjectModal";
import { getMicroproyectos, getProyectosEscalables } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'micro' | 'escalar'>('micro');
  const [microProjects, setMicroProjects] = useState<any[]>([]);
  const [scaleProjects, setScaleProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Social", "Productividad", "Sostenibilidad", "Educación", "Negocios", "Salud", "Tecnología"];

  const loadProjects = async () => {
    setLoading(true);
    try {
      const [micro, escalables] = await Promise.all([
        getMicroproyectos(),
        getProyectosEscalables()
      ]);
      setMicroProjects(micro || []);
      setScaleProjects(escalables || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "No se pudieron cargar los proyectos",
        variant: "destructive",
      });
      setMicroProjects([]);
      setScaleProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleProjectCreated = () => {
    loadProjects();
    toast({
      title: "¡Éxito!",
      description: "El proyecto ha sido creado correctamente",
    });
  };

  const currentProjects = activeTab === 'micro' ? microProjects : scaleProjects;
  
  const filteredProjects = currentProjects.filter(project => {
    // Filtro por búsqueda
    const matchesSearch = !searchQuery || 
      project.Nombre?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.Descripcion?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.Categoria?.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtro por categoría
    const matchesCategory = selectedCategory === "Todos" || 
      project.Categoria?.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Encuentra tu próximo 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde proyectos simples para practicar hasta ideas que pueden cambiar el mundo. 
              Aquí hay espacio para todos.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 flex">
              <Button
                variant={activeTab === 'micro' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('micro')}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Microproyectos
              </Button>
              <Button
                variant={activeTab === 'escalar' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('escalar')}
                className="flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Para escalar
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Cargando proyectos...</p>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                nombre={project.Nombre}
                tipo={project.Tipo}
                duracion={project.Duracion}
                modalidad={project.Modalidad}
                tecnologias={Array.isArray(project.Tecnologias) ? project.Tecnologias : []}
                categoria={project.Categoria}
                participantes={project.Participantes}
                descripcion={project.Descripcion}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery ? "No se encontraron proyectos con ese criterio" : "No hay proyectos disponibles"}
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes una idea para compartir?
            </h3>
            <p className="text-muted-foreground mb-6">
              Compártela con nuestra comunidad y encuentra colaboradores que quieren aprender y crecer contigo.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="group"
              onClick={() => setIsModalOpen(true)}
            >
              Crear mi proyecto
              <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onProjectCreated={handleProjectCreated}
      />
    </div>
  );
};

export default Projects; 