import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, initializeEmailJS, validateEmailJSConfig } from '@/lib/emailjs';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailjsStatus, setEmailjsStatus] = useState<'checking' | 'configured' | 'not-configured'>('checking');
  const { toast } = useToast();

  // Initialize EmailJS and validate configuration
  useEffect(() => {
    const checkEmailJSConfig = () => {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY' && publicKey !== 'your_public_key_here') {
        setEmailjsStatus('configured');
        initializeEmailJS();
      } else {
        setEmailjsStatus('not-configured');
      }
    };

    checkEmailJSConfig();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    
    // Check if EmailJS is configured
    if (emailjsStatus === 'not-configured') {
      setSubmissionStatus('error');
      toast({
        title: "EmailJS Not Configured",
        description: "Please set up EmailJS configuration. Create a .env file with VITE_EMAILJS_PUBLIC_KEY.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('Sending contact email with values:', values);
      
      const response = await sendContactEmail({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setSubmissionStatus('success');
        toast({
          title: "Message sent successfully! 🚀",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });

        form.reset();
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error: any) {
      console.error('Error sending message:', error);
      setSubmissionStatus('error');
      
      // Show more detailed error information
      const errorMessage = error.message || "Something went wrong. Please try again or contact me directly.";
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });

      // Log additional debugging info
      console.log('EmailJS Debug Info:', {
        serviceId: 'service_qixofr6',
        templateId: 'template_m73d3jg',
        hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        publicKeyLength: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.length || 0,
        error: error
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'revanthm051@gmail.com',
      href: 'mailto:revanthm051@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 73374 26334',
      href: 'tel:+91 73374 26334'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/username',
      color: 'hover:text-neon-purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/username',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/username',
      color: 'hover:text-neon-green'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: 'https://discord.com/users/username',
      color: 'hover:text-neon-purple'
    }
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-green/20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 18}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">Let's </span>
            <span className="text-neon-green text-glow animate-glow">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left px-4">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card hover:bg-white/20 transition-all duration-500 border border-white/20">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl sm:text-3xl font-space text-foreground flex items-center gap-3">
                  <Send className="h-6 w-6 sm:h-8 sm:w-8 text-neon-cyan" />
                  Send me a message
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Status Indicators */}
                {submissionStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400">Message sent successfully!</span>
                  </div>
                )}
                
                {submissionStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <span className="text-red-400">Failed to send message. Please try again.</span>
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neon-cyan font-mono text-sm sm:text-base">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors h-12 sm:h-14"
                                disabled={isSubmitting}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neon-cyan font-mono text-sm sm:text-base">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                type="email"
                                className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors h-12 sm:h-14"
                                disabled={isSubmitting}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neon-cyan font-mono text-sm sm:text-base">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What's this about?" 
                              className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors h-12 sm:h-14"
                              disabled={isSubmitting}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neon-cyan font-mono text-sm sm:text-base">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project or just say hi!"
                              className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors min-h-[120px] sm:min-h-[140px] resize-none"
                              disabled={isSubmitting}
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-muted-foreground text-sm">
                            Minimum 10 characters required.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || emailjsStatus === 'not-configured'}
                        className="ui-btn w-full bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow transition-all duration-300 hover:scale-105 h-12 sm:h-14 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        size="lg"
                      >
                        <span className="flex items-center gap-2 sm:gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </span>
                      </Button>
                      
                      {/* EmailJS Status */}
                      <div className="text-xs sm:text-sm text-muted-foreground text-center space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <span>EmailJS Status:</span>
                          {emailjsStatus === 'checking' && (
                            <span className="text-yellow-400">🔄 Checking...</span>
                          )}
                          {emailjsStatus === 'configured' && (
                            <span className="text-green-400">✅ Configured</span>
                          )}
                          {emailjsStatus === 'not-configured' && (
                            <span className="text-red-400">❌ Not Configured</span>
                          )}
                        </div>
                        {emailjsStatus === 'not-configured' && (
                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 space-y-2">
                            <div className="text-red-400 font-mono text-xs">
                              Create .env file with VITE_EMAILJS_PUBLIC_KEY
                            </div>
                            <div className="text-red-400/80 text-xs">
                              Check SETUP_EMAILJS.md for instructions
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <Card className="glass-card hover:bg-white/20 transition-all duration-500 border border-white/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-space text-foreground flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-neon-cyan" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card hover:bg-white/20 transition-all duration-300 hover:scale-105 group rounded-lg"
                  >
                    <div className="p-2 sm:p-3 glass-card rounded-lg">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-neon-cyan group-hover:animate-bounce-slow" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-neon-cyan text-xs sm:text-sm">{item.label}</div>
                      <div className="text-foreground font-medium text-sm sm:text-base">{item.value}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card hover:bg-white/20 transition-all duration-500 border border-white/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-space text-foreground">
                  Follow Me
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Connect with me on social media
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 sm:p-4 glass-card ${social.color} transition-all duration-300 hover:scale-110 group flex flex-col items-center gap-2 rounded-lg border border-white/10 hover:border-neon-cyan/30`}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                      <span className="text-xs sm:text-sm font-mono">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Time */}
            <Card className="glass-card hover:bg-white/20 transition-all duration-500 border border-white/20">
              <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <div className="text-3xl sm:text-4xl font-bold text-neon-green">{"< 24h"}</div>
                <div className="text-base sm:text-lg font-space text-foreground">Response Time</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  I typically respond to all messages within 24 hours.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
