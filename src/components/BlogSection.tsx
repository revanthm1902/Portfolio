import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import BlogPostPopup from './BlogPostPopup';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const allPosts = [
    // Technical Posts
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After working on multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization.",
      content: "In this comprehensive guide, I share my experience building React applications that serve millions of users. From component architecture to state management strategies, I'll walk you through the key decisions that make or break large-scale applications.\n\nOne of the most critical aspects is choosing the right state management solution. While Redux was the go-to choice for years, modern alternatives like Zustand and Jotai offer simpler APIs with better TypeScript support.\n\nAnother crucial factor is component architecture. I've found that following the compound component pattern leads to more maintainable and reusable code. Here's how I structure my components...",
      category: "Technical",
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
      excerpt: "Exploring how AI tools like GitHub Copilot and ChatGPT are revolutionizing the way we write code and what it means for developers.",
      content: "The landscape of web development is changing rapidly with the introduction of AI-powered coding assistants. In this article, I explore how these tools are transforming our daily workflows and what it means for the future of software development.\n\nAI tools aren't replacing developers - they're making us more productive. I've seen a 40% increase in my coding speed when using GitHub Copilot for boilerplate code and repetitive tasks.\n\nThe key is knowing when to use these tools and when to rely on your own expertise...",
      category: "Technical",
      readTime: "6 min",
      publishDate: "2024-05-10",
      views: 1800,
      likes: 89,
      comments: 15,
      featured: false,
      tags: ["AI", "Productivity", "Future", "Tools"]
    },

    // Project Posts
    {
      id: 3,
      title: "Building a Real-time Chat Application with Socket.io",
      excerpt: "A deep dive into creating a scalable real-time chat application using React, Node.js, and Socket.io with message persistence.",
      content: "Real-time applications are becoming increasingly important in today's digital landscape. In this project walkthrough, I'll show you how I built a production-ready chat application.\n\nThe tech stack includes React for the frontend, Node.js with Express for the backend, Socket.io for real-time communication, and MongoDB for message persistence.\n\nOne of the biggest challenges was handling connection drops gracefully and implementing message queuing for offline users...",
      category: "Projects",
      readTime: "12 min",
      publishDate: "2024-04-28",
      views: 3200,
      likes: 156,
      comments: 31,
      featured: true,
      tags: ["React", "Node.js", "Socket.io", "Real-time"]
    },
    {
      id: 4,
      title: "E-commerce Platform with Microservices Architecture",
      excerpt: "How I designed and built a scalable e-commerce platform using microservices, Docker, and Kubernetes.",
      content: "Building an e-commerce platform that can handle thousands of concurrent users requires careful architectural decisions. In this project, I implemented a microservices architecture that ensures scalability and maintainability.\n\nThe platform consists of separate services for user management, product catalog, order processing, and payment handling. Each service is containerized with Docker and orchestrated using Kubernetes.\n\nThe biggest learning was implementing proper service-to-service communication and handling distributed transactions...",
      category: "Projects",
      readTime: "15 min",
      publishDate: "2024-04-15",
      views: 2800,
      likes: 134,
      comments: 27,
      featured: false,
      tags: ["Microservices", "Docker", "Kubernetes", "E-commerce"]
    },

    // Achievement Posts
    {
      id: 5,
      title: "Winning the Global Hackathon 2024: Our Journey",
      excerpt: "The story behind our award-winning AI-powered accessibility tool that won first place at the Global Accessibility Hackathon.",
      content: "Last month, our team of four developers participated in the Global Accessibility Hackathon and emerged as winners with our AI-powered web accessibility tool.\n\nOur solution uses computer vision and natural language processing to automatically detect accessibility issues on websites and provide real-time suggestions for improvements.\n\nThe 48-hour sprint was intense, but the experience taught us valuable lessons about rapid prototyping, team collaboration, and the importance of accessibility in web development...",
      category: "Achievements",
      readTime: "7 min",
      publishDate: "2024-03-20",
      views: 4200,
      likes: 287,
      comments: 45,
      featured: true,
      tags: ["Hackathon", "AI", "Accessibility", "Teamwork"]
    },
    {
      id: 6,
      title: "Speaking at TechConf 2024: Lessons in Public Speaking",
      excerpt: "My experience giving my first tech conference talk about modern React patterns to an audience of 500+ developers.",
      content: "Earlier this year, I had the opportunity to speak at TechConf 2024 about modern React patterns. It was my first major conference talk, and the experience was both terrifying and exhilarating.\n\nThe preparation took months - from crafting the perfect slides to rehearsing the presentation dozens of times. The biggest challenge was condensing complex technical concepts into digestible 30-minute segments.\n\nThe audience response was fantastic, and I learned that sharing knowledge through public speaking is one of the most rewarding aspects of being a developer...",
      category: "Achievements",
      readTime: "5 min",
      publishDate: "2024-02-14",
      views: 1900,
      likes: 156,
      comments: 28,
      featured: false,
      tags: ["Speaking", "Conference", "React", "Communication"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', posts: allPosts },
    { id: 'technical', label: 'Technical', posts: allPosts.filter(post => post.category === 'Technical') },
    { id: 'projects', label: 'Projects', posts: allPosts.filter(post => post.category === 'Projects') },
    { id: 'achievements', label: 'Achievements', posts: allPosts.filter(post => post.category === 'Achievements') }
  ];

  const handleReadMore = (post: any) => {
    setSelectedPost(post);
  };

  const renderPosts = (posts: any[]) => {
    const featuredPosts = posts.filter(post => post.featured);
    const regularPosts = posts.filter(post => !post.featured);

    return (
      <div className="space-y-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div>
            <h3 className="text-xl font-space font-bold text-neon-cyan mb-6 flex items-center gap-2">
              <span className="text-neon-green">★</span> Featured Posts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
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

                    {/* Read More Button */}
                    <Button 
                      className="ui-btn w-full bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 transition-all duration-300 hover:scale-105 group"
                      onClick={() => handleReadMore(post)}
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
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-xl font-space font-bold text-neon-cyan mb-6">Latest Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
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
                      onClick={() => handleReadMore(post)}
                    >
                      <span>Read More</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
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
            <span className="text-neon-purple text-glow animate-glow">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            Sharing insights, tutorials, and thoughts on web development, technology trends, 
            and lessons learned from real-world projects.
          </p>
        </div>

        {/* Tabbed Blog Sections */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid grid-cols-4 glass-card border border-white/20">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-neon-purple/30 data-[state=active]:text-neon-purple"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {renderPosts(category.posts)}
            </TabsContent>
          ))}
        </Tabs>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="ui-btn bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-0 neon-glow transition-all duration-300 hover:scale-105"
          >
            <span>View All Posts</span>
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
