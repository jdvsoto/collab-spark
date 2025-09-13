import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  teamSize: number;
  maxTeam: number;
  daysLeft: number;
  image?: string;
  isLiked?: boolean;
  featured?: boolean;
}

const ProjectCard = ({
  id,
  title,
  description,
  category,
  tags,
  teamSize,
  maxTeam,
  daysLeft,
  image,
  isLiked = false,
  featured = false
}: ProjectCardProps) => {
  return (
    <div className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border ${
      featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5' : 'border-border/50'
    } hover:border-primary/20`}>
      
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-hero text-white shadow-glow">
            Destacado
          </Badge>
        </div>
      )}

      {/* Like button */}
      <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'}`} />
      </button>

      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">{title[0]}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <Badge variant="secondary" className="mb-3">
          {category}
        </Badge>

        {/* Title & Description */}
        <Link to={`/proyecto/${id}`}>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{teamSize}/{maxTeam}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{daysLeft} días</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Link to={`/proyecto/${id}`} className="flex-1">
            <Button className="w-full group/btn">
              Ver proyecto
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Users className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;