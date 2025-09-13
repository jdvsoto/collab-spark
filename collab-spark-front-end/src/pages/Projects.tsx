import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Sparkles, Rocket, Users, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'micro' | 'escalar'>('micro');

  const microProjects = [
    {
      id: "1",
      title: "App para organizar eventos estudiantiles",
      description: "Una app simple para que los estudiantes organicen fiestas, reuniones de estudio y actividades en la universidad.",
      category: "Social",
      tags: ["React Native", "Eventos", "Estudiantes"],
      teamSize: 2,
      maxTeam: 4,
      daysLeft: 15,
      location: "Remoto",
      difficulty: "Fácil"
    },
    {
      id: "2",
      title: "Bot para recordar tareas de la casa",
      description: "Un bot de WhatsApp que te recuerda hacer la limpieza, pagar cuentas y organizar tu espacio personal.",
      category: "Productividad",
      tags: ["Python", "WhatsApp API", "Automatización"],
      teamSize: 1,
      maxTeam: 3,
      daysLeft: 20,
      location: "Remoto",
      difficulty: "Fácil"
    },
    {
      id: "3",
      title: "App para intercambiar ropa entre amigos",
      description: "Plataforma para que amigos intercambien ropa que ya no usan, promoviendo la moda sostenible.",
      category: "Sostenibilidad",
      tags: ["React", "Moda", "Intercambio"],
      teamSize: 3,
      maxTeam: 5,
      daysLeft: 25,
      location: "Remoto",
      difficulty: "Medio"
    }
  ];

  const scaleProjects = [
    {
      id: "4",
      title: "Plataforma de tutorías entre estudiantes",
      description: "Conecta estudiantes que necesitan ayuda con otros que dominan diferentes materias. Intercambio de conocimientos sin intermediarios.",
      category: "Educación",
      tags: ["Vue.js", "Educación", "P2P"],
      teamSize: 2,
      maxTeam: 6,
      daysLeft: 30,
      location: "Remoto",
      difficulty: "Medio"
    },
    {
      id: "5",
      title: "Red social para pequeños negocios locales",
      description: "Ayuda a pequeños negocios de barrio a conectarse con su comunidad y crecer juntos.",
      category: "Negocios",
      tags: ["React", "Geolocalización", "Comercio local"],
      teamSize: 4,
      maxTeam: 8,
      daysLeft: 45,
      location: "Remoto",
      difficulty: "Difícil"
    },
    {
      id: "6",
      title: "App de bienestar mental para jóvenes",
      description: "Herramientas digitales para el bienestar mental: ejercicios, recursos y conexión con profesionales.",
      category: "Salud",
      tags: ["React Native", "Salud mental", "IA"],
      teamSize: 3,
      maxTeam: 7,
      daysLeft: 60,
      location: "Remoto",
      difficulty: "Difícil"
    }
  ];

  const categories = ["Todos", "Social", "Productividad", "Sostenibilidad", "Educación", "Negocios", "Salud"];

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
                variant={category === "Todos" ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'micro' ? microProjects : scaleProjects).map((project) => (
            <Link 
              key={project.id} 
              to={`/proyecto/${project.id}`}
              className="group block"
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge variant={activeTab === 'micro' ? 'outline' : 'default'} className="text-xs">
                    {activeTab === 'micro' ? 'Microproyecto' : 'Para escalar'}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize}/{project.maxTeam}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.daysLeft} días</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes una idea para compartir?
            </h3>
            <p className="text-muted-foreground mb-6">
              Compártela con nuestra comunidad y encuentra colaboradores que quieren aprender y crecer contigo.
            </p>
            <Button variant="default" size="lg" className="group">
              Crear mi proyecto
              <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 