import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeSectionProps {
  onBack?: () => void;
}

const ResumeSection = ({ onBack }: ResumeSectionProps) => {
  const [viewMode, setViewMode] = useState<'preview' | 'full'>('preview');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Revanth_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewFull = () => {
    setViewMode('full');
  };

  const handleBackToPreview = () => {
    setViewMode('preview');
  };

  if (viewMode === 'full') {
    return (
      <div className="min-h-screen bg-background">
        {/* Full Screen PDF Viewer */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 border-gray-200/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToPreview}
                  className="hover:bg-neon-purple/20"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Preview
                </Button>
                <span className="text-lg font-medium text-foreground">Resume - Full View</span>
              </div>
              <Button
                onClick={handleDownload}
                className="bg-neon-purple hover:bg-neon-purple/90 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="pt-16 h-screen">
          <iframe
            src="/Resume.pdf"
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-background"
    >
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-neon-purple/10 rounded-full mb-6">
              <FileText className="h-10 w-10 text-neon-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Resume
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              View and download my professional resume showcasing my skills, experience, and achievements in software development.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleViewFull}
              size="lg"
              className="bg-neon-purple hover:bg-neon-purple/90 text-white px-8 py-3"
            >
              <Eye className="h-5 w-5 mr-2" />
              View Full Resume
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-8 py-3"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Resume Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Resume Preview</h3>
              <p className="text-sm text-muted-foreground">Click "View Full Resume" to see the complete document</p>
            </div>
            <div className="p-6">
              <iframe
                src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-96 border border-border rounded-lg"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      {onBack && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="fixed bottom-8 left-8 z-40"
        >
          <Button
            onClick={onBack}
            variant="ghost"
            size="lg"
            className="bg-background/80 backdrop-blur-xl border border-border hover:bg-neon-purple/20"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Portfolio
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ResumeSection;
