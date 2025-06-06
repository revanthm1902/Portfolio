
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
}

interface CertificationPopupProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationPopup = ({ certification, isOpen, onClose }: CertificationPopupProps) => {
  if (!certification) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-2xl border-neon-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-neon-purple flex items-center gap-2">
            <Award className="h-6 w-6" />
            {certification.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-neon-cyan">
            {certification.issuer}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {certification.image && (
            <div className="w-full h-48 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
              <Award className="h-16 w-16 text-neon-green" />
            </div>
          )}
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Issued: {certification.date}</span>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Description</h4>
            <p className="text-muted-foreground leading-relaxed">
              {certification.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">Skills Covered</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {certification.credentialId && (
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Credential ID</h4>
              <p className="text-muted-foreground font-mono text-sm bg-background/50 p-2 rounded">
                {certification.credentialId}
              </p>
            </div>
          )}
          
          {certification.verificationUrl && (
            <Button 
              asChild
              className="ui-btn bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50"
            >
              <a 
                href={certification.verificationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Verify Certificate
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationPopup;
