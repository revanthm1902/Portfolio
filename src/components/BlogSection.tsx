import { Button } from '@/components/ui/button';
import { linkedinPosts } from '../data/linkedinPosts';

const BlogSection = () => {
  return (
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">My </span>
            <span className="text-neon-purple text-glow animate-glow">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            Insights, stories, and tips from my journey as a developer. Now featuring my latest LinkedIn posts!
          </p>
        </div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {linkedinPosts.map((post) => (
            <div key={post.id} className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 group overflow-hidden flex flex-col">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-xl" />
              )}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-lg font-space text-foreground group-hover:text-neon-purple transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  
                </div>
                <Button
                  className="ui-btn w-full bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 transition-all duration-300 hover:scale-105 group mt-auto"
                  asChild
                >
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      Read More
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="ui-btn bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-0 neon-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.linkedin.com/in/modalavalasa-revanth/" target="_blank" rel="noopener noreferrer">
              <span>View All Posts on LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
