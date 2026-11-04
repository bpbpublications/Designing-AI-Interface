import { PatientTable, Patient } from "./components/PatientTable";
import { TriageStats } from "./components/TriageStats";
import { Activity, Calendar } from "lucide-react";

// Mock patient data
const mockPatients: Patient[] = [
  {
    id: "1",
    name: "A. Sharma",
    condition: "Chest pain",
    severity: "critical",
    arrivalTime: "14:30",
    age: 45,
    roomNumber: "ER-1"
  },
  {
    id: "2", 
    name: "M. Johnson",
    condition: "Broken arm",
    severity: "urgent",
    arrivalTime: "14:45",
    age: 28
  },
  {
    id: "3",
    name: "S. Patel",
    condition: "Minor laceration",
    severity: "stable",
    arrivalTime: "15:10",
    age: 32,
    roomNumber: "ER-3"
  },
  {
    id: "4",
    name: "R. Williams",
    condition: "Difficulty breathing",
    severity: "critical",
    arrivalTime: "15:15",
    age: 67
  },
  {
    id: "5",
    name: "L. Chen",
    condition: "Allergic reaction", 
    severity: "urgent",
    arrivalTime: "15:25",
    age: 23,
    roomNumber: "ER-2"
  },
  {
    id: "6",
    name: "D. Brown",
    condition: "Routine checkup",
    severity: "stable",
    arrivalTime: "15:40",
    age: 41
  },
  {
    id: "7",
    name: "K. Anderson",
    condition: "Severe headache",
    severity: "urgent",
    arrivalTime: "15:55",
    age: 39
  },
  {
    id: "8",
    name: "T. Garcia",
    condition: "Sprained ankle",
    severity: "stable",
    arrivalTime: "16:05",
    age: 26
  }
];

export default function App() {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl mb-1">Hospital Triage Dashboard</h1>
                <p className="text-muted-foreground">Emergency Department Patient Management</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Calendar className="h-4 w-4" />
                <span>{currentDate}</span>
              </div>
              <div className="text-2xl">{currentTime}</div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <TriageStats patients={mockPatients} />

        {/* Patient Table */}
        <PatientTable patients={mockPatients} />
      </div>
    </div>
  );
}