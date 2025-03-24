
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BarChart2, ExternalLink, FileCode, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useProject } from "@/context/ProjectContext";

export function ProjectsSection() {
  const { projects } = useProject();
  // Get only the first 4 projects for the home page
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="data-section">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featuredProjects.map((project, index) => {
            // Define icons based on index to match the original design
            const icons = [TrendingUp, PieChart, BarChart2, FileCode];
            const colors = ["text-primary", "text-secondary", "text-primary", "text-secondary"];
            const bgColors = ["bg-primary/10", "bg-secondary/10", "bg-primary/10", "bg-secondary/10"];
            
            return (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className={`p-3 rounded-full ${bgColors[index % 4]} ${colors[index % 4]}`}>
                      {React.createElement(icons[index % 4], { className: "h-6 w-6" })}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="gap-2 ml-auto"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
