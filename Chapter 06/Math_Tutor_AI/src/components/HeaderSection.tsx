import { Brain, Sparkles } from "lucide-react";

export function HeaderSection() {
  return (
    <div className="text-center space-y-4 mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="relative">
          <div className="p-3 bg-gradient-to-r from-primary to-primary/80 rounded-2xl shadow-lg">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="absolute -top-1 -right-1">
            <div className="p-1 bg-yellow-400 rounded-full">
              <Sparkles className="w-3 h-3 text-yellow-900" />
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h1 className="text-3xl font-medium text-foreground mb-2">Math Tutor AI</h1>
        <p className="text-muted-foreground">Your intelligent learning companion</p>
      </div>
    </div>
  );
}