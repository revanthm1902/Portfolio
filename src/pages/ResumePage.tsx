import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'Resume - Revanth M';
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Revanth_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 border-gray-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToPortfolio}
                className="hover:bg-neon-purple/20"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Portfolio
              </Button>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-neon-purple" />
                <span className="text-lg font-medium text-foreground">Resume</span>
              </div>
            </div>
            <Button
              onClick={handleDownload}
              className="bg-neon-purple hover:bg-neon-purple/90 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Resume PDF</h3>
              <p className="text-sm text-muted-foreground">View and interact with the full resume document</p>
            </div>
            <div className="p-6">
              <iframe
                src="/Resume.pdf"
                className="w-full h-[800px] border border-border rounded-lg"
                title="Resume PDF"
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-neon-purple hover:bg-neon-purple/90 text-white px-8 py-3"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={handleBackToPortfolio}
              variant="outline"
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
