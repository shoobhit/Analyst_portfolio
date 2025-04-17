import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const ResumePage = () => {
  // Function to handle resume download
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container pt-24 pb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">My Resume</h1>
            <Button className="gap-2" onClick={handleDownload}>
              <ArrowDownToLine className="h-4 w-4" /> Download CV
            </Button>
          </div>
          
          <div className="max-w-5xl mx-auto bg-card border rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="/resume.pdf#view=FitH"
              title="Resume"
              className="w-full h-[calc(100vh-180px)]"
              style={{ 
                border: "none",
                aspectRatio: "1.4/1"
              }}
            />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ResumePage;
