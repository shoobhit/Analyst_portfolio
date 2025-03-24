
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlog } from "@/context/BlogContext";

export function BlogSection() {
  const { blogPosts } = useBlog();
  // Take only the first 3 blog posts for the homepage section
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="data-section bg-muted/30">
      <div className="container">
        <h2 className="section-heading">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border">
              <div className="h-44 overflow-hidden">
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
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
