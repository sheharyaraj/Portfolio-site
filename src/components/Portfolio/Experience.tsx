import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "CodeNinja",
      period: "Current",
      location: "Remote",
      type: "Full-time",
      description: [
        "Developing scalable web applications using modern technologies and frameworks",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Leading technical initiatives and mentoring junior developers",
        "Implementing best practices for code quality, testing, and deployment",
        "Working with cloud infrastructure and DevOps tools for efficient development workflows"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Web Development Intern",
      company: "FastDev Labs",
      period: "2023",
      location: "Remote",
      type: "Internship",
      description: [
        "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Demonstrated leadership skills by mentoring junior developers and coordinating project timelines",
        "Implemented responsive designs and optimized application performance",
        "Gained hands-on experience with modern development workflows and best practices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Git", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="interactive-card mb-8">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-xl text-foreground font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="outline" className="neon-border text-primary">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="glass-card hover:neon-border transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;