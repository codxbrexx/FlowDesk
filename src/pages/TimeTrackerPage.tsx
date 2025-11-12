import { Navigation } from "@/components/Navigation";
import { TimeTracker } from "@/components/TimeTracker";

const TimeTrackerPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold neon-text mb-2">Time Tracker</h2>
          <p className="text-muted-foreground">
            Track your work sessions with Pomodoro technique or clock-in/out
            system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TimeTracker />

          <div className="glass-card glass-card-hover p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Today's Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Work Sessions</span>
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Break Sessions</span>
                <span className="text-xl font-bold text-success">3</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Total Time</span>
                <span className="text-xl font-bold text-warning">2h 15m</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card glass-card-hover p-6 mt-6">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Recent Sessions
          </h3>
          <div className="space-y-2">
            {[
              { time: "09:00 - 09:25", type: "Work", duration: "25 min" },
              { time: "09:30 - 09:35", type: "Break", duration: "5 min" },
              { time: "09:40 - 10:05", type: "Work", duration: "25 min" },
              { time: "10:10 - 10:15", type: "Break", duration: "5 min" },
            ].map((session, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors"
              >
                <div>
                  <span className="text-foreground font-medium">
                    {session.type}
                  </span>
                  <span className="text-muted-foreground text-sm ml-3">
                    {session.time}
                  </span>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    session.type === "Work" ? "text-primary" : "text-success"
                  }`}
                >
                  {session.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerPage;
