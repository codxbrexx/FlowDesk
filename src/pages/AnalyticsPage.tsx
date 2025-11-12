import { Navigation } from "@/components/Navigation";
import { TrendingUp, Clock, Target, Award } from "lucide-react";

const AnalyticsPage = () => {
  const weekData = [
    { day: "Mon", hours: 6.5, tasks: 8 },
    { day: "Tue", hours: 7.2, tasks: 10 },
    { day: "Wed", hours: 5.8, tasks: 7 },
    { day: "Thu", hours: 8.1, tasks: 12 },
    { day: "Fri", hours: 6.9, tasks: 9 },
    { day: "Sat", hours: 4.2, tasks: 5 },
    { day: "Sun", hours: 3.5, tasks: 4 },
  ];

  const maxHours = Math.max(...weekData.map((d) => d.hours));

  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold neon-text mb-2">
            Analytics Dashboard
          </h2>
          <p className="text-muted-foreground">
            Track your productivity trends and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">127h</div>
            <p className="text-sm text-muted-foreground">Total Work Hours</p>
            <p className="text-xs text-success mt-1">+12% from last week</p>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-success" />
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-success mb-1">48</div>
            <p className="text-sm text-muted-foreground">Tasks Completed</p>
            <p className="text-xs text-success mt-1">+8% from last week</p>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-warning" />
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-warning mb-1">87%</div>
            <p className="text-sm text-muted-foreground">Productivity Rate</p>
            <p className="text-xs text-success mt-1">+5% from last week</p>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-1">6.8h</div>
            <p className="text-sm text-muted-foreground">Daily Average</p>
            <p className="text-xs text-muted-foreground mt-1">This week</p>
          </div>
        </div>

        <div className="glass-card glass-card-hover p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Weekly Activity
          </h3>
          <div className="space-y-4">
            {weekData.map((day) => (
              <div key={day.day} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{day.day}</span>
                  <div className="flex gap-4">
                    <span className="text-primary">{day.hours}h</span>
                    <span className="text-success">{day.tasks} tasks</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-muted/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                      style={{ width: `${(day.hours / maxHours) * 100}%` }}
                    />
                  </div>
                  <div className="w-24 bg-muted/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-success to-success/70 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(day.tasks / 12) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card glass-card-hover p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Peak Productivity
            </h3>
            <p className="text-muted-foreground mb-4">
              Your most productive day this week was{" "}
              <span className="text-success font-semibold">Thursday</span> with
              8.1 hours of focused work.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-muted/10 rounded">
                <span className="text-muted-foreground">Best Time</span>
                <span className="text-foreground font-semibold">
                  9 AM - 12 PM
                </span>
              </div>
              <div className="flex justify-between p-2 bg-muted/10 rounded">
                <span className="text-muted-foreground">Average Session</span>
                <span className="text-foreground font-semibold">
                  45 minutes
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <h3 className="text-xl font-semibold text-warning mb-4">
              Recommendations
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-success text-lg">✓</span>
                <span className="text-muted-foreground">
                  Your consistency is improving! Keep up the momentum.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">→</span>
                <span className="text-muted-foreground">
                  Consider taking more breaks during long work sessions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warning text-lg">★</span>
                <span className="text-muted-foreground">
                  Try scheduling difficult tasks during your peak hours.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
