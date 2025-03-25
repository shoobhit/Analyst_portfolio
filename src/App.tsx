
import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NewBlogPostPage from "./pages/NewBlogPostPage";
import ProjectsPage from "./pages/ProjectsPage";
import NewProjectPage from "./pages/NewProjectPage";
import NotFound from "./pages/NotFound";
import { BlogProvider } from "./context/BlogContext";
import { ProjectProvider } from "./context/ProjectContext";
import { ThemeProvider } from "./components/ThemeProvider"; // Import ThemeProvider


// Create the query client
const queryClient = new QueryClient();

// Define App as a proper function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogProvider>
        <ProjectProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ThemeProvider> {/* Wrap the application in ThemeProvider */}
              <BrowserRouter>

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/new" element={<NewBlogPostPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/new" element={<NewProjectPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              </BrowserRouter>
            </ThemeProvider> {/* Close ThemeProvider */}

          </TooltipProvider>
        </ProjectProvider>
      </BlogProvider>
    </QueryClientProvider>
  );
}

export default App;
