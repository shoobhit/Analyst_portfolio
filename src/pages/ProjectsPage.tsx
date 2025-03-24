import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, PlusCircle, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import { useProject } from "@/context/ProjectContext";

// Mock function to check if user is owner (replace with actual auth check later)
const isOwner = () => {
  // For now, return true to test admin functionality
  // Later implement actual auth check
  return true;
};

const ProjectsPage = () => {
  const { projects } = useProject();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-b from-muted/50 to-background py-20">
            <div className="container text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Portfolio Projects
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Showcasing Data Science Excellence
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" /> Back to Portfolio
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/blog">
                    <ArrowLeft className="h-4 w-4" /> View Blog
                  </Link>
                </Button>
                {isOwner() && (
                  <Button asChild className="gap-2">
                    <Link to="/projects/new">
                      <PlusCircle className="h-4 w-4" /> New Project
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="pt-4 pb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-foreground/70 text-xs rounded-md">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto gap-2 group" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(prev => Math.max(prev - 1, 1));
                          }} 
                        />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          href="#" 
                          isActive={currentPage === index + 1}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(index + 1);
                          }}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(prev => Math.min(prev + 1, totalPages));
                          }} 
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </section>

          <section className="bg-muted/30 py-16">
            <div className="container text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Connect With Me</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Follow me on social media to get the latest updates on data science, machine learning, and analytics.
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://x.com/SobhitT60613" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-12 w-12 transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:scale-110"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sobhit18/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-12 w-12 transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a 
                  href="https://github.com/shoobhit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-12 w-12 transition-all duration-300 hover:bg-[#333] hover:text-white hover:border-[#333] hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectsPage;
