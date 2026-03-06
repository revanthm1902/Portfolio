import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import TechBadge from './TechBadge';
import type { ExperienceItem } from '@/types';

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
  /** If provided, shows a "View Full Details" button */
  onSelect?: (exp: ExperienceItem) => void;
}

const ExperienceCard = ({ exp, index, onSelect }: ExperienceCardProps) => (
  <Card
    className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <CardHeader className="pb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 glass-card">
            <exp.icon className="h-6 w-6 text-neon-cyan group-hover:animate-bounce-slow" />
          </div>
          <div>
            <CardTitle className="text-2xl font-space text-foreground group-hover:text-neon-purple transition-colors">
              {exp.position}
            </CardTitle>
            <CardDescription className="text-lg text-neon-cyan font-mono">
              {exp.company}
            </CardDescription>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="font-mono">{exp.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{exp.location}</span>
          </div>
          <Badge variant="outline" className="text-neon-green border-neon-green/50">
            {exp.type}
          </Badge>
        </div>
      </div>
    </CardHeader>

    <CardContent className="space-y-6">
      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

      {/* Achievements */}
      <div>
        <h4 className="text-lg font-semibold text-neon-cyan mb-3 flex items-center gap-2">
          <Award className="h-5 w-5" />
          Key Achievements
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {exp.achievements.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-neon-green mt-1">▸</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-lg font-semibold text-neon-cyan mb-3">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Optional detail button */}
      {onSelect && (
        <div className="pt-4 border-t border-white/10">
          <Button
            onClick={() => onSelect(exp)}
            className="w-full bg-neon-purple/20 border-neon-purple/50 text-neon-purple hover:bg-neon-purple/30 border transition-all duration-300 hover:scale-[1.02] group"
            size="lg"
          >
            <span className="flex items-center gap-2">
              View Full Details & Certificates
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);

export default ExperienceCard;
