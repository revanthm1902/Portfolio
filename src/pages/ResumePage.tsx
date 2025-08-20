import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
  const navigate = useNavigate();
  const [pdfError, setPdfError] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);

  useEffect(() => {
    // Set page title
    document.title = 'Resume - Revanth M';
  }, []);

  const handleDownload = async () => {
    try {
      // First try to fetch the PDF to ensure it exists
      const response = await fetch('/Resume.pdf');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Revanth_M_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('PDF not found');
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: try direct link
      window.open('/Resume.pdf', '_blank');
    }
  };

  const handlePdfLoad = () => {
    setPdfLoading(false);
    setPdfError(false);
  };

  const handlePdfError = () => {
    setPdfLoading(false);
    setPdfError(true);
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
              {pdfError ? (
                <div className="flex flex-col items-center justify-center h-[800px] text-center">
                  <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">PDF Preview Unavailable</h3>
                  <p className="text-muted-foreground mb-6">
                    Unable to display the PDF preview. You can download the resume or view it in a new tab.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleDownload}
                      size="lg"
                      className="bg-neon-purple hover:bg-neon-purple/90 text-white px-8 py-3"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Resume
                    </Button>
                    <Button
                      onClick={() => window.open('/Resume.pdf', '_blank')}
                      variant="outline"
                      size="lg"
                      className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      Open in New Tab
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {pdfLoading && (
                    <div className="flex items-center justify-center h-[800px]">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-purple mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Loading resume...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                    className={`w-full h-[800px] border border-border rounded-lg ${pdfLoading ? 'hidden' : ''}`}
                    title="Resume PDF"
                    onLoad={handlePdfLoad}
                    onError={handlePdfError}
                    allow="fullscreen"
                  />
                </>
              )}
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
