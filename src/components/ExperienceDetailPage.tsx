import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building, Calendar, MapPin, Award, Code, Trophy, Users, Target, ExternalLink, FileText, Globe, GitBranch } from 'lucide-react';

interface ProjectDetails {
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  achievements: string[];
  certificate?: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: React.ComponentType<{ className?: string }>;
  projects?: ProjectDetails[];
}

interface ExperienceDetailPageProps {
  experience: ExperienceItem;
  onBack: () => void;
}

const ExperienceDetailPage = ({ experience, onBack }: ExperienceDetailPageProps) => {
  const handleCertificateView = (certificateUrl: string) => {
    // Handle certificate viewing - could be PDF viewer or download
    window.open(certificateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-purple/20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            onClick={onBack}
            variant="outline" 
            size="lg"
            className="glass-card border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Experience
          </Button>
        </div>

        {/* Experience Header */}
        <Card className="glass-card border-white/20 mb-8">
          <CardHeader className="pb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="p-4 glass-card">
                  <experience.icon className="h-8 w-8 text-neon-cyan animate-pulse" />
                </div>
                <div>
                  <CardTitle className="text-4xl font-space text-foreground mb-2">
                    {experience.position}
                  </CardTitle>
                  <CardDescription className="text-2xl text-neon-cyan font-mono mb-4">
                    {experience.company}
                  </CardDescription>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {experience.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-muted-foreground text-lg">
                  <Calendar className="h-5 w-5" />
                  <span className="font-mono">{experience.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-lg">
                  <MapPin className="h-5 w-5" />
                  <span>{experience.location}</span>
                </div>
                <Badge variant="outline" className="text-neon-green border-neon-green/50 text-lg px-4 py-2">
                  {experience.type}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Key Achievements */}
        <Card className="glass-card border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-space text-neon-cyan flex items-center gap-3">
              <Trophy className="h-6 w-6" />
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <span className="text-neon-green text-xl mt-1">★</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="glass-card border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-space text-neon-cyan flex items-center gap-3">
              <Code className="h-6 w-6" />
              Technologies & Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 text-lg font-mono bg-neon-purple/20 text-neon-cyan rounded-full border border-neon-purple/30 hover:bg-neon-purple/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Details */}
        {experience.projects && experience.projects.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-space text-center text-neon-purple">
              Projects Worked On
            </h2>
            
            {experience.projects.map((project, index) => (
              <Card key={index} className="glass-card border-white/20">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-3xl font-space text-neon-purple flex items-center gap-3 mb-3">
                        <GitBranch className="h-7 w-7" />
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    
                    {/* Certificate Button */}
                    {project.certificate && (
                      <div className="flex flex-col items-center gap-3">
                        <Button
                          onClick={() => handleCertificateView(project.certificate!)}
                          className="bg-neon-green/20 border-neon-green/50 text-neon-green hover:bg-neon-green/30 border transition-all duration-300 hover:scale-[1.05] px-6 py-3 text-lg"
                          size="lg"
                        >
                          <FileText className="h-5 w-5 mr-2" />
                          View Certificate
                        </Button>
                        <p className="text-sm text-muted-foreground">Project Completion Certificate</p>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h4 className="text-xl font-semibold text-neon-cyan mb-4 flex items-center gap-3">
                      <Code className="h-6 w-6" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 text-lg font-mono bg-neon-green/20 text-neon-green rounded-full border border-neon-green/30 hover:bg-neon-green/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-neon-cyan mb-4 flex items-center gap-3">
                      <Target className="h-6 w-6" />
                      Key Features & Functionality
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 glass-card rounded-lg hover:bg-white/10 transition-colors">
                          <span className="text-neon-cyan text-lg mt-1">▸</span>
                          <span className="text-muted-foreground text-lg leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Achievements */}
                  <div>
                    <h4 className="text-xl font-semibold text-neon-cyan mb-4 flex items-center gap-3">
                      <Award className="h-6 w-6" />
                      Project Impact & Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 glass-card rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                          <span className="text-neon-purple text-lg mt-1">🏆</span>
                          <span className="text-muted-foreground text-lg leading-relaxed font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Overall Experience Certificate */}
        <Card className="glass-card border-white/20 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-space text-neon-cyan flex items-center gap-3">
              <FileText className="h-6 w-6" />
              Experience Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 glass-card rounded-lg">
              <div>
                <h4 className="text-xl font-semibold text-neon-purple mb-2">
                  {experience.type} Completion Certificate
                </h4>
                <p className="text-muted-foreground">
                  Official completion certificate from {experience.company}
                </p>
              </div>
              <Button
                onClick={() => handleCertificateView(`/certificates/${experience.company.toLowerCase().replace(/\s+/g, '-')}-completion.pdf`)}
                className="bg-neon-cyan/20 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/30 border transition-all duration-300 hover:scale-[1.05] px-6 py-3 text-lg"
                size="lg"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Certificate
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Top Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={onBack}
            variant="outline" 
            size="lg"
            className="glass-card border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 hover:scale-[1.02] px-8 py-4 text-lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetailPage;
