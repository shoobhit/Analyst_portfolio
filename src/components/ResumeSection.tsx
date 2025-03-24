
import { Button } from "./ui/button";
import { ArrowDownToLine, FileText, Eye } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);
  
  // Function to handle resume download
  const handleDownload = () => {
    // This assumes your resume is stored in the public folder
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="data-section bg-muted/30">
      <div className="container">
        <h2 className="section-heading">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <Dialog open={showPreview} onOpenChange={setShowPreview}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" /> Preview Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                <iframe 
                  src="/resume.pdf" 
                  title="Resume Preview" 
                  className="w-full h-[70vh]"
                  style={{ border: "none" }}
                />
              </DialogContent>
            </Dialog>
            <Button className="gap-2" onClick={handleDownload}>
              <ArrowDownToLine className="h-4 w-4" /> Download CV
            </Button>
          </div>

          <Card className="shadow-lg border">
            <CardContent className="p-6">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="experience" className="space-y-6">
                  <div className="border-l-4 border-primary pl-4 pb-6">
                    <h3 className="text-xl font-bold">Data Analyst Intern</h3>
                    <p className="text-muted-foreground">Infotact PVT LTD. | Jan 2025 - Apr 2025</p>
                    <ul className="mt-2 list-disc list-inside text-foreground/80">
                      <li>Perform ETL processes on 150K+ transactions to enhance fraud detection using Python
                      and SQL, improving model efficiency by 15%</li>
                      <li>Applied machine learning techniques (Random Forest) to improve fraud detection precision by 18%</li>
                      <li>Designed and implemented interactive Power BI dashboards to track fraud patterns</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold">Machine Learning Intern</h3>
                    <p className="text-muted-foreground">InternShip Studio | July 2024 - Sept 2024</p>
                    <ul className="mt-2 list-disc list-inside text-foreground/80">
                      <li>Designed ETL pipelines for transforming 15,000+ records to improve YouTube ad view predictions.</li>
                      <li>Conducted regression analysis, to improve data quality and boost predictive accuracy by 15%</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="space-y-6">
                  <div className="border-l-4 border-primary pl-4 pb-6">
                    <h3 className="text-xl font-bold">BS in Data Science</h3>
                    <p className="text-muted-foreground">IIT Madras | 2022 - Present</p>
                    <p className="mt-2 text-foreground/80">
                      Specialized in machine learning algorithms and statistical analysis
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                    <p className="text-muted-foreground">AKTU | 2021 - 2025</p>
                    <p className="mt-2 text-foreground/80">
                      Focused on programming fundamentals and database management
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Python",
                      "SQL",
                      "DBMS",
                      "Power BI",
                      "Excel",
                      "Machine Learning",
                      "Statistical Analysis",
                      "Data Visualization",
                      "ETL",
                      
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="bg-muted rounded-md p-3 text-center font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
