import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  ArrowLeft, 
  ArrowRight,
  ExternalLink, 
  Mail,
  Building,
  Target,
  Lightbulb
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { getFondos, getIncubadoras, getProgramas } from "@/lib/api";

const ResourceDetail = () => {
  const { id } = useParams();
  const [resource, setResource] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResource = async () => {
      setLoading(true);
      try {
        const resourceName = decodeURIComponent(id || "");

        // Buscar en incubadoras
        const incubadoras = await getIncubadoras();
        let foundResource = incubadoras.find((r: any) => r.nombre === resourceName);
        let resourceType = "incubadora";

        // Si no se encuentra, buscar en fondos
        if (!foundResource) {
          const fondos = await getFondos();
          foundResource = fondos.find((r: any) => r.nombre === resourceName);
          resourceType = "fondo";
        }

        // Si no se encuentra, buscar en programas
        if (!foundResource) {
          const programas = await getProgramas();
          foundResource = programas.find((r: any) => r.nombre === resourceName);
          resourceType = "programa";
        }

        if (foundResource) {
          setResource({ ...foundResource, resourceType });
        }
      } catch (error) {
        console.error("Error loading resource:", error);
      } finally {
        setLoading(false);
      }
    };

    loadResource();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <p className="text-center text-muted-foreground">Cargando recurso...</p>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Recurso no encontrado</h2>
            <Link to="/recursos">
              <Button>Volver a recursos</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getFundingInfo = () => {
    if (resource.fondos) return resource.fondos;
    if (resource.inversion) return resource.inversion;
    return "Consultar";
  };

  const getSpecificType = () => {
    if (resource.tipoFondo) return resource.tipoFondo;
    if (resource.tipoIncubadora) return resource.tipoIncubadora;
    if (resource.tipoPrograma) return resource.tipoPrograma;
    return resource.tipo;
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
                  {getSpecificType()}
                </Badge>
                <Badge variant="default" className="text-sm">
                  {getFundingInfo()}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {resource.duracion}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {resource.nombre}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                {resource.descripcion}
              </p>

              {/* Action buttons */}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="group">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Más información
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar
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
                    Descripción
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {resource.descripcion}
                  </p>
                </CardContent>
              </Card>

              {/* Requisitos */}
              {resource.requisitos && (
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-blue-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Target className="w-6 h-6 text-green-500" />
                      Requisitos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">
                      {resource.requisitos}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <CardHeader>
                  <CardTitle>Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Tipo</div>
                      <div className="text-sm text-muted-foreground">{getSpecificType()}</div>
                    </div>
                  </div>
                  
                  {resource.ubicacion && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Ubicación</div>
                        <div className="text-sm text-muted-foreground">{resource.ubicacion}</div>
                      </div>
                    </div>
                  )}
                  
                  {resource.duracion && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Duración</div>
                        <div className="text-sm text-muted-foreground">{resource.duracion}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {resource.tipoFondo ? 'Fondos' : resource.tipoIncubadora ? 'Inversión' : 'Fondos'}
                      </div>
                      <div className="text-sm text-muted-foreground">{getFundingInfo()}</div>
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

export default ResourceDetail; 