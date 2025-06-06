
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After working on multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization that I wish I knew earlier.",
      content: "In this comprehensive guide, I share my experience building React applications that serve millions of users. From component architecture to state management strategies...",
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
      content: "The landscape of web development is changing rapidly with the introduction of AI-powered coding assistants. In this article, I explore how these tools are transforming...",
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
      content: "TypeScript has evolved significantly over the years, introducing powerful features that can help us write more expressive and type-safe code. In this deep dive...",
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
      content: "Real-time functionality has become essential for modern web applications. Whether it's chat applications, live notifications, or collaborative tools...",
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
      content: "Layout in CSS has come a long way from the days of floats and positioning. With CSS Grid and Flexbox, we have powerful tools for creating complex layouts...",
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
      content: "Deployment strategies have evolved significantly with the rise of containerization and cloud computing. In this comprehensive tutorial...",
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
            Sharing insights, tutorials, and thoughts on web development, technology trends, 
            and lessons learned from real-world projects.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-space font-bold text-neon-cyan mb-8 flex items-center gap-2">
            <span className="text-neon-green">★</span> Featured Posts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <Card 
                key={post.id}
                className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
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
    </section>
  );
};

export default BlogSection;
