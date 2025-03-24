import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Github, Linkedin, Twitter, ArrowRight, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useBlog } from "@/context/BlogContext";
import { useState } from "react";

const BlogPage = () => {
  const { blogPosts } = useBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-b from-muted/50 to-background py-20">
            <div className="container text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Insights & Analysis
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Exploring Data Science Through My Lens
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" /> Back to Portfolio
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                >
                  <Link to="/blog/new">
                    <PlusCircle className="h-4 w-4" /> New Blog Post
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="pt-4 pb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Clock className="h-4 w-4" /> {post.readTime} • {post.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto gap-2 group" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
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

export default BlogPage;
