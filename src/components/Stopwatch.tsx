import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { StopCircle } from "lucide-react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <StopCircle className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold neon-text">Stopwatch</h2>
      </div>

      <div className="text-center mb-6">
        <div className="digital-display text-3xl">
          {formatTime(time)}
        </div>
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
        <Button
          onClick={handleLap}
          disabled={!isRunning}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          Lap
        </Button>
      </div>

      {laps.length > 0 && (
        <div className="mt-4 max-h-32 overflow-y-auto space-y-2">
          {laps.map((lap, index) => (
            <div key={index} className="flex justify-between text-sm text-muted-foreground bg-muted/20 rounded px-3 py-1">
              <span>Lap {index + 1}</span>
              <span className="font-mono">{formatTime(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Stopwatch;