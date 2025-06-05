
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
}

interface CertificateModalProps {
  certificate: Certificate;
  children: React.ReactNode;
}

const CertificateModal = ({ certificate, children }: CertificateModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl glass-card border-neon-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-neon-purple flex items-center gap-2">
            <Award className="h-6 w-6" />
            {certificate.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Certificate Image */}
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={certificate.image} 
                alt={certificate.title}
                className="w-full h-auto rounded-lg border border-neon-cyan/30 group-hover:border-neon-cyan/50 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {certificate.verificationUrl && (
              <Button
                variant="outline"
                className="w-full ui-btn border-neon-green text-neon-green hover:bg-neon-green/10"
                onClick={() => window.open(certificate.verificationUrl, '_blank')}
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Verify Certificate
                </span>
              </Button>
            )}
          </div>

          {/* Certificate Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="h-4 w-4" />
                <span className="font-medium">{certificate.issuer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{certificate.date}</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground leading-relaxed">
                {certificate.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Skills Covered</h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
