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
      // Open Google Drive file for download
      window.open('https://drive.google.com/file/d/1klIKGEtIvxDn1sQsTxPL0Vc7FBwwxtWB/view', '_blank');
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: try direct link
      window.open('https://drive.google.com/file/d/1klIKGEtIvxDn1sQsTxPL0Vc7FBwwxtWB/view', '_blank');
    }
  };

  const handleViewInDrive = () => {
    // Open Google Drive file view
    window.open('https://drive.google.com/file/d/1klIKGEtIvxDn1sQsTxPL0Vc7FBwwxtWB/view', '_blank');
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
      {/* Responsive Header */}
  <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b dark:border-white/10 border-gray-200/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToPortfolio}
                className="hover:bg-neon-purple/20 text-xs sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-neon-purple" />
                <span className="text-base sm:text-lg font-medium text-foreground">Resume</span>
              </div>
            </div>
            <Button
              onClick={handleDownload}
              className="bg-neon-purple hover:bg-neon-purple/90 text-white text-xs sm:text-sm"
            >
              <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-14 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8"
        >

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-muted/50 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-border">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Resume PDF</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">View and interact with the full resume document</p>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              {pdfError ? (
                <div className="flex flex-col items-center justify-center h-[400px] sm:h-[600px] lg:h-[800px] text-center px-4">
                  <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 text-red-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">PDF Preview Unavailable</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
                    Unable to display the PDF preview. You can download the resume or view it in Google Drive.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md">
                    <Button
                      onClick={handleDownload}
                      size="lg"
                      className="bg-neon-purple hover:bg-neon-purple/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Download Resume
                    </Button>
                    <Button
                      onClick={handleViewInDrive}
                      variant="outline"
                      size="lg"
                      className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      View in Drive
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {pdfLoading && (
                    <div className="flex items-center justify-center h-[400px] sm:h-[600px] lg:h-[800px]">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-neon-purple mx-auto mb-4"></div>
                        <p className="text-sm sm:text-base text-muted-foreground">Loading resume...</p>
                      </div>
                    </div>
                  )}
                                     <iframe
                     src="https://drive.google.com/file/d/1klIKGEtIvxDn1sQsTxPL0Vc7FBwwxtWB/preview"
                     className={`w-full h-[400px] sm:h-[600px] lg:h-[800px] border border-border rounded-lg ${pdfLoading ? 'hidden' : ''}`}
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8"
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-neon-purple hover:bg-neon-purple/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={handleViewInDrive}
              variant="outline"
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              View in Drive
            </Button>
            <Button
              onClick={handleBackToPortfolio}
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
