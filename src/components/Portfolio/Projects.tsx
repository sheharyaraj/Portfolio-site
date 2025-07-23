import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Cloud, 
  BarChart3,
  Database,
  Shield
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PhysioGo",
      description: "A comprehensive mobile application for physiotherapy management, enabling patients to track exercises, connect with therapists, and monitor recovery progress.",
      longDescription: "Built with Flutter for cross-platform compatibility and Firebase for real-time data management. Features include exercise tracking, progress analytics, appointment scheduling, and secure patient-therapist communication.",
      icon: <Smartphone className="h-8 w-8" />,
      technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Authentication"],
      category: "Mobile Development",
      features: [
        "Exercise tracking and reminders",
        "Progress analytics and reporting",
        "Secure patient-therapist messaging",
        "Appointment scheduling system",
        "Cross-platform compatibility"
      ],
      status: "Completed",
      year: "2023"
    },
    {
      title: "PaperVault",
      description: "A full-stack document management system built with the MERN stack, providing secure storage, organization, and sharing of academic papers and research documents.",
      longDescription: "Features user authentication, file upload/download, advanced search capabilities, and collaborative features for researchers and students.",
      icon: <Database className="h-8 w-8" />,
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
      category: "Full-Stack Web",
      features: [
        "Secure document storage and retrieval",
        "Advanced search and filtering",
        "User authentication and authorization",
        "Collaborative sharing features",
        "Responsive web interface"
      ],
      status: "Completed",
      year: "2023"
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated deployment pipeline using Docker and AWS services, implementing continuous integration and deployment for web applications.",
      longDescription: "Designed and implemented a robust CI/CD pipeline that automates testing, building, and deployment processes, reducing deployment time by 80% and improving code quality.",
      icon: <Cloud className="h-8 w-8" />,
      technologies: ["Docker", "AWS", "GitHub Actions", "EC2", "S3", "Route 53"],
      category: "DevOps",
      features: [
        "Automated testing and building",
        "Zero-downtime deployments",
        "Environment-specific configurations",
        "Rollback capabilities",
        "Monitoring and alerting"
      ],
      status: "Completed",
      year: "2023"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive data visualization platform for analyzing business metrics and trends, built with Python and modern visualization libraries.",
      longDescription: "Comprehensive analytics solution featuring real-time data processing, interactive charts, and customizable reporting for business intelligence.",
      icon: <BarChart3 className="h-8 w-8" />,
      technologies: ["Python", "Pandas", "Plotly", "Streamlit", "PostgreSQL"],
      category: "Data Science",
      features: [
        "Real-time data processing",
        "Interactive visualizations",
        "Custom report generation",
        "Multi-source data integration",
        "Export capabilities"
      ],
      status: "In Progress",
      year: "2024"
    }
  ];

  const categoryColors = {
    "Mobile Development": "from-blue-500 to-cyan-500",
    "Full-Stack Web": "from-green-500 to-emerald-500", 
    "DevOps": "from-orange-500 to-red-500",
    "Data Science": "from-purple-500 to-violet-500"
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, 
            mobile applications, cloud infrastructure, and data analysis capabilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="interactive-card group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[project.category]} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-primary font-medium">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" ? "neon-border bg-primary/10" : "glass-card"}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="glass-card hover:neon-border transition-all duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card hover:neon-border flex-1"
                    disabled
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card hover:neon-border flex-1"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;