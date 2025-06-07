
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, Heart, MessageCircle, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  author?: string;
}

interface BlogPostPopupProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

const BlogPostPopup = ({ post, isOpen, onClose }: BlogPostPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-4xl max-h-[80vh] overflow-y-auto border-neon-purple/30">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-neon-green border-neon-green/50">
              {post.category}
            </Badge>
          </div>
          
          <DialogTitle className="text-2xl md:text-3xl font-space text-foreground leading-tight">
            {post.title}
          </DialogTitle>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author || 'Alex'}</span>
            </div>
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
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>{post.likes} likes</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments} comments</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Featured Image Placeholder */}
          <div className="w-full h-48 glass-card flex items-center justify-center border-neon-cyan/30">
            <div className="text-center space-y-2">
              <div className="text-4xl">📝</div>
              <p className="text-muted-foreground">Blog Post Image</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-lg text-muted-foreground mb-6 p-4 glass-card border-l-4 border-neon-purple">
              {post.excerpt}
            </div>
            
            <div className="text-foreground leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-sm font-semibold text-foreground mb-3">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-neon-cyan/20 text-neon-cyan rounded border border-neon-cyan/30 hover:bg-neon-cyan/30 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostPopup;
