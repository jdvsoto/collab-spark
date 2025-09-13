import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - en una app real esto vendría de una API
  const project = {
    id: "1",
    title: "EcoTrack - Rastreador de Huella de Carbono",
    subtitle: "Una aplicación móvil que ayuda a las personas a rastrear su huella de carbono diaria y conectarse con iniciativas locales de sostenibilidad.",
    longDescription: "EcoTrack nació de una simple pregunta: ¿cómo podemos hacer que la sostenibilidad sea accesible y motivante para todos? Queremos crear una comunidad de personas comprometidas con el cambio climático a través de acciones pequeñas pero consistentes. La app incluirá gamificación, challenges comunitarios y conexión con negocios locales sostenibles.",
    category: "Sostenibilidad",
    type: "Para escalar",
    tags: ["React Native", "Sostenibilidad", "Gamificación", "IA", "Comunidad"],
    teamSize: 3,
    maxTeam: 6,
    daysLeft: 25,
    location: "Remoto",
    difficulty: "Medio",
    progress: 65,
    funding: "Buscando inversión",
    stage: "Prototipo funcional",
    timeline: "6 meses",
    impact: "Reducir huella de carbono personal en un 30%",
    challenges: [
      "Integración con APIs de transporte público",
      "Algoritmo de cálculo de huella de carbono",
      "Sistema de gamificación efectivo",
      "Construcción de comunidad activa"
    ],
    milestones: [
      {
        title: "Prototipo MVP",
        description: "App básica con tracking de actividades principales",
        status: "Completado",
        date: "Enero 2024"
      },
      {
        title: "Beta Testing",
        description: "Pruebas con 100 usuarios reales",
        status: "En progreso",
        date: "Marzo 2024"
      },
      {
        title: "Lanzamiento Beta",
        description: "Disponible en App Store y Google Play",
        status: "Pendiente",
        date: "Mayo 2024"
      },
      {
        title: "Expansión Comunitaria",
        description: "Integración con negocios locales",
        status: "Pendiente",
        date: "Julio 2024"
      }
    ],
    team: [
      {
        name: "María González",
        role: "Product Manager & UX Designer",
        avatar: "/placeholder.svg",
        skills: ["Product Strategy", "UX Research", "Figma"]
      },
      {
        name: "David Chen",
        role: "Full Stack Developer",
        avatar: "/placeholder.svg",
        skills: ["React Native", "Node.js", "MongoDB"]
      },
      {
        name: "Sofia Ruiz",
        role: "Environmental Scientist",
        avatar: "/placeholder.svg",
        skills: ["Data Analysis", "Sustainability", "Research"]
      }
    ],
    lookingFor: [
      "Mobile Developer (React Native)",
      "Data Scientist",
      "Marketing Specialist",
      "Community Manager"
    ],
    benefits: [
      "Equity en la startup",
      "Experiencia en impacto social",
      "Red de contactos en sostenibilidad",
      "Mentoría de expertos"
    ],
    contact: {
      email: "hola@ecotrack.app",
      website: "https://ecotrack.app",
      linkedin: "https://linkedin.com/company/ecotrack"
    },
    stats: {
      views: 1247,
      applications: 23,
      saves: 89,
      shares: 45
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-purple-500/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
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
                  {project.category}
                </Badge>
                <Badge variant={project.type === 'Para escalar' ? 'default' : 'outline'} className="text-sm">
                  {project.type}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {project.difficulty}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                {project.subtitle}
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.teamSize}/{project.maxTeam}</div>
                  <div className="text-sm text-muted-foreground">Equipo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.daysLeft}</div>
                  <div className="text-sm text-muted-foreground">Días restantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                  <div className="text-sm text-muted-foreground">Completado</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.stats.views}</div>
                  <div className="text-sm text-muted-foreground">Visualizaciones</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="max-w-md mx-auto mb-8">
                <Progress value={project.progress} className="h-3" />
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Unirse al proyecto
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar equipo
                </Button>
                <Button variant="ghost" size="lg">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Guardar
                </Button>
                <Button variant="ghost" size="lg">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Sobre el proyecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Impact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Target className="w-6 h-6 text-green-500" />
                    Impacto esperado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                    <p className="text-lg font-semibold text-green-700">
                      {project.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="w-6 h-6 text-orange-500" />
                    Desafíos técnicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-orange-500/5 rounded-lg border border-orange-500/10">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Milestones */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                    Hitos del proyecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.milestones.map((milestone, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            milestone.status === 'Completado' ? 'bg-green-500 text-white' :
                            milestone.status === 'En progreso' ? 'bg-blue-500 text-white' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {milestone.status === 'Completado' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <span className="text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          {index < project.milestones.length - 1 && (
                            <div className="w-0.5 h-12 bg-border mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {milestone.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant={milestone.status === 'Completado' ? 'default' : 'secondary'} className="text-xs">
                              {milestone.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{milestone.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Team */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Users className="w-6 h-6 text-purple-500" />
                    Equipo actual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-purple-500/5 rounded-lg border border-purple-500/10">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{member.name}</h3>
                          <p className="text-sm text-primary mb-2">{member.role}</p>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <CardHeader>
                  <CardTitle>Información rápida</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{project.stage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{project.funding}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Looking for */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Buscamos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.lookingFor.map((role, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-500" />
                    Beneficios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Tecnologías</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{project.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <a href={project.contact.website} className="text-primary hover:underline">
                        Sitio web
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      <a href={project.contact.linkedin} className="text-primary hover:underline">
                        LinkedIn
                      </a>
                    </div>
                    <Button className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Unirse al proyecto
                    </Button>
                  </div>
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