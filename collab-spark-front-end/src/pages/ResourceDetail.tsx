import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  CheckCircle, 
  ArrowLeft, 
  ExternalLink, 
  Mail,
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
  Award,
  Globe,
  Clock,
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Users2,
  Target as TargetIcon,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ResourceDetail = () => {
  const { id } = useParams();

  // Mock data - en una app real esto vendría de una API
  const resource = {
    id: "1",
    name: "StartupLab Madrid",
    type: "Incubadora",
    description: "Ayudamos a jóvenes emprendedores a convertir sus ideas en negocios reales. Ofrecemos espacio de trabajo, mentores y conexiones con inversores y otros emprendedores. Nuestro programa está diseñado específicamente para personas que están empezando su camino emprendedor.",
    longDescription: "StartupLab Madrid es una incubadora especializada en apoyar a jóvenes emprendedores en las primeras etapas de sus proyectos. Creemos que todos tenemos ideas increíbles, pero no todos tenemos las herramientas y conexiones para hacerlas realidad. Por eso hemos creado un espacio donde puedes aprender, experimentar y conectar con personas que han pasado por lo mismo que tú.",
    focus: ["Tecnología", "Social", "Educación", "Sostenibilidad"],
    support: [
      "Espacio de trabajo compartido",
      "Mentores expertos en diferentes áreas",
      "Conexiones con inversores",
      "Talleres y formación práctica",
      "Red de emprendedores",
      "Acceso a herramientas y software"
    ],
    location: "Madrid, España",
    duration: "6 meses",
    funding: "Hasta 25k€",
    requirements: "Idea validada, equipo de 2+ personas, compromiso de tiempo completo",
    applicationProcess: [
      "Envía tu idea y equipo",
      "Entrevista con nuestro equipo",
      "Presentación ante mentores",
      "Decisión final y onboarding"
    ],
    successStories: [
      {
        name: "EcoApp",
        description: "App para reducir la huella de carbono personal",
        funding: "50k€ en inversión",
        team: "3 jóvenes de 22-24 años",
        impact: "10k+ usuarios activos"
      },
      {
        name: "StudyBuddy",
        description: "Plataforma de tutorías entre estudiantes",
        funding: "30k€ en inversión",
        team: "2 estudiantes universitarios",
        impact: "5k+ estudiantes ayudados"
      }
    ],
    contact: {
      email: "hola@startuplabmadrid.com",
      website: "https://startuplabmadrid.com",
      phone: "+34 91 123 45 67"
    },
    nextDeadline: "15 de diciembre, 2024",
    stats: {
      startups: 45,
      funding: "2.5M€",
      successRate: "78%",
      mentors: 25
    },
    program: {
      phase1: {
        title: "Validación y MVP",
        duration: "2 meses",
        focus: "Validar idea, construir MVP, primeros usuarios"
      },
      phase2: {
        title: "Crecimiento y Tracción",
        duration: "2 meses", 
        focus: "Escalar, métricas, optimización"
      },
      phase3: {
        title: "Inversión y Escalado",
        duration: "2 meses",
        focus: "Preparar ronda de inversión, expansión"
      }
    },
    mentors: [
      {
        name: "Ana Martínez",
        role: "Ex-Google, Fundadora de 3 startups",
        expertise: "Product Strategy, Growth",
        avatar: "/placeholder.svg"
      },
      {
        name: "Carlos Rodríguez", 
        role: "Inversor Ángel, 50+ inversiones",
        expertise: "Financiación, Pitch",
        avatar: "/placeholder.svg"
      },
      {
        name: "Laura Sánchez",
        role: "CMO en startups unicornio",
        expertise: "Marketing, Branding",
        avatar: "/placeholder.svg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            {/* Back button */}
            <Link to="/recursos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver a recursos
            </Link>

            {/* Resource Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">
                  {resource.type}
                </Badge>
                <Badge variant="default" className="text-sm">
                  {resource.funding}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {resource.duration}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {resource.name}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                {resource.description}
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{resource.stats.startups}</div>
                  <div className="text-sm text-muted-foreground">Startups</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{resource.stats.funding}</div>
                  <div className="text-sm text-muted-foreground">Financiación</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{resource.stats.successRate}</div>
                  <div className="text-sm text-muted-foreground">Tasa de éxito</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{resource.stats.mentors}</div>
                  <div className="text-sm text-muted-foreground">Mentores</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="group">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Aplicar ahora
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar
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
                    Sobre nosotros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {resource.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Program Phases */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Rocket className="w-6 h-6 text-blue-500" />
                    Programa de 6 meses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {Object.entries(resource.program).map(([phase, data], index) => (
                      <div key={phase} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          {index < Object.keys(resource.program).length - 1 && (
                            <div className="w-0.5 h-16 bg-border mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="bg-blue-500/5 rounded-xl p-6 border border-blue-500/10">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {data.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {data.focus}
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {data.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What we offer */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Target className="w-6 h-6 text-green-500" />
                    ¿Qué ofrecemos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {resource.support.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-green-500/5 rounded-lg border border-green-500/10">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success stories */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Award className="w-6 h-6 text-purple-500" />
                    Proyectos exitosos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {resource.successStories.map((story, index) => (
                      <div key={index} className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl p-6 border border-purple-500/10">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-foreground">
                            {story.name}
                          </h3>
                          <Badge variant="default" className="text-xs">
                            Exitoso
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {story.description}
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-500" />
                            <span className="font-medium">{story.funding}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users2 className="w-4 h-4 text-blue-500" />
                            <span>{story.team}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TargetIcon className="w-4 h-4 text-purple-500" />
                            <span>{story.impact}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mentors */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="w-6 h-6 text-orange-500" />
                    Nuestros mentores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {resource.mentors.map((mentor, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-orange-500/5 rounded-lg border border-orange-500/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                          <p className="text-sm text-primary mb-2">{mentor.role}</p>
                          <p className="text-xs text-muted-foreground">{mentor.expertise}</p>
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
                    <span className="text-sm">{resource.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{resource.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{resource.funding}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Próxima convocatoria: {resource.nextDeadline}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Requisitos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    {resource.requirements}
                  </p>
                </CardContent>
              </Card>

              {/* Focus areas */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-500" />
                    Áreas de enfoque
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {resource.focus.map((area) => (
                      <Badge key={area} variant="outline">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application process */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-blue-500" />
                    Proceso de aplicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resource.applicationProcess.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
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
                      <span>{resource.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <a href={resource.contact.website} className="text-primary hover:underline">
                        Visitar sitio web
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span>{resource.contact.phone}</span>
                    </div>
                    <Button className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Aplicar ahora
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

export default ResourceDetail; 