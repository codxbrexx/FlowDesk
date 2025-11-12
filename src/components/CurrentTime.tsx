import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-warning" />
        <h2 className="text-xl font-semibold neon-text">Current Time</h2>
      </div>

      <div className="text-center space-y-3">
        <div className="digital-display text-4xl">
          {formatTime(time)}
        </div>
        <p className="text-muted-foreground text-sm">
          {formatDate(time)}
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold">Timezone:</span> {getTimezone()}
        </p>
      </div>
    </div>
  );
};
