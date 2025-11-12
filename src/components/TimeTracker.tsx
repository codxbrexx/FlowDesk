import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Timer, Clock } from "lucide-react";

type Mode = "pomodoro" | "clockinout";

export const TimeTracker = () => {
  const [mode, setMode] = useState<Mode>("pomodoro");
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [breaks, setBreaks] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsRunning(false);
            setSessions(sessions + 1);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, sessions]);

  const handleStart = () => setIsRunning(true);
  const handleReset = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold neon-text">Time Tracker</h2>
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          variant={mode === "pomodoro" ? "default" : "outline"}
          size="sm"
          onClick={() => setMode("pomodoro")}
          className="flex-1"
        >
          Pomodoro
        </Button>
        <Button
          variant={mode === "clockinout" ? "default" : "outline"}
          size="sm"
          onClick={() => setMode("clockinout")}
          className="flex-1"
        >
          Clock-in/Out
        </Button>
      </div>

      <div className="text-center mb-4">
        <p className="text-primary text-sm mb-2">Work</p>
        <div className="digital-display">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-16 bg-input border border-border rounded-lg px-2 py-1 text-center text-foreground"
          disabled={isRunning}
        />
        <span className="text-muted-foreground">minutes</span>
      </div>

      <div className="flex gap-3 mb-4">
        <Button
          onClick={handleStart}
          disabled={isRunning}
          className="flex-1 bg-success hover:bg-success/90 text-white"
        >
          Start
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="flex-1"
        >
          Reset
        </Button>
      </div>

      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Session: {sessions}</span>
        <span>Break: {breaks}</span>
      </div>
    </div>
  );
};

export default TimeTracker;