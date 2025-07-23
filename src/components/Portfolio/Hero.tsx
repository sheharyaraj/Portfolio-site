import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Particles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-float"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative animated-bg">
      <Particles />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Muhammad</span>
            <br />
            <span className="neon-glow">Sheharyar Ajmal</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            <span className="text-primary">Software Engineer</span> & 
            <span className="text-primary"> CS Student</span> at FAST-NUCES
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Specializing in full-stack development with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="btn-neon px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass-card hover:scale-110 transition-transform"
                asChild
              >
                <a href="https://github.com/sheharyaraj" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass-card hover:scale-110 transition-transform"
                asChild
              >
                <a href="https://linkedin.com/in/muhammadsheharyarajmal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          
          <Button
            variant="ghost"
            className="animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;