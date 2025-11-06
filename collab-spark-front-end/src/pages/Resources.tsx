import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, Building, DollarSign, Target, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourceCard from "@/components/ResourceCard";
import CreateResourceModal from "@/components/CreateResourceModal";
import { getFondos, getIncubadoras, getProgramas } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'incubadoras' | 'fondos' | 'programas'>('incubadoras');
  const [incubadoras, setIncubadoras] = useState<any[]>([]);
  const [fondos, setFondos] = useState<any[]>([]);
  const [programas, setProgramas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Tecnología", "Social", "Sostenibilidad", "Educación", "Fintech", "Salud"];

  const loadResources = async () => {
    setLoading(true);
    try {
      const [incubadorasData, fondosData, programasData] = await Promise.all([
        getIncubadoras(),
        getFondos(),
        getProgramas()
      ]);
      setIncubadoras(incubadorasData || []);
      setFondos(fondosData || []);
      setProgramas(programasData || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "No se pudieron cargar los recursos",
        variant: "destructive",
      });
      setIncubadoras([]);
      setFondos([]);
      setProgramas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResources();
  }, []);

  const handleResourceCreated = () => {
    loadResources();
    toast({
      title: "¡Éxito!",
      description: "El recurso ha sido creado correctamente",
    });
  };

  const getResources = () => {
    switch (activeTab) {
      case 'incubadoras':
        return incubadoras;
      case 'fondos':
        return fondos;
      case 'programas':
        return programas;
      default:
        return incubadoras;
    }
  };

  const currentResources = getResources();

  const filteredResources = currentResources.filter(resource => {
    // Filtro por búsqueda
    const matchesSearch = !searchQuery ||
      resource.nombre?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.descripcion?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.ubicacion?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tipo?.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtro por categoría (basado en tipo o descripción)
    const matchesCategory = selectedCategory === "Todos" ||
      resource.tipo?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      resource.descripcion?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      resource.tipoFondo?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      resource.tipoIncubadora?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      resource.tipoPrograma?.toLowerCase().includes(selectedCategory.toLowerCase());
    
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
              Recursos para hacer crecer tu 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Encuentra el apoyo que necesitas: desde programas para empezar hasta 
              inversión para escalar. Todo adaptado a tu etapa y necesidades.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 flex">
              <Button
                variant={activeTab === 'incubadoras' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('incubadoras')}
                className="flex items-center gap-2"
              >
                <Building className="w-4 h-4" />
                Incubadoras
              </Button>
              <Button
                variant={activeTab === 'fondos' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('fondos')}
                className="flex items-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                Fondos
              </Button>
              <Button
                variant={activeTab === 'programas' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('programas')}
                className="flex items-center gap-2"
              >
                <Target className="w-4 h-4" />
                Programas
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar recursos..."
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

      {/* Resources Grid */}
      <div className="container mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Cargando recursos...</p>
          </div>
        ) : filteredResources.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={index}
                nombre={resource.nombre}
                tipo={resource.tipo}
                descripcion={resource.descripcion}
                ubicacion={resource.ubicacion}
                duracion={resource.duracion}
                requisitos={Array.isArray(resource.requisitos) ? resource.requisitos : []}
                tipoFondo={resource.tipoFondo}
                fondos={resource.fondos}
                tipoIncubadora={resource.tipoIncubadora}
                inversion={resource.inversion}
                tipoPrograma={resource.tipoPrograma}
                onDelete={loadResources}
                resourceType={activeTab}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery ? "No se encontraron recursos con ese criterio" : "No hay recursos disponibles"}
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes un recurso para compartir?
            </h3>
            <p className="text-muted-foreground mb-6">
              Comparte incubadoras, fondos o programas que puedan ayudar a otros emprendedores.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="group"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Añadir recurso
            </Button>
          </div>
        </div>
      </div>

      {/* Create Resource Modal */}
      <CreateResourceModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onResourceCreated={handleResourceCreated}
      />
    </div>
  );
};

export default Resources;