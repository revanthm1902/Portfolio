import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_qixofr6',
  TEMPLATE_ID: 'template_m73d3jg',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<any> => {
  // Validate configuration first
  if (!validateEmailJSConfig()) {
    throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'revanthm051@gmail.com',
    time: new Date().toLocaleString(),
  };

  console.log('EmailJS Config:', {
    serviceId: EMAILJS_CONFIG.SERVICE_ID,
    templateId: EMAILJS_CONFIG.TEMPLATE_ID,
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY ? '***' : 'NOT_SET',
    templateParams
  });

  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('EmailJS Success Response:', response);
    return response;
  } catch (error: any) {
    console.error('EmailJS Error Details:', {
      error: error,
      message: error.message,
      text: error.text,
      status: error.status
    });
    
    // Provide more specific error messages
    if (error.status === 400) {
      throw new Error('Invalid template or service configuration. Please check your EmailJS setup.');
    } else if (error.status === 401) {
      throw new Error('Authentication failed. Please check your EmailJS public key.');
    } else if (error.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else if (error.text) {
      throw new Error(`EmailJS Error: ${error.text}`);
    } else {
      throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
    }
  }
};

// Initialize EmailJS (optional)
export const initializeEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  } else {
    console.warn('EmailJS public key not configured');
  }
};

// Validate EmailJS configuration
export const validateEmailJSConfig = (): boolean => {
  const isValid = 
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

  if (!isValid) {
    console.warn('EmailJS configuration is incomplete:', {
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      hasPublicKey: !!EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
    });
  }

  return isValid;
};

// Test EmailJS connection
export const testEmailJSConnection = async (): Promise<boolean> => {
  try {
    if (!validateEmailJSConfig()) {
      return false;
    }

    // Try to send a test email
    const testParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      subject: 'Test Email',
      message: 'This is a test email from your portfolio.',
      to_email: 'revanthm051@gmail.com',
      time: new Date().toLocaleString(),
    };

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('EmailJS connection test successful');
    return true;
  } catch (error) {
    console.error('EmailJS connection test failed:', error);
    return false;
  }
}; 