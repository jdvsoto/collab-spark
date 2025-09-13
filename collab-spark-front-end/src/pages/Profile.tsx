import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Calendar, 
  Star, 
  Users, 
  Rocket, 
  Sparkles, 
  Heart, 
  Zap, 
  Target,
  ArrowLeft,
  ExternalLink,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Globe,
  Award,
  TrendingUp,
  Lightbulb,
  Palette,
  Code,
  Camera
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("proyectos");

  // Mock data del perfil
  const profile = {
    name: "John Doe",
    username: "@johndoe",
    title: "Creative Technologist & Digital Artist",
    location: "Barcelona, España",
    avatar: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    bio: "Explorador digital que mezcla código, arte y tecnología para crear experiencias que conecten con las emociones humanas. Siempre buscando la intersección entre lo técnico y lo poético.",
    longBio: "Mi viaje comenzó en las calles de Barcelona, donde descubrí que la tecnología podía ser un medio de expresión artística. Ahora combino programación creativa, diseño generativo y narrativas interactivas para crear experiencias que van más allá de lo funcional. Creo en la tecnología como herramienta de conexión humana y transformación social.",
    stats: {
      projects: 12,
      collaborations: 28,
      experience: "3 años",
      rating: 4.9
    },
    skills: [
      { name: "Creative Coding", level: "Experto", icon: Code, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
      { name: "Digital Art", level: "Avanzado", icon: Palette, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
      { name: "Interactive Design", level: "Experto", icon: Zap, color: "bg-gradient-to-r from-orange-500 to-red-500" },
      { name: "Generative AI", level: "Intermedio", icon: Sparkles, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
      { name: "Photography", level: "Avanzado", icon: Camera, color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
      { name: "Storytelling", level: "Experto", icon: Lightbulb, color: "bg-gradient-to-r from-yellow-500 to-orange-500" }
    ],
    interests: ["Arte Digital", "Tecnología Emergente", "Narrativas Interactivas", "Sostenibilidad", "Comunidades Digitales", "Educación Creativa"],
    lookingFor: "Proyectos que mezclen arte y tecnología, colaboraciones con artistas digitales, y oportunidades para crear experiencias inmersivas que generen impacto social.",
    availability: "Disponible para proyectos creativos",
    contact: {
      email: "john@creativecode.studio",
      website: "https://johndoe.studio",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe"
    },
    achievements: [
      {
        title: "Premio Digital Art Innovation 2024",
        description: "Reconocimiento por 'DreamScape', una experiencia inmersiva que combina IA generativa y narrativa interactiva",
        icon: Award,
        color: "text-yellow-500"
      },
      {
        title: "Speaker en SXSW Interactive",
        description: "Presenté 'El futuro de la narrativa digital' en la conferencia más importante de tecnología creativa",
        icon: TrendingUp,
        color: "text-blue-500"
      },
      {
        title: "Exposición en Ars Electronica",
        description: "Mi instalación 'Digital Whispers' fue seleccionada para el festival de arte digital más prestigioso",
        icon: Star,
        color: "text-purple-500"
      }
    ],
    projects: [
      {
        id: "1",
        title: "DreamScape",
        description: "Experiencia inmersiva que usa IA para generar paisajes oníricos basados en las emociones del usuario",
        role: "Creative Director & Developer",
        tags: ["AI", "Immersive", "Emotional Computing"],
        image: "/placeholder.svg",
        status: "En desarrollo",
        collaborators: 4
      },
      {
        id: "2",
        title: "Digital Whispers",
        description: "Instalación interactiva que convierte conversaciones en visualizaciones de datos poéticas",
        role: "Artist & Technologist",
        tags: ["Interactive Art", "Data Visualization", "Sound Design"],
        image: "/placeholder.svg",
        status: "Completado",
        collaborators: 2
      },
      {
        id: "3",
        title: "EcoVerse",
        description: "Mundo virtual que educa sobre sostenibilidad a través de narrativas interactivas y gamificación",
        role: "Lead Developer",
        tags: ["VR", "Education", "Sustainability"],
        image: "/placeholder.svg",
        status: "Prototipo",
        collaborators: 6
      }
    ],
    collaborations: [
      {
        name: "María González",
        role: "UX Designer",
        project: "DreamScape",
        avatar: "/placeholder.svg"
      },
      {
        name: "David Kim",
        role: "Sound Artist",
        project: "Digital Whispers",
        avatar: "/placeholder.svg"
      },
      {
        name: "Sofia Ruiz",
        role: "Environmental Scientist",
        project: "EcoVerse",
        avatar: "/placeholder.svg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Cover Image */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Back button */}
          <Link to="/" className="absolute top-6 left-6 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        {/* Profile Header */}
        <div className="container mx-auto px-6 -mt-20 relative z-10">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                  <AvatarImage src={profile.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl font-bold">
                    AC
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {profile.name}
                    </h1>
                    <p className="text-muted-foreground mb-1">{profile.username}</p>
                    <h2 className="text-xl text-primary font-semibold mb-3">
                      {profile.title}
                    </h2>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                    <Button size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Mensaje
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {profile.bio}
                </p>

                {/* Stats */}
                <div className="flex gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{profile.stats.projects}</div>
                    <div className="text-muted-foreground">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{profile.stats.collaborations}</div>
                    <div className="text-muted-foreground">Colaboraciones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{profile.stats.experience}</div>
                    <div className="text-muted-foreground">Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{profile.stats.rating}</div>
                    <div className="text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="proyectos" className="flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Proyectos
                  </TabsTrigger>
                  <TabsTrigger value="logros" className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Logros
                  </TabsTrigger>
                  <TabsTrigger value="colaboraciones" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Colaboraciones
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="proyectos" className="space-y-6">
                  {profile.projects.map((project) => (
                    <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            <Rocket className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <Badge variant={project.status === 'Completado' ? 'default' : 'secondary'}>
                                {project.status}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {project.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="font-medium">{project.role}</span>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{project.collaborators} colaboradores</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="logros" className="space-y-6">
                  {profile.achievements.map((achievement, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className={`w-12 h-12 rounded-lg ${achievement.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                            <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="colaboraciones" className="space-y-6">
                  {profile.collaborations.map((collab, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={collab.avatar} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                              {collab.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{collab.name}</h3>
                            <p className="text-sm text-muted-foreground">{collab.role}</p>
                            <p className="text-xs text-primary">Proyecto: {collab.project}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Ver perfil
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Habilidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profile.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg ${skill.color} flex items-center justify-center`}>
                              <skill.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className={`h-2 rounded-full ${skill.color} transition-all duration-500`} 
                               style={{ width: skill.level === 'Experto' ? '90%' : skill.level === 'Avanzado' ? '75%' : '60%' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Intereses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <Badge key={interest} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Looking for */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Buscando
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {profile.lookingFor}
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{profile.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <a href={profile.contact.website} className="text-primary hover:underline">
                        Sitio web
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Github className="w-4 h-4 text-muted-foreground" />
                      <a href={profile.contact.github} className="text-primary hover:underline">
                        GitHub
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                      <a href={profile.contact.linkedin} className="text-primary hover:underline">
                        LinkedIn
                      </a>
                    </div>
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

export default Profile; 