import { useState } from "react";
import { NotificationCard } from "./components/NotificationCard";
import { AIAssistant } from "./components/AIAssistant";
import { TaskManager } from "./components/TaskManager";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { 
  Bot, 
  Bell, 
  CheckSquare, 
  BarChart3, 
  Settings, 
  Sparkles,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";
import { toast } from "sonner@2.0.3";

export default function App() {
  const [activeTab, setActiveTab] = useState("notifications");

  const handleGenerateSummary = () => {
    toast.success("AI is generating your feedback summary...", {
      description: "This will take a few moments to analyze all recent feedback.",
      icon: <Sparkles className="w-4 h-4" />,
    });
  };

  const handleSnooze = () => {
    toast.info("Reminder snoozed for 2 hours", {
      description: "We'll remind you again at 4:30 PM.",
      icon: <Clock className="w-4 h-4" />,
    });
  };

  const handleDismiss = () => {
    toast.success("Reminder dismissed", {
      description: "You can find this in your completed notifications.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Project Management AgenticAI</h1>
                <p className="text-sm text-gray-500">Intelligent Project Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-green-50 text-green-700 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                AI Active
              </Badge>
              
              <Button variant="outline" size="sm" className="shadow-sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <CheckSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Tasks</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">AI Suggestions</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completion Rate</p>
                <p className="text-2xl font-semibold text-gray-900">87%</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Team Members</p>
                <p className="text-2xl font-semibold text-gray-900">6</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border border-gray-200">
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="assistant" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NotificationCard
                title="Reminder"
                message="Design review due tomorrow."
                suggestion="Generate summary of recent feedback now?"
                highlightedText="summary"
                onGenerateSummary={handleGenerateSummary}
                onSnooze={handleSnooze}
                onDismiss={handleDismiss}
              />
              
              <NotificationCard
                title="Update Available"
                message="New AI features are ready for your team."
                suggestion="Enable smart task prioritization?"
                highlightedText="smart task prioritization"
                onGenerateSummary={() => toast.success("Feature enabled successfully!")}
                onSnooze={() => toast.info("Update postponed")}
                onDismiss={() => toast.success("Update dismissed")}
              />
              
              <NotificationCard
                title="Team Sync"
                message="Weekly standup meeting in 30 minutes."
                suggestion="Prepare meeting agenda automatically?"
                highlightedText="automatically"
                onGenerateSummary={() => toast.success("Agenda generated and shared!")}
                onSnooze={() => toast.info("Reminder snoozed")}
                onDismiss={() => toast.success("Reminder dismissed")}
              />
            </div>
          </TabsContent>

          <TabsContent value="tasks">
            <TaskManager />
          </TabsContent>

          <TabsContent value="assistant">
            <div className="flex justify-center">
              <AIAssistant />
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-8 bg-white shadow-lg border border-gray-100">
              <div className="text-center space-y-4">
                <div className="p-4 bg-purple-50 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Advanced analytics and insights powered by AI are coming soon. 
                  Track your team's productivity, task completion patterns, and AI suggestion effectiveness.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Enable Analytics
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}