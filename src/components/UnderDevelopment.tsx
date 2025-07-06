import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Construction, 
  Coffee, 
  Zap, 
  Code, 
  Rocket, 
  Brain, 
  Home, 
  RotateCcw,
  Wrench,
  Lightbulb,
  Timer,
  Sparkles
} from 'lucide-react';

const UnderDevelopment = ({ title = "Under Development", showBackButton = true, onBack }: {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}) => {
  const funnyMessages = [
    "🚧 This feature is being built with love and lots of coffee ☕",
    "🧠 Brain cells are being fried in the process",
    "💡 Ideas are being turned into reality, one bug at a time",
    "🚀 Soon to be launched into the digital universe",
    "🎯 Target: Making something awesome",
    "🌟 Magic is happening behind the scenes",
    "🔮 Future is being coded into existence"
  ];

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  const progressSteps = [
    { step: "Planning", status: "completed", icon: Lightbulb },
    { step: "Design", status: "completed", icon: Sparkles },
    { step: "Development", status: "in-progress", icon: Code },
    { step: "Testing", status: "pending", icon: Wrench },
    { step: "Launch", status: "pending", icon: Rocket }
  ];

  return (
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-purple/20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Icon Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Construction className="h-24 w-24 text-neon-purple animate-bounce" />
              <div className="absolute -bottom-2 -left-2">
                <Zap className="h-8 w-8 text-neon-green animate-ping" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-space font-bold animate-fade-in">
              <span className="text-foreground">{title}</span>
            </h1>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-neon-purple border-neon-purple/50 text-lg px-4 py-2">
                <Construction className="mr-2 h-5 w-5" />
                Coming Soon
              </Badge>
            </div>
          </div>

          {/* Funny Message */}
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-xl text-muted-foreground font-mono leading-relaxed">
                {randomMessage}
              </p>
            </CardContent>
          </Card>

          {/* Progress Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space font-semibold text-neon-cyan">
              Development Progress
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              {progressSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex flex-col items-center space-y-2">
                    <div className={`relative p-4 rounded-full transition-all duration-500 ${
                      step.status === 'completed' 
                        ? 'bg-neon-green/20 text-neon-green' 
                        : step.status === 'in-progress'
                        ? 'bg-neon-purple/20 text-neon-purple animate-pulse'
                        : 'bg-muted/20 text-muted-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                      {step.status === 'in-progress' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-purple rounded-full animate-ping" />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      step.status === 'completed' 
                        ? 'text-neon-green' 
                        : step.status === 'in-progress'
                        ? 'text-neon-purple'
                        : 'text-muted-foreground'
                    }`}>
                      {step.step}
                    </span>
                    {index < progressSteps.length - 1 && (
                      <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Coffee Cups", value: "∞", icon: Coffee, color: "text-neon-cyan" },
              { label: "Bugs Fixed", value: "No count", icon: Wrench, color: "text-neon-green" },
              { label: "Brain Cells", value: "Lost", icon: Brain, color: "text-neon-purple" },
              { label: "Motivation", value: "100%", icon: Zap, color: "text-neon-cyan" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="glass-card text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <Icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Action Buttons */}
          {showBackButton && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 transition-all duration-300 hover:scale-105"
                onClick={onBack}
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.reload()}
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Refresh Page
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UnderDevelopment; 