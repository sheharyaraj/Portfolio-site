import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST-NUCES",
      period: "Current",
      status: "In Progress",
      description: "Pursuing comprehensive computer science education with focus on software engineering, algorithms, and modern programming paradigms.",
      highlights: [
        "Software Engineering & System Design",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks & Security",
        "Object-Oriented Programming",
        "Web Development Technologies"
      ]
    },
    {
      degree: "Cambridge A Levels",
      institution: "Cambridge International",
      period: "Completed",
      status: "Graduated",
      description: "Completed advanced level education with strong foundation in mathematics and sciences, preparing for higher education in computer science.",
      highlights: [
        "Mathematics",
        "Physics", 
        "Computer Science",
        "Critical Thinking",
        "Research Methodology"
      ]
    },
    {
      degree: "Cambridge O Levels",
      institution: "Cambridge International",
      period: "Completed",
      status: "Graduated",
      description: "Strong academic foundation across multiple disciplines with particular excellence in STEM subjects.",
      highlights: [
        "Mathematics",
        "Sciences",
        "English Language",
        "Computer Studies",
        "Academic Excellence"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="interactive-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge 
                      variant={edu.status === "In Progress" ? "default" : "secondary"}
                      className={edu.status === "In Progress" ? "neon-border bg-primary/10" : "glass-card"}
                    >
                      {edu.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Key Areas of Study
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Award className="h-3 w-3 text-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
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

export default Education;