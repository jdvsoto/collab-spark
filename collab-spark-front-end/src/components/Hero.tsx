import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Target } from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";

const Hero = () => {
  const handleViewProjects = () => {
    window.location.href = "/proyectos";
  };

  const handleExploreResources = () => {
    window.location.href = "/recursos";
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                El lugar donde las ideas 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> cobran vida</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Conecta con otros jóvenes, encuentra proyectos para practicar o ideas para escalar. 
                Aquí todo es posible, desde experimentos simples hasta grandes sueños.
              </p>
            </div>
            

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button variant="hero" size="lg" className="group" onClick={handleViewProjects}>
                Ver proyectos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleExploreResources}>
                Explorar recursos
              </Button>
            </div>

            {/* Features preview */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Experiencia real</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span>Experimentación libre</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>Red de apoyo</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-card backdrop-blur-sm">
              <img 
                src={heroImage} 
                alt="Jóvenes colaborando en proyectos creativos"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating cards */}
            {/* <div className="absolute -top-6 -left-6 bg-card rounded-lg p-4 shadow-card border backdrop-blur-sm animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Nuevo proyecto: EcoApp</span>
              </div>
            </div> */}
            
            {/* <div className="absolute -bottom-6 -right-6 bg-card rounded-lg p-4 shadow-card border backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">5 colaboradores se unieron</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;