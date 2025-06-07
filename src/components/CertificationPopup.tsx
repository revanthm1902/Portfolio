
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, ExternalLink, Download } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
  certificateUrl?: string;
}

interface CertificationPopupProps {
  certification: Certification;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationPopup = ({ certification, isOpen, onClose }: CertificationPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-2xl border-neon-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-space text-neon-purple flex items-center gap-3">
            <Award className="h-6 w-6" />
            {certification.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Certificate Image Placeholder */}
          <div className="w-full h-64 glass-card flex items-center justify-center border-neon-cyan/30">
            <div className="text-center space-y-2">
              <Award className="h-16 w-16 text-neon-cyan mx-auto" />
              <p className="text-muted-foreground">Certificate Preview</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Issued on {certification.date}</span>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Issuing Organization</h4>
              <p className="text-neon-cyan">{certification.issuer}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Credential ID</h4>
              <p className="font-mono text-neon-green">{certification.credentialId}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground">{certification.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-neon-green border-neon-green/50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {certification.verifyUrl && (
              <Button 
                variant="outline" 
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                asChild
              >
                <a href={certification.verifyUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Verify
                </a>
              </Button>
            )}
            {certification.certificateUrl && (
              <Button 
                className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                asChild
              >
                <a href={certification.certificateUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationPopup;
