import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Building, Users, DollarSign, Target, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'incubadoras' | 'fondos' | 'programas'>('incubadoras');

  const incubadoras = [
    {
      id: "1",
      name: "StartupLab Madrid",
      type: "Incubadora",
      description: "Ayudamos a jóvenes emprendedores a convertir sus ideas en negocios reales. Ofrecemos espacio de trabajo, mentores y conexiones.",
      focus: ["Tecnología", "Social", "Educación"],
      support: ["Espacio de trabajo", "Mentores", "Conexiones", "Talleres"],
      location: "Madrid, España",
      duration: "6 meses",
      funding: "Hasta 25k€",
      requirements: "Idea validada, equipo de 2+ personas"
    },
    {
      id: "2",
      name: "Impact Hub Barcelona",
      type: "Aceleradora",
      description: "Especializados en proyectos con impacto social y ambiental. Conectamos emprendedores con inversores y organizaciones.",
      focus: ["Impacto social", "Sostenibilidad", "Innovación"],
      support: ["Mentoría", "Networking", "Inversión", "Espacio"],
      location: "Barcelona, España",
      duration: "4 meses",
      funding: "Hasta 50k€",
      requirements: "Proyecto con impacto social comprobado"
    },
    {
      id: "3",
      name: "TechStars España",
      type: "Aceleradora",
      description: "Programa intensivo para startups tecnológicas. Acceso a una red global de mentores, inversores y emprendedores.",
      focus: ["Tecnología", "SaaS", "Fintech"],
      support: ["120k€ de inversión", "Mentoría global", "Red de contactos"],
      location: "Madrid, España",
      duration: "3 meses",
      funding: "120k€",
      requirements: "Equipo completo, producto mínimo viable"
    }
  ];

  const fondos = [
    {
      id: "4",
      name: "Fondo Joven Innovador",
      type: "Fondo de inversión",
      description: "Invertimos en proyectos liderados por jóvenes menores de 25 años. Nos enfocamos en ideas innovadoras y equipos apasionados.",
      focus: ["Jóvenes emprendedores", "Innovación", "Tecnología"],
      support: ["Inversión", "Mentoría", "Conexiones"],
      location: "España",
      duration: "Flexible",
      funding: "10k€ - 100k€",
      requirements: "Emprendedor menor de 25 años, idea innovadora"
    },
    {
      id: "5",
      name: "Impact Ventures",
      type: "Fondo de impacto",
      description: "Buscamos proyectos que resuelvan problemas sociales y ambientales reales. Invertimos en ideas que cambien el mundo.",
      focus: ["Impacto social", "Sostenibilidad", "Innovación social"],
      support: ["Inversión", "Acompañamiento", "Red de impacto"],
      location: "Europa",
      duration: "Largo plazo",
      funding: "50k€ - 500k€",
      requirements: "Proyecto con impacto medible, equipo comprometido"
    }
  ];

  const programas = [
    {
      id: "6",
      name: "Programa Emprende Joven",
      type: "Programa gubernamental",
      description: "Iniciativa del gobierno para apoyar a jóvenes emprendedores. Ofrecemos formación, mentoría y pequeñas ayudas económicas.",
      focus: ["Jóvenes", "Todos los sectores", "Primera experiencia"],
      support: ["Formación", "Mentoría", "Ayuda económica", "Networking"],
      location: "Toda España",
      duration: "12 meses",
      funding: "5k€ - 15k€",
      requirements: "Joven emprendedor, primera experiencia"
    },
    {
      id: "7",
      name: "Academy for Young Entrepreneurs",
      type: "Programa educativo",
      description: "Programa intensivo de 6 meses para aprender a emprender. Combinamos teoría con práctica real en proyectos.",
      focus: ["Educación", "Emprendimiento", "Práctica"],
      support: ["Formación intensiva", "Proyectos reales", "Mentores", "Red"],
      location: "Madrid, Barcelona, Valencia",
      duration: "6 meses",
      funding: "Beca completa disponible",
      requirements: "Interés en emprender, disponibilidad completa"
    }
  ];

  const categories = ["Todos", "Tecnología", "Social", "Sostenibilidad", "Educación", "Fintech", "Salud"];

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

      {/* Resources Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getResources().map((resource) => (
            <Link 
              key={resource.id} 
              to={`/recurso/${resource.id}`}
              className="group block"
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {resource.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {resource.funding}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {resource.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.focus.slice(0, 3).map((focus) => (
                    <Badge key={focus} variant="outline" className="text-xs">
                      {focus}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{resource.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Requisitos:</p>
                  <p className="text-sm font-medium text-foreground">
                    {resource.requirements}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas ayuda para encontrar el recurso perfecto?
            </h3>
            <p className="text-muted-foreground mb-6">
              Cuéntanos sobre tu proyecto y te ayudamos a encontrar el apoyo que necesitas.
            </p>
            <Button variant="default" size="lg" className="group">
              Pedir ayuda
              <Users className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;