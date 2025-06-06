
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink, Download } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  description: string;
  certificateUrl?: string;
  verifyUrl?: string;
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
      <DialogContent className="glass-card max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-space text-neon-purple flex items-center gap-3">
            <Award className="h-8 w-8" />
            {certification.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Certificate Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg border border-neon-purple/30 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Award className="h-16 w-16 text-neon-purple mx-auto" />
              <p className="text-lg font-semibold text-foreground">{certification.name}</p>
              <p className="text-neon-cyan">{certification.issuer}</p>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">Issuer</h3>
                <p className="text-foreground">{certification.issuer}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">Issue Date</h3>
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-4 w-4" />
                  {certification.date}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">Credential ID</h3>
                <code className="text-sm bg-neon-purple/20 px-2 py-1 rounded text-neon-green">
                  {certification.credentialId}
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-neon-green border-neon-green/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {certification.description}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-neon-purple/30">
            {certification.certificateUrl && (
              <Button className="ui-btn bg-neon-purple hover:bg-neon-purple/80">
                <Download className="h-4 w-4 mr-2" />
                Download Certificate
              </Button>
            )}
            
            {certification.verifyUrl && (
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                <ExternalLink className="h-4 w-4 mr-2" />
                Verify Certificate
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationPopup;
