import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'I believe great code comes from genuine passion for solving problems and creating meaningful experiences.',
      color: 'text-red-400'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every line of code serves a purpose. I focus on delivering results that matter to users and businesses.',
      color: 'text-neon-cyan'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Focused',
      description: 'I constantly explore new technologies and methodologies to stay ahead of the curve.',
      color: 'text-neon-green'
    },
    {
      icon: Rocket,
      title: 'Performance-Minded',
      description: 'Building fast, scalable, and efficient solutions is not just a goal—it\'s a commitment.',
      color: 'text-neon-purple'
    }
  ];

  const journey = [
    {
      year: '2023',
      event: 'Began B.Tech at VIT-AP University',
      description: 'Enrolled in VIT-AP to pursue a Bachelor’s in Technology (CSE).'
    },
    {
      year: '2023',
      event: 'Discovered Passion for Programming',
      description: 'Started exploring core programming concepts and fell in love with problem solving and building things.'
    },
    {
      year: '2024',
      event: 'Joined Innovation & Entrepreneurship Cell (IIEC)',
      description: 'Got exposed to startup culture, mentorship, and early product ideation.'
    },
    {
      year: '2024',
      event: '1st Internship – R&D Intern',
      description: 'Worked at TechtoGreen Drone & Robotics Pvt. Ltd. as a Research & Development Intern on real-world drone tech.'
    },
    {
      year: '2024',
      event: 'Joined NULL Chapter (Cybersecurity Club)',
      description: 'Collaborated on technical security projects as part of the technical team.'
    },
    {
      year: '2025',
      event: '2nd Internship – Full Stack Developer',
      description: 'Joined Purple Techno Solutions as a Full Stack Developer Intern, building scalable web apps.'
    }
  ];
  
  return (
    <section className="min-h-screen py-20 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Profile Image */}
      <div className="flex justify-center mb-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-green blur-2xl opacity-60 z-0"></div>
        <div className="relative z-10 p-1 rounded-full bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-green shadow-2xl">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2">
            <img
              src="/rev2.0.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white/20"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            />
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold text-neon-purple animate-glow">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer who thrives on turning complex challenges into elegant, user-friendly solutions. 
            With a strong foundation in modern web technologies and a keen eye for design.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-purple"><span className="text-white italic font-bold tracking-wide">Revanth Modalavalasa</span>{' '} - My Story</CardTitle>
                <CardDescription className="text-lg">
                  From curious beginner to passionate developer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
              <p>
                  My journey into programming began during my computer science studies, where I discovered the thrill of turning ideas into reality through code. 
                  What started as curiosity soon became a driving passion for building meaningful digital experiences.
                </p>
                <p>
                  Today, I specialize in crafting modern, responsive web applications using cutting-edge technologies. 
                  I'm deeply inspired by the synergy between intuitive UX design and powerful backend systems — where creativity meets logic.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30">
                    Continuous Learner
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="glass-card hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className={`h-8 w-8 mx-auto mb-3 ${value.color} group-hover:animate-bounce-slow`} />
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-space font-bold text-neon-cyan text-center">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div 
                  key={item.year}
                  className="flex gap-6 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-neon-purple rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-neon-purple to-neon-cyan mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-neon-cyan font-mono">{item.year}</span>
                        <div className="h-px bg-gradient-to-r from-neon-cyan to-transparent flex-1"></div>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{item.event}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="glass-card border-neon-green/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-neon-green">Fun Facts About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">🎮</div>
              <p className="text-muted-foreground">
                Passionate gamer who draws creative UX inspiration from immersive game mechanics and dynamics.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">☕</div>
              <p className="text-muted-foreground">
                Coffee-fueled coder — firmly believe the cleanest code starts with the perfect brew.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🌱</div>
              <p className="text-muted-foreground">
                Lifelong learner — currently diving deep into AI/ML to bring smarter experiences to the web.
              </p>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
