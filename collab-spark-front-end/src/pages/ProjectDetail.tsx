import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  ArrowLeft, 
  ExternalLink, 
  Mail, 
  MessageCircle,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Heart,
  Share2,
  Bookmark,
  Star,
  Zap,
  Lightbulb,
  Code,
  Palette,
  Globe,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase,
  CheckCircle2,
  DollarSign,
} from "lucide-react";
import { getMicroproyectos, getProyectosEscalables } from "@/lib/api";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      try {
        // Decodificar el nombre del proyecto desde la URL
        const projectName = decodeURIComponent(id || "");
        
        // Buscar en microproyectos
        const microProjects = await getMicroproyectos();
        let foundProject = microProjects.find((p: any) => p.Nombre === projectName);
        
        // Si no se encuentra, buscar en proyectos escalables
        if (!foundProject) {
          const scaleProjects = await getProyectosEscalables();
          foundProject = scaleProjects.find((p: any) => p.Nombre === projectName);
        }
        
        setProject(foundProject);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <p className="text-center text-muted-foreground">Cargando proyecto...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
            <Link to="/proyectos">
              <Button>Volver a proyectos</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isMicroproject = project.Tipo === "Microproyecto";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            {/* Back button */}
            <Link to="/proyectos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver a proyectos
            </Link>

            {/* Project Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">
                  {project.Categoria}
                </Badge>
                <Badge className={isMicroproject ? "bg-blue-500" : "bg-purple-500"}>
                  {project.Tipo}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {project.Modalidad}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {project.Nombre}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.Descripcion}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{project.Participantes} participantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{project.Duracion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{project.Modalidad}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <Button size="lg" className="group">
                  Unirse al proyecto
                  <Users className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Contactar equipo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tecnologías */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Tecnologías utilizadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(project.Tecnologias) && project.Tecnologias.map((tech: string, index: number) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Información específica del tipo de proyecto */}
              {isMicroproject && project.objetivo && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Objetivo del proyecto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.objetivo}
                    </p>
                  </CardContent>
                </Card>
              )}

              {!isMicroproject && project.Etapas && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Etapas del proyecto
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Array.isArray(project.Etapas) && project.Etapas.map((etapa: string, index: number) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-muted-foreground">{etapa}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {project.Presupuesto && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5" />
                          Presupuesto
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-foreground">
                          {project.Presupuesto}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Detalles del Proyecto */}
              <Card>
                <CardHeader>
                  <CardTitle>Detalles del proyecto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tipo</p>
                    <p className="font-medium">{project.Tipo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Categoría</p>
                    <p className="font-medium">{project.Categoria}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duración</p>
                    <p className="font-medium">{project.Duracion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Modalidad</p>
                    <p className="font-medium">{project.Modalidad}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Participantes</p>
                    <p className="font-medium">{project.Participantes}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3">¿Interesado en colaborar?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Únete a este proyecto y comienza a colaborar con el equipo.
                  </p>
                  <Button className="w-full">
                    Solicitar unirse
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;