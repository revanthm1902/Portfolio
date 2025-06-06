
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight, Trophy, Briefcase, BookOpen, Star } from 'lucide-react';
import BlogPostPopup from './BlogPostPopup';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After working on multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization that I wish I knew earlier.",
      content: "In this comprehensive guide, I share my experience building React applications that serve millions of users. From component architecture to state management strategies, I'll walk you through the key principles that have helped me build maintainable and scalable applications.\n\nOne of the most important lessons I've learned is the importance of component composition over inheritance. React's functional approach encourages us to build small, reusable components that can be composed together to create complex UIs.\n\nAnother crucial aspect is state management. While React's built-in state management is powerful, large applications often benefit from more structured approaches like Redux or Zustand. The key is choosing the right tool for the job and not over-engineering your solution.\n\nPerformance optimization is another critical area. Techniques like code splitting, lazy loading, and memoization can significantly improve your application's performance. However, premature optimization can be counterproductive, so it's important to measure first and optimize based on real bottlenecks.",
      category: "React",
      readTime: "8 min",
      publishDate: "2024-05-15",
      views: 2500,
      likes: 124,
      comments: 23,
      featured: true,
      tags: ["React", "Architecture", "Performance", "Best Practices"],
      type: "tutorial"
    },
    {
      id: 2,
      title: "The Future of Web Development: AI-Powered Coding Tools",
      excerpt: "Exploring how AI tools like GitHub Copilot and ChatGPT are revolutionizing the way we write code and what it means for developers in 2024 and beyond.",
      content: "The landscape of web development is changing rapidly with the introduction of AI-powered coding assistants. In this article, I explore how these tools are transforming our daily workflows and what they mean for the future of software development.\n\nAI coding assistants like GitHub Copilot, ChatGPT, and Claude are not just fancy autocomplete tools—they're fundamentally changing how we approach problem-solving in code. These tools can help with everything from writing boilerplate code to explaining complex algorithms.\n\nHowever, it's important to understand that these tools are aids, not replacements for human developers. They excel at pattern recognition and can help with routine tasks, but they still require human oversight and critical thinking.\n\nThe key to effectively using AI coding tools is learning how to craft good prompts and knowing when to trust the generated code. Always review, test, and understand the code that AI generates before using it in production.",
      category: "AI/ML",
      readTime: "6 min",
      publishDate: "2024-05-10",
      views: 1800,
      likes: 89,
      comments: 15,
      featured: false,
      tags: ["AI", "Productivity", "Future", "Tools"],
      type: "insights"
    }
  ];

  const achievements = [
    {
      id: 3,
      title: "AWS Certified Solutions Architect Achievement",
      excerpt: "Successfully obtained AWS Solutions Architect certification with a score of 885/1000, demonstrating expertise in cloud architecture and best practices.",
      content: "Achieving the AWS Certified Solutions Architect certification was a significant milestone in my cloud journey. This certification validates my ability to design and deploy scalable, reliable, and cost-effective systems on AWS.\n\nThe preparation process took me about 3 months of dedicated study, including hands-on practice with various AWS services. I focused particularly on understanding the Well-Architected Framework and its five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization.\n\nSome key areas I mastered include:\n- Designing fault-tolerant architectures\n- Implementing security best practices\n- Optimizing costs through proper resource selection\n- Understanding networking concepts like VPCs, subnets, and routing\n- Working with various compute, storage, and database services\n\nThis certification has opened up new opportunities and given me the confidence to architect complex cloud solutions for enterprise clients.",
      category: "Achievement",
      readTime: "5 min",
      publishDate: "2024-04-01",
      views: 1200,
      likes: 67,
      comments: 12,
      tags: ["AWS", "Certification", "Cloud", "Achievement"],
      type: "achievement"
    }
  ];

  const projects = [
    {
      id: 4,
      title: "Building a Real-time Chat Application with WebSockets",
      excerpt: "Deep dive into creating a scalable chat application using Node.js, Socket.io, and React with real-time messaging, user authentication, and message persistence.",
      content: "In this project showcase, I'll walk you through building a full-featured real-time chat application from scratch. This project demonstrates advanced concepts in real-time communication, state management, and user experience design.\n\nThe backend is built with Node.js and Express, using Socket.io for real-time communication. I implemented features like:\n- Real-time messaging with delivery confirmations\n- User authentication with JWT tokens\n- Message persistence with MongoDB\n- Typing indicators and online status\n- File sharing capabilities\n- Message encryption for security\n\nThe frontend uses React with Context API for state management and a custom hook for socket connections. Special attention was paid to handling connection failures, reconnection logic, and offline message queuing.\n\nPerformance optimizations include message pagination, image compression, and efficient re-rendering through React.memo and useMemo hooks.\n\nThe application is deployed using Docker containers on AWS ECS with Redis for session management and CloudFront for global content delivery.",
      category: "Project",
      readTime: "12 min",
      publishDate: "2024-03-15",
      views: 3400,
      likes: 198,
      comments: 45,
      tags: ["Node.js", "React", "WebSockets", "Real-time", "Full-Stack"],
      type: "project"
    }
  ];

  const allContent = [...blogPosts, ...achievements, ...projects];
  const featuredPosts = allContent.filter(post => post.featured);

  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return Trophy;
      case 'project':
        return Briefcase;
      case 'tutorial':
      case 'insights':
      default:
        return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'text-yellow-400 border-yellow-400/50';
      case 'project':
        return 'text-neon-purple border-neon-purple/50';
      case 'tutorial':
      case 'insights':
      default:
        return 'text-neon-green border-neon-green/50';
    }
  };

  const renderPostCard = (post: any, featured = false) => {
    const IconComponent = getIcon(post.type);
    
    return (
      <Card 
        key={post.id}
        className={`glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden cursor-pointer ${
          featured ? 'border-neon-purple/50' : 'border-white/20'
        }`}
        onClick={() => setSelectedPost(post)}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <IconComponent className={`h-4 w-4 ${getTypeColor(post.type).split(' ')[0]}`} />
              <Badge variant="outline" className={getTypeColor(post.type)}>
                {post.category}
              </Badge>
            </div>
            {featured && (
              <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            )}
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
            {post.tags.slice(0, 3).map((tag: string) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-neon-cyan/20 text-neon-cyan rounded border border-neon-cyan/30"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More Button */}
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
    );
  };

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
            <span className="text-neon-purple text-glow animate-glow">Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            Sharing insights, tutorials, achievements, and project showcases from my journey 
            in web development and technology.
          </p>
        </div>

        {/* Featured Content */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-space font-bold text-neon-cyan mb-8 flex items-center gap-2">
              <Star className="h-6 w-6 text-neon-green" />
              Featured Content
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => renderPostCard(post, true))}
            </div>
          </div>
        )}

        {/* Tabbed Content */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 glass-card">
            <TabsTrigger value="all" className="data-[state=active]:bg-neon-purple/20">
              All
            </TabsTrigger>
            <TabsTrigger value="blog" className="data-[state=active]:bg-neon-green/20">
              Blog
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-neon-purple/20">
              Projects
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-yellow-400/20">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allContent.filter(post => !post.featured).map((post) => renderPostCard(post))}
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(post => !post.featured).map((post) => renderPostCard(post))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((post) => renderPostCard(post))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((post) => renderPostCard(post))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="ui-btn bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-0 neon-glow transition-all duration-300 hover:scale-105"
          >
            <span>View All Content</span>
          </Button>
        </div>
      </div>

      {/* Blog Post Popup */}
      {selectedPost && (
        <BlogPostPopup
          post={selectedPost}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};

export default BlogSection;
