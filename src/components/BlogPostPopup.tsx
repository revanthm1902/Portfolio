
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, Heart, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      <DialogContent className="glass-card max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="text-neon-cyan hover:bg-neon-cyan/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Badge variant="outline" className="text-neon-green border-neon-green/50">
              {post.category}
            </Badge>
          </div>
          
          <DialogTitle className="text-3xl font-space text-foreground leading-tight">
            {post.title}
          </DialogTitle>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>{post.likes} likes</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments} comments</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 pt-6">
          {/* Excerpt */}
          <div className="p-4 glass-card border-l-4 border-neon-cyan">
            <p className="text-lg text-muted-foreground italic">{post.excerpt}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-neon-cyan">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm font-mono bg-neon-cyan/20 text-neon-cyan rounded border border-neon-cyan/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Engagement Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-neon-purple/30">
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
              <Heart className="h-4 w-4 mr-2" />
              Like ({post.likes})
            </Button>
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
              <MessageCircle className="h-4 w-4 mr-2" />
              Comment ({post.comments})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostPopup;
