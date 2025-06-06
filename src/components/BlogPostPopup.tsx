
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, Heart, MessageCircle, Tag } from 'lucide-react';

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
}

interface BlogPostPopupProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogPostPopup = ({ post, isOpen, onClose }: BlogPostPopupProps) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-4xl max-h-[90vh] overflow-y-auto border-neon-purple/30">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-neon-green border-neon-green/50">
              {post.category}
            </Badge>
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
          </div>
          
          <DialogTitle className="text-2xl md:text-3xl text-foreground leading-tight">
            {post.title}
          </DialogTitle>
          
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
        
        <div className="space-y-6 mt-6">
          <div className="prose prose-invert max-w-none">
            <div className="text-lg text-muted-foreground mb-6 italic border-l-4 border-neon-cyan pl-4">
              {post.excerpt}
            </div>
            
            <div className="text-foreground leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="border-t border-neon-purple/20 pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-4 w-4 text-neon-cyan" />
              <span className="text-sm font-medium text-foreground">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/30"
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
