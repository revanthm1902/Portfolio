import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  logo: string;
}

const SkillsCarousel = () => {
  const skills: Skill[] = [
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
    { name: 'AWS', logo: 'https://banner2.cleanpng.com/20180817/eqe/5f57f9bfeb7fb5ccee9564fa00b5935f.webp' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
    { name: 'Vue.js', logo: 'https://cdn.simpleicons.org/vuedotjs' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'GraphQL', logo: 'https://cdn.simpleicons.org/graphql' },
    { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis' },
    { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes' },
    { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase' },
    { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase' },
    { name: 'Vite', logo: 'https://cdn.simpleicons.org/vite' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma' },
    { name: 'Socket.io', logo: 'https://cdn.simpleicons.org/socketdotio' },
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel' },
    { name: 'Nginx', logo: 'https://cdn.simpleicons.org/nginx' },
    { name: 'Apache', logo: 'https://cdn.simpleicons.org/apache' },
    { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux' },
    { name: 'Ubuntu', logo: 'https://cdn.simpleicons.org/ubuntu' },
    { name: 'Windows', logo: 'https://cdn.simpleicons.org/windows' },
    { name: 'macOS', logo: 'https://cdn.simpleicons.org/apple' },
    { name: 'VS Code', logo: 'https://cdn.simpleicons.org/visualstudiocode' },
    { name: 'IntelliJ', logo: 'https://cdn.simpleicons.org/intellijidea' },
    { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
    { name: 'Trello', logo: 'https://cdn.simpleicons.org/trello' },
    { name: 'Discord', logo: 'https://cdn.simpleicons.org/discord' },
    { name: 'Zoom', logo: 'https://cdn.simpleicons.org/zoom' },
    { name: 'Teams', logo: 'https://cdn.simpleicons.org/microsoftteams' },
    { name: 'Chrome', logo: 'https://cdn.simpleicons.org/googlechrome' },
    { name: 'Firefox', logo: 'https://cdn.simpleicons.org/firefox' },
    { name: 'Safari', logo: 'https://cdn.simpleicons.org/safari' },
    { name: 'Edge', logo: 'https://cdn.simpleicons.org/microsoftedge' },
    { name: 'Opera', logo: 'https://cdn.simpleicons.org/opera' },
    { name: 'Brave', logo: 'https://cdn.simpleicons.org/brave' },
    { name: 'OAuth', logo: 'https://cdn.simpleicons.org/auth0' },
    { name: 'JWT', logo: 'https://cdn.simpleicons.org/jsonwebtokens' },
    { name: 'JSON', logo: 'https://cdn.simpleicons.org/json' },
    { name: 'XML', logo: 'https://cdn.simpleicons.org/xml' },
    { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow' },
    { name: 'PyTorch', logo: 'https://cdn.simpleicons.org/pytorch' },
    { name: 'Keras', logo: 'https://cdn.simpleicons.org/keras' },
    { name: 'Scikit-learn', logo: 'https://cdn.simpleicons.org/scikitlearn' },
    { name: 'Pandas', logo: 'https://cdn.simpleicons.org/pandas' },
    { name: 'NumPy', logo: 'https://cdn.simpleicons.org/numpy' },
    { name: 'Matplotlib', logo: 'https://cdn.simpleicons.org/matplotlib' },
    { name: 'Seaborn', logo: 'https://cdn.simpleicons.org/seaborn' },
    { name: 'Chart.js', logo: 'https://cdn.simpleicons.org/chartdotjs' },
    { name: 'Tableau', logo: 'https://cdn.simpleicons.org/tableau' },
    { name: 'Power BI', logo: 'https://cdn.simpleicons.org/powerbi' },
  ];

  // Create multiple copies for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  // Detect mobile and set animation duration
  const [animationDuration, setAnimationDuration] = useState(40); // default 40s

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth <= 480) {
        setAnimationDuration(15); // faster for small mobile
      } else if (window.innerWidth <= 768) {
        setAnimationDuration(20); // medium speed for mobile
      } else if (window.innerWidth <= 1024) {
        setAnimationDuration(30); // tablet
      } else {
        setAnimationDuration(40); // desktop default
      }
    };
    updateDuration();
    window.addEventListener('resize', updateDuration);
    return () => window.removeEventListener('resize', updateDuration);
  }, []);

  return (
    <div className="relative overflow-hidden w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
      {/* Enhanced gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Auto-sliding carousel container with improved responsiveness */}
      <div
        className="flex animate-scroll-x"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-3 p-2 sm:p-3 lg:p-4 glass-card rounded-lg sm:rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 sm:hover:scale-110 group relative border border-white/10 hover:border-neon-cyan/50"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center relative">
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain filter dark:invert group-hover:scale-125 transition-transform duration-500 group-hover:drop-shadow-lg"
                loading="lazy"
                onError={(e) => {
                  // Fallback for broken images
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Enhanced glow effect on hover */}
              <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Responsive skill name tooltip */}
            <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 whitespace-nowrap border border-neon-cyan/30 shadow-xl">
              {skill.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 sm:border-l-4 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-transparent border-t-black/95"></div>
            </div>
            
            {/* Enhanced floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-neon-cyan rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel; 