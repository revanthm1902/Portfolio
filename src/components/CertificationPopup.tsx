
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink, Download } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

interface CertificationPopupProps {
  certification: Certification;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationPopup = ({ certification, isOpen, onClose }: CertificationPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-card border-neon-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-space text-neon-purple flex items-center gap-2">
            <Award className="h-6 w-6" />
            {certification.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Certificate Image */}
          <div className="w-full h-64 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg flex items-center justify-center border border-neon-purple/30">
            <div className="text-center space-y-2">
              <Award className="h-16 w-16 text-neon-purple mx-auto" />
              <p className="text-neon-cyan font-mono">Certificate Preview</p>
              <p className="text-sm text-muted-foreground">Certificate image would be displayed here</p>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Issued on {certification.date}</span>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Issuing Organization</h3>
              <p className="text-neon-cyan font-medium">{certification.issuer}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{certification.description}</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Skills Demonstrated</h3>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-neon-green border-neon-green/50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {certification.credentialUrl && (
                <Button 
                  variant="outline" 
                  className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                  onClick={() => window.open(certification.credentialUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Credential
                </Button>
              )}
              <Button 
                variant="outline" 
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Certificate
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationPopup;
