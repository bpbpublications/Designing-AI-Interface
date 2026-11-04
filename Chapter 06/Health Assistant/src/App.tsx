import { Header } from "./components/Header";
import { QuickAction } from "./components/QuickAction";
import { ThinkItThrough } from "./components/ThinkItThrough";
import { SafetyInteractions } from "./components/SafetyInteractions";
import { ActionButtons } from "./components/ActionButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <Header />
          <QuickAction />
          <ThinkItThrough />
          <SafetyInteractions />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}