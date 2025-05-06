
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost } from '../types/BlogPost';

// Sample initial blog posts
const initialBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering Data Visualization with Python",
    excerpt: "Learn how to create compelling visualizations using Matplotlib and Seaborn libraries.",
    content: `
      <h2>Introduction to Data Visualization with Python</h2>
      <p>Data visualization is a crucial skill for any data professional. Python offers powerful libraries like Matplotlib and Seaborn that make it easy to create compelling visualizations.</p>
      
      <h2>Getting Started with Matplotlib</h2>
      <p>Matplotlib is the foundation of data visualization in Python. Here's how to create a basic plot:</p>
      <pre><code>
      import matplotlib.pyplot as plt
      import numpy as np
      
      x = np.linspace(0, 10, 100)
      y = np.sin(x)
      
      plt.figure(figsize=(10, 6))
      plt.plot(x, y)
      plt.title('Sine Wave')
      plt.xlabel('X')
      plt.ylabel('Y')
      plt.grid(True)
      plt.show()
      </code></pre>
      
      <h2>Advanced Techniques with Seaborn</h2>
      <p>Seaborn builds on Matplotlib and provides a higher-level interface for creating statistical graphics:</p>
      <pre><code>
      import seaborn as sns
      import pandas as pd
      
      # Load a sample dataset
      tips = sns.load_dataset('tips')
      
      # Create a scatter plot with regression line
      plt.figure(figsize=(10, 6))
      sns.regplot(x='total_bill', y='tip', data=tips)
      plt.title('Tips vs. Total Bill')
      plt.show()
      </code></pre>
      
      <h2>Best Practices for Effective Visualizations</h2>
      <p>Remember these key principles when creating data visualizations:</p>
      <ul>
        <li>Choose the right chart type for your data</li>
        <li>Keep designs simple and focused</li>
        <li>Use color intentionally</li>
        <li>Label axes and include a title</li>
        <li>Consider your audience when designing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering data visualization in Python can dramatically improve how you communicate insights. Practice regularly with different datasets to build your skills.</p>
    `,
    date: "April 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    slug: "mastering-data-visualization-python"
  },
  {
    id: "2",
    title: "SQL Optimization Techniques Every Analyst Should Know",
    excerpt: "Improve your query performance with these advanced SQL optimization methods.",
    content: `
      <h2>Why SQL Optimization Matters</h2>
      <p>Efficient SQL queries are crucial for maintaining application performance, especially as your datasets grow. This article covers essential optimization techniques that every data analyst should know.</p>
      
      <h2>Indexing Strategies</h2>
      <p>Proper indexing is perhaps the most important aspect of SQL optimization:</p>
      <pre><code>
      -- Create an index on frequently queried columns
      CREATE INDEX idx_customer_last_name ON customers(last_name);
      
      -- Create a composite index for multiple columns used together
      CREATE INDEX idx_order_customer ON orders(order_date, customer_id);
      </code></pre>
      
      <h2>Query Restructuring</h2>
      <p>Sometimes, restructuring your query can lead to significant performance improvements:</p>
      <pre><code>
      -- Instead of this:
      SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-01-31';
      
      -- Try this:
      SELECT * FROM orders WHERE order_date >= '2023-01-01' AND order_date < '2023-02-01';
      </code></pre>
      
      <h2>Avoiding Common Anti-Patterns</h2>
      <p>Certain SQL practices can drastically slow your queries:</p>
      <ul>
        <li>Avoid using SELECT * when you only need specific columns</li>
        <li>Don't use functions on indexed columns in WHERE clauses</li>
        <li>Be cautious with subqueries - consider joins instead</li>
        <li>Limit the use of OR conditions when possible</li>
      </ul>
      
      <h2>Advanced Techniques</h2>
      <p>For complex queries, consider these advanced optimization strategies:</p>
      <ol>
        <li>Use EXPLAIN ANALYZE to understand query execution plans</li>
        <li>Consider materialized views for complex, frequently-run queries</li>
        <li>Partitioning tables with very large datasets</li>
        <li>Implement proper database statistics maintenance</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>SQL optimization is both an art and a science. By implementing these techniques, you can significantly improve query performance and application responsiveness.</p>
    `,
    date: "April 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021",
    slug: "sql-optimization-techniques"
  },
  {
    id: "3",
    title: "Predictive Analytics: From Theory to Practice",
    excerpt: "A step-by-step guide to implementing predictive models in real-world scenarios.",
    content: `
      <h2>Understanding Predictive Analytics</h2>
      <p>Predictive analytics uses historical data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes. This guide will help you implement these powerful techniques in your organization.</p>
      
      <h2>The Predictive Analytics Process</h2>
      <p>Successful predictive analytics projects typically follow these steps:</p>
      <ol>
        <li>Define the business problem and objectives</li>
        <li>Collect and prepare relevant data</li>
        <li>Explore and analyze the data</li>
        <li>Build predictive models</li>
        <li>Evaluate and refine the models</li>
        <li>Deploy and monitor the solution</li>
      </ol>
      
      <h2>Feature Engineering</h2>
      <p>Feature engineering is often the most critical step in creating effective predictive models:</p>
      <pre><code>
      # Example of feature engineering in Python
      import pandas as pd
      import numpy as np
      
      # Create derived features
      df['days_since_last_purchase'] = (pd.Timestamp.now() - df['last_purchase_date']).dt.days
      df['total_spent_last_90days'] = df.apply(lambda x: calculate_recent_spending(x, 90), axis=1)
      
      # Normalize numeric features
      from sklearn.preprocessing import StandardScaler
      scaler = StandardScaler()
      df[['income', 'age']] = scaler.fit_transform(df[['income', 'age']])
      </code></pre>
      
      <h2>Model Selection and Evaluation</h2>
      <p>Choosing the right model depends on your specific problem and data characteristics:</p>
      <pre><code>
      from sklearn.model_selection import train_test_split, cross_val_score
      from sklearn.ensemble import RandomForestClassifier
      from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
      
      # Split data
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
      
      # Train model
      model = RandomForestClassifier(n_estimators=100)
      model.fit(X_train, y_train)
      
      # Evaluate
      y_pred = model.predict(X_test)
      print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
      print(f"Precision: {precision_score(y_test, y_pred):.4f}")
      print(f"Recall: {recall_score(y_test, y_pred):.4f}")
      print(f"F1 Score: {f1_score(y_test, y_pred):.4f}")
      </code></pre>
      
      <h2>Implementation Challenges</h2>
      <p>Be prepared to address these common challenges:</p>
      <ul>
        <li>Data quality and availability issues</li>
        <li>Feature selection and engineering complexity</li>
        <li>Model interpretability vs. performance tradeoffs</li>
        <li>Organizational resistance to model-driven decisions</li>
        <li>Deployment and integration difficulties</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Implementing predictive analytics requires both technical expertise and business acumen. Start with well-defined problems, focus on data quality, and continuously refine your approach based on results.</p>
    `,
    date: "April 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076",
    slug: "predictive-analytics-theory-practice"
  },
  {
    id: "4",
    title: "The Role of Data Ethics in Modern Analytics",
    excerpt: "Understanding the importance of ethical considerations in data collection and analysis.",
    content: `
      <h2>Why Data Ethics Matters</h2>
      <p>As data-driven decision making becomes ubiquitous, ethical considerations are increasingly important. This article explores key ethical principles for responsible data practices.</p>
      
      <h2>Core Principles of Data Ethics</h2>
      <p>Several foundational principles should guide ethical data practices:</p>
      <ol>
        <li><strong>Transparency</strong> - Be clear about what data is collected and how it's used</li>
        <li><strong>Consent</strong> - Obtain informed permission for data collection and usage</li>
        <li><strong>Privacy</strong> - Protect sensitive information and respect boundaries</li>
        <li><strong>Fairness</strong> - Ensure algorithms don't discriminate or perpetuate biases</li>
        <li><strong>Accountability</strong> - Take responsibility for decisions made using data</li>
      </ol>
      
      <h2>Bias and Fairness in Algorithms</h2>
      <p>Algorithmic bias can emerge in unexpected ways:</p>
      <pre><code>
      # Example: Checking for demographic parity in predictions
      from aif360.metrics import BinaryLabelDatasetMetric
      from aif360.datasets import BinaryLabelDataset
      
      # Create datasets by protected attribute
      dataset = BinaryLabelDataset(df=df, 
                                  label_names=['outcome'], 
                                  protected_attribute_names=['gender'])
      
      privileged_groups = [{'gender': 1}]
      unprivileged_groups = [{'gender': 0}]
      
      # Calculate disparate impact
      metric = BinaryLabelDatasetMetric(dataset, 
                                       unprivileged_groups=unprivileged_groups,
                                       privileged_groups=privileged_groups)
      
      print(f"Disparate Impact: {metric.disparate_impact()}")
      # Value of 1.0 means perfect demographic parity
      # Values < 0.8 often considered problematic
      </code></pre>
      
      <h2>Privacy-Preserving Techniques</h2>
      <p>Several methods can help maintain privacy while still extracting value from data:</p>
      <ul>
        <li>Data anonymization and pseudonymization</li>
        <li>Differential privacy</li>
        <li>Federated learning</li>
        <li>Homomorphic encryption</li>
        <li>Synthetic data generation</li>
      </ul>
      
      <h2>Ethical Frameworks for Organizations</h2>
      <p>Organizations should establish structured approaches to data ethics:</p>
      <ol>
        <li>Create a cross-functional data ethics committee</li>
        <li>Develop clear policies and guidelines</li>
        <li>Conduct ethical risk assessments for new projects</li>
        <li>Provide regular training on ethical data practices</li>
        <li>Establish mechanisms for addressing ethical concerns</li>
      </ol>
      
      <h2>Case Studies in Data Ethics</h2>
      <p>Learning from real-world examples can provide valuable insights:</p>
      <ul>
        <li>Cambridge Analytica scandal</li>
        <li>Algorithmic bias in healthcare allocation</li>
        <li>Facial recognition technology misuse</li>
        <li>Targeted advertising and vulnerable populations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Ethical data practices are not just moral imperatives but also business necessities. Building trust through responsible data handling creates sustainable foundations for analytics programs.</p>
    `,
    date: "April 25, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
    slug: "data-ethics-modern-analytics"
  },
  // {
  //   id: "6",
  //   title: "Building Interactive Dashboards with Tableau",
  //   excerpt: "A comprehensive guide to creating impactful data visualizations for business intelligence.",
  //   content: `
  //     <h2>The Power of Visual Analytics</h2>
  //     <p>Interactive dashboards transform raw data into actionable insights. This guide will help you create compelling Tableau dashboards that drive business decisions.</p>
      
  //     <h2>Dashboard Planning and Design</h2>
  //     <p>Effective dashboards begin with thoughtful planning:</p>
  //     <ol>
  //       <li>Identify the primary audience and their needs</li>
  //       <li>Define key metrics and questions to answer</li>
  //       <li>Sketch layouts before building</li>
  //       <li>Choose appropriate visualization types</li>
  //       <li>Create a logical flow of information</li>
  //     </ol>
      
  //     <h2>Creating Effective Visualizations</h2>
  //     <p>Select the right chart types for your data stories:</p>
  //     <ul>
  //       <li><strong>Bar charts</strong> - For comparing categories</li>
  //       <li><strong>Line charts</strong> - For showing trends over time</li>
  //       <li><strong>Scatter plots</strong> - For identifying correlations</li>
  //       <li><strong>Heat maps</strong> - For displaying patterns across two dimensions</li>
  //       <li><strong>Tree maps</strong> - For hierarchical data</li>
  //       <li><strong>Maps</strong> - For geographical analysis</li>
  //     </ul>
      
  //     <h2>Adding Interactivity</h2>
  //     <p>Interactive elements transform static dashboards into exploration tools:</p>
  //     <ul>
  //       <li>Filters and parameters</li>
  //       <li>Actions (filter, highlight, URL)</li>
  //       <li>Tooltips with contextual information</li>
  //       <li>Show/hide containers</li>
  //       <li>Drill-down capabilities</li>
  //     </ul>
      
  //     <h2>Advanced Techniques</h2>
  //     <p>Take your dashboards to the next level with these techniques:</p>
  //     <ol>
  //       <li><strong>Calculated fields</strong> - Create custom metrics</li>
  //       <li><strong>Level of Detail (LOD) expressions</strong> - Perform complex aggregations</li>
  //       <li><strong>Table calculations</strong> - Generate dynamic comparisons</li>
  //       <li><strong>Dashboard extensions</strong> - Add custom functionality</li>
  //       <li><strong>Device-specific layouts</strong> - Optimize for different screens</li>
  //     </ol>
      
  //     <h2>Performance Optimization</h2>
  //     <p>Ensure your dashboards remain responsive:</p>
  //     <ul>
  //       <li>Use extracts instead of live connections where appropriate</li>
  //       <li>Limit the number of marks displayed</li>
  //       <li>Aggregate data when possible</li>
  //       <li>Reduce unnecessary calculations</li>
  //       <li>Test performance with expected data volumes</li>
  //     </ul>
      
  //     <h2>Storytelling with Data</h2>
  //     <p>Transform information into narratives:</p>
  //     <ol>
  //       <li>Start with context and key findings</li>
  //       <li>Guide users through logical analysis paths</li>
  //       <li>Use consistent formatting and colors</li>
  //       <li>Incorporate explanatory text</li>
  //       <li>Highlight anomalies and important insights</li>
  //     </ol>
      
  //     <h2>Conclusion</h2>
  //     <p>Building effective Tableau dashboards requires both technical skill and design sensibility. Focus on solving real business problems and continually refine based on user feedback.</p>
  //   `,
  //   date: "January 22, 2023",
  //   readTime: "9 min read",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  //   slug: "interactive-dashboards-tableau"
  // }
];

interface BlogContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id' | 'slug'>) => void;
  getBlogPostBySlug: (slug: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    // Try to load from localStorage first
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
  });

  // Save to localStorage whenever blogPosts changes
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const addBlogPost = (post: Omit<BlogPost, 'id' | 'slug'>) => {
    const id = (blogPosts.length + 1).toString();
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const newPost: BlogPost = {
      ...post,
      id,
      slug
    };
    
    setBlogPosts([newPost, ...blogPosts]);
  };

  const getBlogPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, getBlogPostBySlug }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
