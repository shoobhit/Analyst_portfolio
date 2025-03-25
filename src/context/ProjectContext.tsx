
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
}

// Define Context interface
interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'slug'>) => void;
  getProject: (id: number) => Project | undefined;
}

// Sample project data
const initialProjects: Project[] = [
  {
    id: 1,
    title: "Telecom Customer Liftetime Value Prediction",
    description: "Built a machine learning model to predict Customer Lifetime Value for telecom companies using regression model.",
    tools: ["Python", "Scikit-Learn", "Pandas"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    link: "https://github.com/shoobhit/Telecom-Customer-Value-Prediction"
  },
  {
    id: 2,
    title: "Customer Segmentation Analysis",
    description: "Applied clustering algorithms to segment customers based on purchasing behavior and demographics.",
    tools: ["R", "K-means", "Tableau"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    link: "https://github.com/example/customer-segmentation"
  },
  {
    id: 3,
    title: "Interactive Sales Dashboard",
    description: "Created an interactive dashboard that visualizes sales data across different regions and products.",
    tools: ["Power BI", "SQL", "DAX"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070",
    link: "https://github.com/example/sales-dashboard"
  },
  {
    id: 4,
    title: "Data Pipeline Optimization",
    description: "Redesigned ETL processes to reduce data processing time by 40% and improve data quality.",
    tools: ["Python", "Airflow", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070",
    link: "https://github.com/example/data-pipeline"
  },
  {
    id: 5,
    title: "Market Basket Analysis",
    description: "Implemented association rule mining to identify product purchase patterns and optimize product placement.",
    tools: ["Python", "Apriori", "Pandas"],
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076",
    link: "https://github.com/example/market-basket"
  },
  {
    id: 6,
    title: "Churn Prediction Model",
    description: "Built a machine learning model to predict customer churn and identify at-risk customers.",
    tools: ["Python", "XGBoost", "Scikit-Learn"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    link: "https://github.com/example/churn-prediction"
  }
];

// Create the context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Create a provider component
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now(),
    };
    setProjects(prevProjects => [newProject, ...prevProjects]);
  };

  const getProject = (id: number) => {
    return projects.find(project => project.id === id);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, getProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Create a hook for using the context
export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
