
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    
    try {
      // Call Supabase Edge Function to send email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          to: 'revanthm051@gmail.com'
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully! 🚀",
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at revanthm051@gmail.com",
        variant: "destructive",
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
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
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
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
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
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">Let's </span>
            <span className="text-neon-green text-glow animate-glow">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card hover:bg-white/20 transition-all duration-500">
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl font-space text-foreground flex items-center gap-3">
                  <Send className="h-8 w-8 text-neon-cyan" />
                  Send me a message
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neon-cyan font-mono">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors"
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
                            <FormLabel className="text-neon-cyan font-mono">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                type="email"
                                className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors"
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
                          <FormLabel className="text-neon-cyan font-mono">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What's this about?" 
                              className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors"
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
                          <FormLabel className="text-neon-cyan font-mono">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project or just say hi!"
                              className="glass-card border-neon-purple/30 focus:border-neon-cyan transition-colors min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-muted-foreground">
                            Minimum 10 characters required.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="ui-btn w-full bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow transition-all duration-300 hover:scale-105"
                      size="lg"
                    >
                      <span className="flex items-center gap-2">
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
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-card hover:bg-white/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-space text-foreground flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-neon-cyan" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 glass-card hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 glass-card">
                      <item.icon className="h-5 w-5 text-neon-cyan group-hover:animate-bounce-slow" />
                    </div>
                    <div>
                      <div className="font-mono text-neon-cyan text-sm">{item.label}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card hover:bg-white/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-space text-foreground">
                  Follow Me
                </CardTitle>
                <CardDescription>
                  Connect with me on social media
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 glass-card ${social.color} transition-all duration-300 hover:scale-110 group flex flex-col items-center gap-2`}
                    >
                      <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                      <span className="text-sm font-mono">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Time */}
            <Card className="glass-card hover:bg-white/20 transition-all duration-500">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl font-bold text-neon-green">< 24h</div>
                <div className="text-lg font-space text-foreground">Response Time</div>
                <div className="text-sm text-muted-foreground">
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
