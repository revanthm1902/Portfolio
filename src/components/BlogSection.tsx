import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import Modal from './Modal';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After working on multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization that I wish I knew earlier.",
      content: `In this comprehensive guide, I share my experience building React applications that serve millions of users. From component architecture to state management strategies, I'll walk you through the key decisions that can make or break your application's scalability.

## Key Takeaways

### 1. Component Architecture
The foundation of any scalable React application lies in its component architecture. I've found that following a clear hierarchy and separation of concerns is crucial. Here's what I've learned:

- **Container vs Presentational Components**: Keep your business logic separate from your UI components
- **Custom Hooks**: Extract reusable logic into custom hooks for better maintainability
- **Context API**: Use React Context strategically for global state that doesn't change frequently

### 2. State Management
Choosing the right state management solution can significantly impact your application's performance and maintainability:

- **Local State**: Use useState for component-specific state
- **Global State**: Consider Zustand or Redux Toolkit for complex global state
- **Server State**: Implement React Query or SWR for server state management

### 3. Performance Optimization
Performance is crucial for user experience, especially in large applications:

- **Code Splitting**: Implement dynamic imports for route-based code splitting
- **Memoization**: Use React.memo, useMemo, and useCallback strategically
- **Bundle Analysis**: Regularly analyze your bundle size and optimize accordingly

## Real-World Examples

Throughout this article, I'll share real-world examples from projects I've worked on, including:
- E-commerce platforms serving 100k+ users
- Dashboard applications with complex data visualization
- Real-time collaborative tools

Stay tuned for detailed code examples and implementation strategies!`,
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
      content: `The landscape of web development is changing rapidly with the introduction of AI-powered coding assistants. In this article, I explore how these tools are transforming our workflow and what it means for the future of software development.

## The AI Revolution in Coding

### Current State
AI coding tools have evolved from simple autocomplete to sophisticated code generation and analysis. Tools like GitHub Copilot, ChatGPT, and Claude are becoming indispensable for many developers.

### Benefits
- **Increased Productivity**: Generate boilerplate code and common patterns quickly
- **Learning Tool**: AI can explain complex concepts and suggest best practices
- **Code Review**: AI can help identify potential issues and suggest improvements

### Challenges
- **Over-reliance**: Developers might become too dependent on AI suggestions
- **Code Quality**: AI-generated code might not always follow best practices
- **Security**: AI might suggest code with security vulnerabilities

## Best Practices for AI-Assisted Development

1. **Use AI as a Tool, Not a Replacement**: AI should augment your skills, not replace them
2. **Always Review Generated Code**: Don't blindly accept AI suggestions
3. **Understand the Code**: Make sure you understand what the AI is generating
4. **Customize Prompts**: Learn to write effective prompts for better results

## The Future Outlook

As AI tools continue to evolve, we can expect:
- More sophisticated code generation
- Better integration with development workflows
- AI-powered testing and debugging
- Personalized coding assistants

The key is to embrace these tools while maintaining our critical thinking and problem-solving skills.`,
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
      content: `TypeScript has evolved significantly over the years, introducing powerful features that can help us write more expressive and type-safe code. In this deep dive, I'll explore advanced patterns that can take your TypeScript skills to the next level.

## Advanced Type Patterns

### Conditional Types
Conditional types allow you to create types that depend on other types:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
\`\`\`

### Mapped Types
Mapped types let you transform existing types:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

### Template Literal Types
Template literal types enable string manipulation at the type level:

\`\`\`typescript
type EventName<T extends string> = \`\${T}Changed\`;
type Concat<S1 extends string, S2 extends string> = \`\${S1}\${S2}\`;
\`\`\`

## Practical Applications

These advanced patterns are particularly useful for:
- Building type-safe APIs
- Creating flexible component props
- Implementing state management systems
- Building validation libraries

## Best Practices

1. **Start Simple**: Don't over-engineer your types
2. **Document Complex Types**: Add comments for complex type definitions
3. **Test Your Types**: Use TypeScript's type checking to verify your types work correctly
4. **Gradual Adoption**: Introduce advanced patterns gradually into your codebase

Remember, the goal is to make your code more maintainable and catch errors at compile time, not to create the most complex type system possible.`,
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
      content: `Real-time functionality has become essential for modern web applications. Whether it's chat applications, live notifications, or collaborative tools, users expect instant updates. In this comprehensive guide, I'll show you how to build robust real-time applications using WebSockets and Node.js.

## Understanding WebSockets

WebSockets provide a persistent connection between client and server, enabling real-time bidirectional communication. Unlike HTTP requests, WebSockets maintain an open connection, allowing for instant data transfer.

## Setting Up Socket.io

Socket.io is a popular library that simplifies WebSocket implementation:

\`\`\`javascript
// Server setup
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
\`\`\`

## Common Use Cases

### Chat Applications
Real-time messaging with features like typing indicators and read receipts.

### Live Dashboards
Real-time data visualization for monitoring systems and analytics.

### Collaborative Tools
Multi-user editing with conflict resolution and presence indicators.

## Best Practices

1. **Error Handling**: Implement robust error handling for connection issues
2. **Scalability**: Use Redis for horizontal scaling
3. **Security**: Implement authentication and authorization
4. **Performance**: Optimize message size and frequency

## Advanced Features

- **Rooms**: Organize users into groups for targeted messaging
- **Namespaces**: Separate different parts of your application
- **Middleware**: Add authentication and validation layers
- **Acknowledgments**: Ensure message delivery with callbacks

Real-time applications can significantly enhance user experience when implemented correctly.`,
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
      content: `Layout in CSS has come a long way from the days of floats and positioning. With CSS Grid and Flexbox, we have powerful tools for creating complex layouts. But when should you use which? Let me break down the differences and help you make the right choice.

## CSS Grid vs Flexbox

### CSS Grid
CSS Grid is designed for two-dimensional layouts - both rows and columns.

**Best for:**
- Page layouts
- Complex grid systems
- Areas that need to be defined
- When you need both row and column control

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

### Flexbox
Flexbox is designed for one-dimensional layouts - either rows or columns.

**Best for:**
- Navigation bars
- Card layouts
- Centering content
- When you need flexible sizing

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
\`\`\`

## When to Use Each

### Use Grid When:
- You need a complex layout with both rows and columns
- You want to define specific areas of your layout
- You're building a dashboard or card layout
- You need precise control over both dimensions

### Use Flexbox When:
- You're building a navigation menu
- You need to center content
- You're working with a single row or column
- You need flexible sizing without complex positioning

## Combining Both

Often, the best approach is to combine both:
- Use Grid for the overall page layout
- Use Flexbox for the content within grid areas

This gives you the best of both worlds - the structure of Grid with the flexibility of Flexbox.`,
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
      content: `Deployment strategies have evolved significantly with the rise of containerization and cloud computing. In this comprehensive tutorial, I'll walk you through deploying a full-stack application using Docker and AWS, covering everything from containerization to production deployment.

## Containerization with Docker

### Dockerfile Best Practices
\`\`\`dockerfile
# Multi-stage build for smaller images
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Docker Compose for Development
\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
\`\`\`

## AWS Deployment

### ECS (Elastic Container Service)
- **Fargate**: Serverless container management
- **EC2**: More control over infrastructure
- **Load Balancing**: Distribute traffic across containers
- **Auto Scaling**: Automatically scale based on demand

### Security Best Practices
1. **IAM Roles**: Use least privilege principle
2. **Secrets Management**: Use AWS Secrets Manager
3. **Network Security**: Configure security groups properly
4. **Container Security**: Scan images for vulnerabilities

### Monitoring and Logging
- **CloudWatch**: Monitor application metrics
- **X-Ray**: Trace requests across services
- **CloudTrail**: Audit API calls
- **ELK Stack**: Centralized logging

## CI/CD Pipeline

Automate your deployment process:
1. **Build**: Create Docker images
2. **Test**: Run automated tests
3. **Scan**: Security and vulnerability scanning
4. **Deploy**: Automated deployment to staging/production

## Cost Optimization

- **Reserved Instances**: For predictable workloads
- **Spot Instances**: For flexible workloads
- **Auto Scaling**: Scale down during low usage
- **Resource Tagging**: Track costs by project

Remember, the goal is to create a reliable, scalable, and maintainable deployment pipeline that can grow with your application.`,
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
                    onClick={() => setSelectedPost(post)}
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
                    onClick={() => setSelectedPost(post)}
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

      {/* Blog Post Modal */}
      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title || ''}
        size="xl"
      >
        {selectedPost && (
          <div className="space-y-6">
            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-muted-foreground border-b border-white/10 pb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedPost.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <Badge variant="outline" className="text-neon-green border-neon-green/50">
                {selectedPost.category}
              </Badge>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{selectedPost.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{selectedPost.likes} likes</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{selectedPost.comments} comments</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm font-mono bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {selectedPost.content}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Published on {new Date(selectedPost.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  <Heart className="h-4 w-4 mr-1" />
                  Like
                </Button>
                <Button size="sm" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Comment
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default BlogSection;
