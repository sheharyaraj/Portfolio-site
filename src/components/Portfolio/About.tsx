import { Card, CardContent } from '@/components/ui/card';
import { Code2, Gamepad2, Dumbbell, Brain } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Technology",
      description: "Passionate about emerging tech trends and innovative solutions"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Love tackling complex challenges with creative thinking"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Gaming",
      description: "Strategic gaming enthusiast and esports follower"
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Fitness",
      description: "Maintaining physical wellness and mental clarity"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Hello World! 👋</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Software Engineer and Computer Science student at FAST-NUCES, 
                driven by the endless possibilities that technology offers. My journey in tech 
                started with curiosity and has evolved into a deep commitment to creating 
                meaningful digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a MERN stack developer, I love building full-stack applications that solve 
                real-world problems. I'm particularly interested in cloud technologies, 
                DevOps practices, and the intersection of AI with traditional software development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, 
                gaming with friends, or hitting the gym to stay sharp both mentally and physically.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card 
                key={index} 
                className="interactive-card p-6 text-center group"
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{interest.title}</h4>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;