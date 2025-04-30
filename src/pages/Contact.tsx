
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setLoading(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-urban-white mb-4">
              Contact Us
            </h1>
            <p className="text-urban-white/80 text-xl max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-urban-white mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help you?"
                    className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please provide details..."
                    className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy font-bold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-urban-white mb-6">Get in touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-urban-purple/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-urban-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-urban-white font-medium">Address</h3>
                      <p className="text-urban-white/70">
                        123 Smart City Avenue<br />
                        Innovation District<br />
                        Metro City, MC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-urban-purple/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-urban-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-urban-white font-medium">Email</h3>
                      <p className="text-urban-white/70">
                        info@urbanux.io<br />
                        support@urbanux.io
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-urban-purple/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-urban-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-urban-white font-medium">Phone</h3>
                      <p className="text-urban-white/70">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-urban-white mb-4">Business Hours</h2>
                <div className="space-y-2 text-urban-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-urban-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="glass-card">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-urban-white px-6">
                    How do I report an issue in my neighborhood?
                  </AccordionTrigger>
                  <AccordionContent className="text-urban-white/80 px-6">
                    You can report an issue by navigating to the "Report Issue" page, filling out the form with details about the problem, adding your location, and optionally uploading a photo or video of the issue.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-urban-white px-6">
                    How long does it typically take for an issue to be resolved?
                  </AccordionTrigger>
                  <AccordionContent className="text-urban-white/80 px-6">
                    Resolution times vary depending on the severity and type of the issue. Minor issues are typically addressed within 1-2 weeks, while more complex issues may take longer. You can always check the status of your reported issues on the Map View page.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-urban-white px-6">
                    Can I track the progress of my reported issues?
                  </AccordionTrigger>
                  <AccordionContent className="text-urban-white/80 px-6">
                    Yes! Once you report an issue, you can track its progress on the Map View page. Each report is assigned a status (Pending, In Progress, or Resolved) that is updated as city officials work on addressing the problem.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-urban-white px-6">
                    How do city officials access the dashboard?
                  </AccordionTrigger>
                  <AccordionContent className="text-urban-white/80 px-6">
                    City officials can access the administrative dashboard by clicking "Official Login" in the navigation menu. They will need valid credentials provided by Urban UX administrators. For security reasons, the dashboard is only accessible to authorized personnel.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-urban-white px-6">
                    Is my personal information secure when I report an issue?
                  </AccordionTrigger>
                  <AccordionContent className="text-urban-white/80 px-6">
                    Yes, Urban UX takes data privacy seriously. Your personal information is encrypted and only used for the purpose of addressing the reported issues. We never share your data with third parties without your explicit consent.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
