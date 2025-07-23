import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sheharyarajmal02@gmail.com",
      link: "mailto:sheharyarajmal02@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "@sheharyaraj",
      link: "https://github.com/sheharyaraj",
      description: "Check out my code"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Muhammad Sheharyar Ajmal",
      link: "https://linkedin.com/in/muhammadsheharyarajmal",
      description: "Let's connect professionally"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Pakistan",
      link: null,
      description: "Available for remote work"
    }
  ];

  const quickActions = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Start a Conversation",
      description: "Discuss opportunities or collaborations",
      action: () => window.open("mailto:sheharyarajmal02@gmail.com?subject=Let's Connect!", "_blank")
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Schedule a Meeting",
      description: "Let's have a virtual coffee chat",
      action: () => window.open("mailto:sheharyarajmal02@gmail.com?subject=Meeting Request", "_blank")
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "View My Work",
      description: "Explore my projects and contributions",
      action: () => window.open("https://github.com/sheharyaraj", "_blank")
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or just having a friendly chat about technology and development.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Let's <span className="text-primary">Connect</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. I'm currently open to new opportunities and always 
                  excited to work on challenging and innovative projects.
                </p>
              </div>
              
              <div className="grid gap-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="interactive-card group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <div className="text-primary">
                            {contact.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{contact.title}</h4>
                          <p className="text-muted-foreground text-sm mb-1">{contact.description}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <span className="text-primary font-medium">{contact.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Quick <span className="text-primary">Actions</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Choose how you'd like to connect. I typically respond within 24 hours 
                  and am always happy to discuss potential collaborations or answer any questions.
                </p>
              </div>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <Card key={index} className="interactive-card group cursor-pointer" onClick={action.action}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                          <div className="text-primary">
                            {action.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {action.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">{action.description}</p>
                        </div>
                        <Send className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="glass-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Ready to start a project?</h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Let's discuss your ideas and turn them into reality
                    </p>
                  </div>
                  <Button 
                    className="btn-neon w-full"
                    onClick={() => window.open("mailto:sheharyarajmal02@gmail.com?subject=Project Discussion", "_blank")}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Start a Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;