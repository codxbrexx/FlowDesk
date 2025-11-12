import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock3 } from "lucide-react";

export const TimerWidget = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    setHours(h);
    setMinutes(m);
    setSeconds(s);
  }, [totalSeconds]);

  const handleStart = () => {
    const total = hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(total);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(5);
    setSeconds(0);
    setTotalSeconds(0);
  };

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock3 className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold neon-text">Timer</h2>
      </div>

      <div className="text-center mb-6">
        <div className="digital-display text-3xl">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <input
          type="number"
          value={hours}
          onChange={(e) => !isRunning && setHours(Number(e.target.value))}
          className="bg-input border border-border rounded-lg px-3 py-2 text-center text-foreground"
          disabled={isRunning}
          placeholder="H"
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => !isRunning && setMinutes(Number(e.target.value))}
          className="bg-input border border-border rounded-lg px-3 py-2 text-center text-foreground"
          disabled={isRunning}
          placeholder="M"
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => !isRunning && setSeconds(Number(e.target.value))}
          className="bg-input border border-border rounded-lg px-3 py-2 text-center text-foreground"
          disabled={isRunning}
          placeholder="S"
        />
      </div>

      <div className="flex gap-3">
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
    </div>
  );
};

export default TimerWidget;