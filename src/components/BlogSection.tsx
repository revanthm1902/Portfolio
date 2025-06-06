
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight, Trophy, Code, Briefcase } from 'lucide-react';
import BlogPostPopup from './BlogPostPopup';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After working on multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization that I wish I knew earlier.",
      content: `In this comprehensive guide, I share my experience building React applications that serve millions of users. From component architecture to state management strategies, here's what I've learned in the trenches.

## Component Architecture

Building scalable React applications starts with good component architecture. I've found that following these principles helps maintain clean and maintainable code:

1. **Single Responsibility Principle**: Each component should have one clear purpose
2. **Composition over Inheritance**: Use composition to build complex UIs
3. **Prop Drilling Solutions**: Use Context API or state management libraries wisely

## State Management

State management is crucial for large applications. Here are the strategies I've used:

- **Local State**: Use useState for component-specific state
- **Global State**: Use Redux or Zustand for application-wide state
- **Server State**: Use React Query for server data management

## Performance Optimization

Performance becomes critical as applications grow:

- **Code Splitting**: Use React.lazy() and Suspense
- **Memoization**: Use React.memo() and useMemo() strategically
- **Virtual Scrolling**: For large lists
- **Image Optimization**: Use modern formats and lazy loading

## Testing Strategy

A solid testing strategy is essential:

- **Unit Tests**: Jest and React Testing Library
- **Integration Tests**: Test component interactions
- **E2E Tests**: Cypress or Playwright for user workflows

## Deployment and Monitoring

Don't forget about production:

- **CI/CD Pipelines**: Automate testing and deployment
- **Error Monitoring**: Use Sentry or similar tools
- **Performance Monitoring**: Track Core Web Vitals

These lessons have helped me build better React applications. Remember, scalability isn't just about handling more users - it's about maintaining code quality as your team and codebase grow.`,
      category: "React",
      section: "tutorials",
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
      title: "AWS Certified Solutions Architect Achievement",
      excerpt: "Successfully obtained AWS Certified Solutions Architect certification, demonstrating expertise in cloud architecture and AWS services.",
      content: `I'm excited to share that I've successfully obtained the AWS Certified Solutions Architect certification! This achievement represents months of dedicated study and hands-on practice with AWS services.

## What I Learned

The certification journey covered:

- **EC2 and Auto Scaling**: Understanding compute services and scaling strategies
- **Storage Solutions**: S3, EBS, EFS, and when to use each
- **Networking**: VPC, subnets, security groups, and load balancers
- **Databases**: RDS, DynamoDB, and database migration strategies
- **Security**: IAM, encryption, and security best practices
- **Cost Optimization**: Right-sizing resources and cost management

## Real-World Applications

This knowledge has already proven valuable in recent projects:

1. **Migrated Legacy Application**: Successfully moved a monolithic application to AWS using microservices architecture
2. **Cost Optimization**: Reduced infrastructure costs by 40% through right-sizing and reserved instances
3. **Disaster Recovery**: Implemented multi-region backup strategies

## Study Resources

For anyone considering this certification:

- AWS Official Training
- A Cloud Guru courses
- Hands-on labs in AWS Free Tier
- Practice exams
- AWS Whitepapers

The journey was challenging but incredibly rewarding. Looking forward to applying these skills in upcoming cloud projects!`,
      category: "AWS",
      section: "achievements",
      readTime: "5 min",
      publishDate: "2024-03-20",
      views: 1200,
      likes: 89,
      comments: 15,
      featured: false,
      tags: ["AWS", "Certification", "Cloud", "Achievement"]
    },
    {
      id: 3,
      title: "E-Commerce Platform with Microservices",
      excerpt: "Built a scalable e-commerce platform using microservices architecture, handling 10k+ concurrent users with 99.9% uptime.",
      content: `This project showcases a complete e-commerce platform built using microservices architecture. The system handles high traffic loads while maintaining excellent performance and reliability.

## Architecture Overview

The platform consists of several microservices:

- **User Service**: Authentication and user management
- **Product Service**: Product catalog and inventory
- **Order Service**: Order processing and management
- **Payment Service**: Payment processing integration
- **Notification Service**: Email and SMS notifications
- **Analytics Service**: User behavior and sales analytics

## Technology Stack

**Backend:**
- Node.js with Express
- MongoDB for product data
- PostgreSQL for transactional data
- Redis for caching
- RabbitMQ for message queuing

**Frontend:**
- React with TypeScript
- Redux for state management
- Material-UI for components
- React Query for API calls

**Infrastructure:**
- Docker containers
- Kubernetes orchestration
- AWS cloud services
- CI/CD with GitHub Actions

## Key Features

1. **Real-time Inventory Management**: WebSocket connections for live stock updates
2. **Payment Integration**: Stripe and PayPal support
3. **Search and Filtering**: Elasticsearch for fast product search
4. **Admin Dashboard**: Comprehensive analytics and management
5. **Mobile Responsive**: PWA capabilities for mobile users

## Performance Metrics

- **Load Capacity**: 10,000+ concurrent users
- **Response Time**: Average 200ms API response
- **Uptime**: 99.9% availability
- **Database**: Sub-100ms query performance

## Challenges and Solutions

**Challenge**: Managing distributed transactions
**Solution**: Implemented Saga pattern for eventual consistency

**Challenge**: Service discovery and communication
**Solution**: Used Kubernetes service mesh with Istio

**Challenge**: Monitoring and debugging
**Solution**: Centralized logging with ELK stack and distributed tracing

This project demonstrates the power of microservices when implemented correctly, providing scalability, maintainability, and resilience.`,
      category: "Full Stack",
      section: "projects",
      readTime: "12 min",
      publishDate: "2024-02-15",
      views: 3200,
      likes: 156,
      comments: 31,
      featured: true,
      tags: ["Microservices", "E-commerce", "Node.js", "React", "AWS"]
    }
  ];

  const achievements = blogPosts.filter(post => post.section === "achievements");
  const tutorials = blogPosts.filter(post => post.section === "tutorials");
  const projects = blogPosts.filter(post => post.section === "projects");

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };

  const renderPostCard = (post: any, index: number) => (
    <Card 
      key={post.id}
      className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => handlePostClick(post)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-neon-green border-neon-green/50">
            {post.category}
          </Badge>
          {post.featured && (
            <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50">
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
          onClick={(e) => {
            e.stopPropagation();
            handlePostClick(post);
          }}
        >
          <span className="flex items-center gap-2">
            Read More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );

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
            Sharing insights, tutorials, achievements, and project showcases from my journey as a developer.
          </p>
        </div>

        {/* Tabbed Sections */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-card mb-8">
            <TabsTrigger value="all" className="text-neon-cyan">All Posts</TabsTrigger>
            <TabsTrigger value="tutorials" className="text-neon-green">
              <Code className="h-4 w-4 mr-2" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-neon-purple">
              <Briefcase className="h-4 w-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="achievements" className="text-neon-orange">
              <Trophy className="h-4 w-4 mr-2" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => renderPostCard(post, index))}
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-space text-neon-green mb-4">Development Tutorials</h3>
              <p className="text-muted-foreground">In-depth guides and tutorials on web development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.map((post, index) => renderPostCard(post, index))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-space text-neon-purple mb-4">Project Showcases</h3>
              <p className="text-muted-foreground">Detailed breakdowns of my development projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((post, index) => renderPostCard(post, index))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-space text-neon-orange mb-4">Achievements & Milestones</h3>
              <p className="text-muted-foreground">Certifications, awards, and career milestones</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((post, index) => renderPostCard(post, index))}
            </div>
          </TabsContent>
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

      <BlogPostPopup 
        post={selectedPost}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default BlogSection;
