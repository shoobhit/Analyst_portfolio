import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Github } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';
import { Card } from '@/components/ui/card';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getBlogPostBySlug } = useBlog();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return (
      <ThemeProvider defaultTheme="light">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero section with post image */}
          <div 
            className="h-[40vh] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="container text-white">
                <Button variant="outline" className="mb-6 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white" asChild>
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                  </Link>
                </Button>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-white/80 gap-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Main content */}
              <div className="md:col-span-8">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Share section */}
                <div className="mt-12 pt-6 border-t">
                  <h3 className="text-xl font-semibold mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:scale-110"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 hover:scale-110"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-4">
                <div className="sticky top-24">
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                    <p className="text-muted-foreground">
                      Data scientist and analyst with expertise in machine learning, 
                      statistical analysis, and data visualization. Passionate about 
                      transforming complex data into actionable insights.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:scale-110"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full transition-all duration-300 hover:bg-[#333] hover:text-white hover:border-[#333] hover:scale-110"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPostPage;
