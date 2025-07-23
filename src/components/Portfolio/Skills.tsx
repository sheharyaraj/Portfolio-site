import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  GitBranch,
  Server,
  Palette
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["CSS", "Express", "Figma", "HTML", "Javascript", "Node.js", "React"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming Languages", 
      icon: <Code2 className="h-6 w-6" />,
      skills: ["C", "C#", "C++", "Dart", "Python", "SQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["Firebase", "MongoDB", "MySQL", "Oracle Database"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS EC2", "AWS EKS", "GCP", "Docker", "Kubernetes", "Terraform"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Big Data & Analytics",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Hadoop", "Power BI"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "Github", "GitHub Actions"],
      color: "from-indigo-500 to-blue-500"
    }
  ];


  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="interactive-card group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="glass-card hover:neon-border transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;