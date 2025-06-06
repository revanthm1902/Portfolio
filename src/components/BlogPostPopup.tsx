
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-neon-purple/30">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-neon-green border-neon-green/50">
              {post.category}
            </Badge>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <DialogTitle className="text-3xl font-space text-foreground leading-tight">
            {post.title}
          </DialogTitle>
          
          <DialogDescription className="text-lg text-muted-foreground">
            {post.excerpt}
          </DialogDescription>

          {/* Meta Information */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-neon-purple/20 pb-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Revanth</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-4">
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
          </div>
        </DialogHeader>

        {/* Blog Content */}
        <div className="space-y-6 py-6">
          <div className="prose prose-invert max-w-none">
            <div className="text-foreground leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-neon-purple/20 pt-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">Tags</h4>
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

          {/* Actions */}
          <div className="border-t border-neon-purple/20 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
              >
                <Heart className="h-4 w-4 mr-2" />
                Like ({post.likes})
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment ({post.comments})
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-neon-green text-neon-green hover:bg-neon-green/10"
            >
              Share Article
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostPopup;
