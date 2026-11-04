import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Calendar, Clock, Users, AlertCircle, Plus, Sparkles } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "in-progress" | "completed";
  dueDate: Date;
  assignees: string[];
  aiSuggestion?: string;
}

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design review due tomorrow",
      description: "Complete the design review for the new dashboard interface",
      priority: "high",
      status: "pending",
      dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
      assignees: ["Sarah", "Mike"],
      aiSuggestion: "Generate summary of recent feedback now?",
    },
    {
      id: "2",
      title: "Update user personas",
      description: "Revise user personas based on latest research findings",
      priority: "medium",
      status: "in-progress",
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      assignees: ["Alex"],
    },
    {
      id: "3",
      title: "Prototype testing",
      description: "Conduct usability testing for mobile prototype",
      priority: "high",
      status: "pending",
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      assignees: ["Emma", "John"],
      aiSuggestion: "Schedule automated testing sessions?",
    },
  ]);

  const toggleTaskStatus = (taskId: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getTimeUntilDue = (dueDate: Date) => {
    const now = new Date();
    const diffMs = dueDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "Due tomorrow";
    if (diffDays < 0) return `Overdue by ${Math.abs(diffDays)} day(s)`;
    return `Due in ${diffDays} day(s)`;
  };

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Task Manager</h2>
          <p className="text-gray-500 mt-1">Manage your project tasks with AI assistance</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-200">
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Tasks */}
      <div className="p-6 space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="p-4">
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={task.status === "completed"}
                  onCheckedChange={() => toggleTaskStatus(task.id)}
                  className="mt-1"
                />
                
                <div className="flex-1 space-y-3">
                  {/* Task Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className={`font-medium ${task.status === "completed" ? "line-through text-gray-500" : "text-gray-900"}`}>
                        {task.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{task.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      {task.status === "in-progress" && (
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                          In Progress
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* AI Suggestion */}
                  {task.aiSuggestion && task.status !== "completed" && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-purple-800">
                            AI Suggestion: <span className="font-medium">{task.aiSuggestion}</span>
                          </p>
                          <Button
                            size="sm"
                            className="mt-2 bg-purple-600 hover:bg-purple-700 text-white"
                          >
                            Apply Suggestion
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Task Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{getTimeUntilDue(task.dueDate)}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{task.assignees.join(", ")}</span>
                    </div>
                    
                    {task.priority === "high" && (
                      <div className="flex items-center gap-1 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <span>High Priority</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}