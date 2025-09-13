import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Network } from "lucide-react";
import projectsIcon from "@/assets/projects-icon.jpg";
import marketplaceIcon from "@/assets/marketplace-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      image: projectsIcon,
      title: "Proyectos para todos",
      description:
        "Desde cosas simples para practicar hasta ideas que pueden cambiar el mundo. Encuentra el proyecto perfecto para ti.",
      color: "accent",
    },
    {
      icon: Network,
      image: marketplaceIcon,
      title: "Recursos y apoyo",
      description:
        "Encuentra programas, incubadoras y fondos que te ayuden a hacer crecer tu proyecto. Todo adaptado a tu etapa.",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              hacer cosas increíbles
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Encuentra proyectos y accede a recursos. Todo en un solo lugar,
            diseñado para jóvenes como tú.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  feature.color === "primary"
                    ? "from-primary/5 to-primary/0"
                    : "from-accent/5 to-accent/0"
                } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon or Image */}
                <div className="mb-6">
                  {feature.image ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-soft">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-${feature.color} flex items-center justify-center shadow-soft`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
