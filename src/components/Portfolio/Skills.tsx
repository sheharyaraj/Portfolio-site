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
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["JavaScript", "React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase Firestore", "Redis"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "CI/CD", "Git", "Linux", "Kubernetes"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Flutter", "Dart", "React Native", "Firebase"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Tools & Platforms",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["VS Code", "Git", "GitHub", "Figma", "Postman", "Jira"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const proficiencyLevels = [
    { skill: "JavaScript", level: 90 },
    { skill: "React", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "Python", level: 75 },
    { skill: "MongoDB", level: 85 },
    { skill: "AWS", level: 70 },
    { skill: "Docker", level: 75 },
    { skill: "Flutter", level: 80 }
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills by Category */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Technologies & <span className="text-primary">Frameworks</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
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

          {/* Proficiency Levels */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Proficiency <span className="text-primary">Levels</span>
            </h3>
            <Card className="glass-card">
              <CardContent className="p-6 space-y-6">
                {proficiencyLevels.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{item.skill}</span>
                      <span className="text-primary font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-glow"
                        style={{ 
                          width: `${item.level}%`,
                          animation: `slideIn 1.5s ease-out ${index * 0.1}s both`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;