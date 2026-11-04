import { Activity } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
        <Activity className="w-5 h-5 text-primary" />
      </div>
      <h1 className="text-primary">Health Assistant</h1>
    </div>
  );
}