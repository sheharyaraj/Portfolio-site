import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen smooth-scroll">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Muhammad Sheharyar Ajmal. Built with ❤️ using React & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;