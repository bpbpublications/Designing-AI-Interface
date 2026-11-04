import { CandidateCard } from "./components/CandidateCard";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { DashboardHeader } from "./components/DashboardHeader";

// Mock candidate data
const mockCandidates = [
  {
    id: "1",
    name: "Alex Rodriguez",
    title: "Senior Machine Learning Engineer",
    location: "San Francisco, CA",
    email: "alex.rodriguez@email.com",
    phone: "+1 (555) 123-4567",
    avatar: "",
    matchScore: 92,
    skills: [
      { name: "Python", level: 95, isStrength: true },
      { name: "Machine Learning", level: 90, isStrength: true },
      { name: "TensorFlow", level: 85, isStrength: true },
      { name: "Data Analysis", level: 88, isStrength: true },
      { name: "Project Management", level: 45, isStrength: false },
      { name: "Team Leadership", level: 50, isStrength: false },
    ],
    experience: [
      {
        title: "Senior ML Engineer",
        company: "TechCorp Inc.",
        duration: "2021 - Present",
        description: "Led development of recommendation systems using deep learning, improving user engagement by 35%. Managed a team of 4 engineers and collaborated with product teams."
      },
      {
        title: "Data Scientist",
        company: "DataFlow Solutions",
        duration: "2019 - 2021",
        description: "Built predictive models for customer churn analysis and implemented MLOps pipelines. Worked with large-scale datasets and deployed models to production."
      }
    ],
    strengths: [
      "5+ years of hands-on experience with Python and ML frameworks",
      "Strong track record in building production ML systems",
      "Excellent problem-solving skills and technical depth",
      "Proven ability to work with large-scale data processing",
      "Experience with modern ML tools (TensorFlow, PyTorch, Scikit-learn)"
    ],
    weaknesses: [
      "Limited experience in project management and team leadership",
      "No formal certification in agile methodologies",
      "Minimal exposure to cross-functional stakeholder management",
      "Could benefit from stronger communication and presentation skills"
    ]
  },
  {
    id: "2",
    name: "Sarah Kim",
    title: "Full Stack Developer",
    location: "Austin, TX",
    email: "sarah.kim@email.com",
    phone: "+1 (555) 987-6543",
    avatar: "",
    matchScore: 82,
    skills: [
      { name: "Python", level: 88, isStrength: true },
      { name: "React", level: 92, isStrength: true },
      { name: "Node.js", level: 85, isStrength: true },
      { name: "Machine Learning", level: 65, isStrength: false },
      { name: "DevOps", level: 55, isStrength: false },
      { name: "Project Management", level: 75, isStrength: true },
    ],
    experience: [
      {
        title: "Full Stack Developer",
        company: "StartupXYZ",
        duration: "2020 - Present",
        description: "Developed and maintained web applications using React and Python. Collaborated with design and product teams to deliver user-centric features."
      },
      {
        title: "Frontend Developer",
        company: "WebSolutions Ltd",
        duration: "2018 - 2020",
        description: "Built responsive web interfaces and improved application performance by 40%. Worked closely with UX designers and backend developers."
      }
    ],
    strengths: [
      "Strong full-stack development skills with modern technologies",
      "5 years of experience building scalable web applications",
      "Good project management and organizational abilities",
      "Proven track record of delivering projects on time",
      "Experience working in agile development environments"
    ],
    weaknesses: [
      "Limited deep experience with machine learning algorithms",
      "Minimal experience with cloud infrastructure and DevOps",
      "Could benefit from more exposure to data science concepts",
      "Less experience with advanced Python libraries for ML"
    ]
  }
];

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {mockCandidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
            
            {/* Load More */}
            <div className="text-center py-8">
              <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Load More Candidates
              </button>
              <p className="text-sm text-muted-foreground mt-2">
                Showing 2 of 1,247 candidates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}