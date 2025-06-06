import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight, Trophy, Code, Lightbulb, Target } from 'lucide-react';
import BlogPostPopup from './BlogPostPopup';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);

  const openPostPopup = (post) => {
    setSelectedPost(post);
    setIsPostPopupOpen(true);
  };

  const achievements = [
    {
      id: 1,
      title: "Winner - National Hackathon 2024",
      description: "First place in the National Level Web Development Hackathon with innovative AI-powered solution",
      category: "Achievement",
      date: "2024-05-01",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      id: 2,
      title: "Open Source Contributor - React Ecosystem",
      description: "Contributed to major React libraries with 50+ merged PRs and 1000+ GitHub stars",
      category: "Achievement", 
      date: "2024-04-15",
      icon: Code,
      color: "text-neon-cyan"
    },
    {
      id: 3,
      title: "Technical Speaker - DevCon 2024",
      description: "Keynote speaker on 'Modern Full Stack Development' at Developer Conference",
      category: "Achievement",
      date: "2024-03-20",
      icon: Lightbulb,
      color: "text-neon-green"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform with AI Recommendations",
      description: "Built a full-stack e-commerce platform with machine learning powered product recommendations",
      category: "Project",
      date: "2024-04-01",
      icon: Target,
      color: "text-neon-purple",
      tech: ["React", "Node.js", "MongoDB", "Python", "TensorFlow"]
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "Developed a scalable real-time chat application supporting 1000+ concurrent users",
      category: "Project", 
      date: "2024-02-15",
      icon: Code,
      color: "text-neon-cyan",
      tech: ["React", "Socket.io", "Redis", "Docker"]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After working on multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization that I wish I knew earlier.",
      content: "In this comprehensive guide, I share my experience building React applications that serve millions of users. From component architecture to state management strategies, I cover the essential patterns that have helped me build maintainable and scalable applications.\n\nOne of the most important lessons I've learned is the importance of proper component composition. Instead of building monolithic components, breaking them down into smaller, focused components not only improves reusability but also makes testing and debugging much easier.\n\nState management is another crucial aspect that can make or break your application's scalability. While React's built-in state management is sufficient for small applications, larger applications benefit from more sophisticated solutions like Redux Toolkit or Zustand.\n\nPerformance optimization should be considered from the beginning of your project, not as an afterthought. Techniques like code splitting, lazy loading, and proper memoization can significantly improve your application's performance.",
      category: "React",
      readTime: "8 min",
      publishDate: "2024-05-15",
      views: 2500,
      likes: 124,
      comments: 23,
      featured: true,
      tags: ["React", "Architecture", "Performance", "Best Practices"]
    },
    {
      id: 2,
      title: "The Future of Web Development: AI-Powered Coding Tools",
      excerpt: "Exploring how AI tools like GitHub Copilot and ChatGPT are revolutionizing the way we write code and what it means for developers in 2024 and beyond.",
      content: "The landscape of web development is changing rapidly with the introduction of AI-powered coding assistants. In this article, I explore how these tools are transforming the way we approach coding, from automating repetitive tasks to providing real-time suggestions and code completion.\n\nGitHub Copilot, for example, uses machine learning to suggest entire lines of code or even complete functions based on the context of your code. This can significantly speed up the development process and reduce the likelihood of errors.\n\nChatGPT, on the other hand, can be used to generate code snippets, explain complex concepts, and even debug code. Its ability to understand natural language makes it a valuable tool for both novice and experienced developers.\n\nHowever, it's important to remember that these tools are not a replacement for human developers. They are designed to augment our abilities, not replace them. The future of web development will likely involve a combination of human creativity and AI-powered automation.",
      category: "AI/ML",
      readTime: "6 min",
      publishDate: "2024-05-10",
      views: 1800,
      likes: 89,
      comments: 15,
      featured: false,
      tags: ["AI", "Productivity", "Future", "Tools"]
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Patterns and Techniques",
      excerpt: "Dive deep into advanced TypeScript patterns including conditional types, mapped types, and template literal types that will make your code more robust and maintainable.",
      content: "TypeScript has evolved significantly over the years, introducing powerful features that can help us write more expressive and type-safe code. In this deep dive, we'll explore some advanced patterns and techniques that can take your TypeScript skills to the next level.\n\nConditional types allow us to define types that depend on other types, enabling us to create more flexible and reusable code. Mapped types, on the other hand, allow us to transform existing types into new types, making it easier to work with complex data structures.\n\nTemplate literal types allow us to create types that are based on string literals, enabling us to enforce stricter type checking and improve code maintainability. By mastering these advanced patterns, you can write more robust and maintainable TypeScript code that is easier to reason about and less prone to errors.",
      category: "TypeScript",
      readTime: "12 min",
      publishDate: "2024-05-05",
      views: 3200,
      likes: 156,
      comments: 31,
      featured: true,
      tags: ["TypeScript", "Advanced", "Patterns", "Types"]
    },
    {
      id: 4,
      title: "Building Real-time Applications with WebSockets and Node.js",
      excerpt: "A complete guide to implementing real-time features in your web applications using WebSockets, Socket.io, and Node.js with practical examples and best practices.",
      content: "Real-time functionality has become essential for modern web applications. Whether it's chat applications, live notifications, or collaborative tools, users expect instant updates and seamless interactions. In this comprehensive guide, we'll explore how to implement real-time features in your web applications using WebSockets, Socket.io, and Node.js.\n\nWebSockets provide a persistent connection between the client and server, allowing for bidirectional communication without the overhead of traditional HTTP requests. Socket.io is a library that simplifies the process of working with WebSockets, providing features like automatic reconnection and fallback to other protocols.\n\nNode.js is a popular choice for building real-time applications due to its non-blocking, event-driven architecture. By combining these technologies, you can create scalable and efficient real-time applications that provide a superior user experience.",
      category: "Node.js",
      readTime: "10 min",
      publishDate: "2024-04-28",
      views: 2100,
      likes: 98,
      comments: 19,
      featured: false,
      tags: ["Node.js", "WebSockets", "Real-time", "Backend"]
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to Use Which Layout Method",
      excerpt: "A practical comparison of CSS Grid and Flexbox with real-world examples, helping you choose the right layout method for your specific use cases.",
      content: "Layout in CSS has come a long way from the days of floats and positioning. With CSS Grid and Flexbox, we have powerful tools for creating complex layouts with ease. However, choosing the right layout method for your specific use case can be challenging. In this article, we'll compare CSS Grid and Flexbox, providing real-world examples to help you make the right decision.\n\nFlexbox is ideal for laying out elements in a single dimension, either horizontally or vertically. It provides powerful alignment and distribution capabilities, making it perfect for creating responsive navigation bars, image galleries, and more.\n\nCSS Grid, on the other hand, is designed for two-dimensional layouts. It allows you to create complex grid-based layouts with rows and columns, making it ideal for structuring entire web pages or creating intricate component layouts. By understanding the strengths and weaknesses of each layout method, you can create more efficient and maintainable CSS code.",
      category: "CSS",
      readTime: "7 min",
      publishDate: "2024-04-20",
      views: 1600,
      likes: 72,
      comments: 12,
      featured: false,
      tags: ["CSS", "Layout", "Grid", "Flexbox"]
    },
    {
      id: 6,
      title: "Deploying Full-Stack Applications with Docker and AWS",
      excerpt: "Learn how to containerize your applications with Docker and deploy them to AWS using best practices for security, scalability, and monitoring.",
      content: "Deployment strategies have evolved significantly with the rise of containerization and cloud computing. In this comprehensive tutorial, we'll explore how to containerize your full-stack applications with Docker and deploy them to AWS using best practices for security, scalability, and monitoring.\n\nDocker allows you to package your application and its dependencies into a container, ensuring that it runs consistently across different environments. AWS provides a variety of services for deploying and managing Docker containers, including ECS, EKS, and Fargate.\n\nBy following best practices for security, scalability, and monitoring, you can ensure that your applications are reliable, performant, and secure. This includes using IAM roles to manage access to AWS resources, implementing auto-scaling to handle traffic spikes, and setting up monitoring and alerting to detect and respond to issues.",
      category: "DevOps",
      readTime: "15 min",
      publishDate: "2024-04-15",
      views: 2800,
      likes: 134,
      comments: 27,
      featured: true,
      tags: ["Docker", "AWS", "DevOps", "Deployment"]
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">My </span>
            <span className="text-neon-purple text-glow animate-glow">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            Sharing insights, tutorials, achievements, and projects from my journey in web development and technology.
          </p>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="blog" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 glass-card">
            <TabsTrigger value="blog" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple">
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-neon-cyan/20 data-[state=active]:text-neon-cyan">
              Achievements
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green">
              Projects
            </TabsTrigger>
          </TabsList>

          {/* Blog Posts Tab */}
          <TabsContent value="blog" className="space-y-12">
            {/* Featured Posts */}
            <div>
              <h3 className="text-2xl font-space font-bold text-neon-cyan mb-8 flex items-center gap-2">
                <span className="text-neon-green">★</span> Featured Posts
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <Card 
                    key={post.id}
                    className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openPostPopup(post)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-neon-green border-neon-green/50">
                          {post.category}
                        </Badge>
                        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-space text-foreground group-hover:text-neon-purple transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs font-mono bg-neon-cyan/20 text-neon-cyan rounded border border-neon-cyan/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="ui-btn w-full bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 transition-all duration-300 hover:scale-105 group"
                      >
                        <span className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Regular Posts */}
            <div>
              <h3 className="text-2xl font-space font-bold text-neon-cyan mb-8">Latest Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                  <Card 
                    key={post.id}
                    className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openPostPopup(post)}
                  >
                    <CardHeader className="pb-3">
                      <Badge variant="outline" className="text-neon-green border-neon-green/50 w-fit">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg font-space text-foreground group-hover:text-neon-purple transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Button 
                        size="sm"
                        variant="outline"
                        className="ui-btn w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
                      >
                        <span>Read More</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.id}
                  className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-neon-purple transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Badge variant="outline" className="text-neon-green border-neon-green/50">
                        {new Date(achievement.date).toLocaleDateString()}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
                        <project.icon className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <Badge variant="outline" className="text-neon-green border-neon-green/50">
                        {new Date(project.date).toLocaleDateString()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-neon-purple transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.tech && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-neon-cyan/20 text-neon-cyan rounded border border-neon-cyan/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BlogPostPopup 
        post={selectedPost}
        isOpen={isPostPopupOpen}
        onClose={() => setIsPostPopupOpen(false)}
      />
    </section>
  );
};

export default BlogSection;
