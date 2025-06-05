
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Lightbulb, Rocket, User, GraduationCap, MapPin, Calendar, Phone } from 'lucide-react';

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
    { year: '2020', event: 'Started Programming Journey', description: 'Fell in love with code during college' },
    { year: '2021', event: 'First Internship', description: 'Frontend Developer at TechStart Inc.' },
    { year: '2022', event: 'Full Stack Developer', description: 'Joined InnovateCorp as a full-time developer' },
    { year: '2023', event: 'Tech Lead', description: 'Led a team of 5 developers on major projects' },
    { year: '2024', event: 'Freelance & Consulting', description: 'Started helping startups build amazing products' }
  ];

  const personalInfo = {
    name: 'Revanth M',
    age: '24',
    location: 'Bangalore, India',
    phone: '+91 9876543210',
    email: 'revanthm051@gmail.com',
    languages: ['English', 'Hindi', 'Telugu', 'Kannada']
  };

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Bangalore Institute of Technology',
      year: '2022-2024',
      grade: '8.5 CGPA',
      description: 'Specialized in Full Stack Development and Cloud Computing'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'St. Joseph\'s College',
      year: '2019-2022',
      grade: '8.2 CGPA',
      description: 'Foundation in Computer Science and Programming'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 hero-gradient bg-grid relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold text-neon-purple animate-glow">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful solutions. 
            With a strong foundation in modern web technologies and a keen eye for design.
          </p>
        </div>

        {/* Personal Info & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Information */}
          <Card className="glass-card border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-cyan flex items-center gap-2">
                <User className="h-6 w-6" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-neon-purple font-semibold">Name:</span>
                  <span className="text-foreground">{personalInfo.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-neon-purple font-semibold">Age:</span>
                  <span className="text-foreground">{personalInfo.age}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-neon-green" />
                  <span className="text-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-neon-green" />
                  <span className="text-foreground">{personalInfo.phone}</span>
                </div>
              </div>
              <div className="pt-4">
                <span className="text-neon-purple font-semibold">Languages:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {personalInfo.languages.map((lang, index) => (
                    <Badge key={index} variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-green flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-4 hover:bg-white/5 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-neon-cyan font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.year}
                    </div>
                    <span className="text-neon-green font-semibold">{edu.grade}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-purple">My Story</CardTitle>
                <CardDescription className="text-lg">
                  From curious beginner to passionate developer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  My journey into the world of programming started during my computer science studies, 
                  where I discovered the magic of bringing ideas to life through code. What began as 
                  curiosity quickly evolved into a deep passion for creating digital experiences.
                </p>
                <p>
                  Today, I specialize in building modern web applications using cutting-edge technologies. 
                  I'm particularly fascinated by the intersection of great UX design and robust backend architecture.
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
                <p className="text-muted-foreground">Gaming enthusiast who finds inspiration in game mechanics for web UX</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">☕</div>
                <p className="text-muted-foreground">Coffee aficionado - I believe the best code is written with the perfect brew</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🌱</div>
                <p className="text-muted-foreground">Always learning something new - currently exploring AI/ML integration in web apps</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
