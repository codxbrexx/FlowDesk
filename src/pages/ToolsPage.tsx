import { Navigation } from "@/components/Navigation";
import { Calculator } from "@/components/Calculator";
import { Stopwatch } from "@/components/Stopwatch";
import { TimerWidget } from "@/components/TimerWidget";

const ToolsPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold neon-text mb-2">Productivity Tools</h2>
          <p className="text-muted-foreground">Essential tools to enhance your workflow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Calculator />
          <Stopwatch />
          <TimerWidget />
        </div>

        <div className="glass-card glass-card-hover p-6 mt-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Tool Usage Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Calculator</h4>
              <p className="text-sm text-muted-foreground">Quick math calculations for budgeting, planning, and analysis</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Stopwatch</h4>
              <p className="text-sm text-muted-foreground">Track time for specific activities with lap recording</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Timer</h4>
              <p className="text-sm text-muted-foreground">Set countdown timers for meetings, breaks, or deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
