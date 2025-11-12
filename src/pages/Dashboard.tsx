import { CurrentTime } from "@/components/CurrentTime";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import {
  Timer,
  CheckSquare,
  Wrench,
  BarChart3,
  TrendingUp,
  Clock,
  ListTodo,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      label: "Total Work Hours",
      value: "127h",
      icon: Clock,
      color: "text-primary",
    },
    {
      label: "Tasks Completed",
      value: "48",
      icon: ListTodo,
      color: "text-success",
    },
    {
      label: "Productivity Rate",
      value: "87%",
      icon: TrendingUp,
      color: "text-warning",
    },
  ];

  const quickActions = [
    {
      title: "Time Tracker",
      description: "Start Pomodoro or clock-in",
      icon: Timer,
      link: "/time-tracker",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Tasks",
      description: "Manage your todo list",
      icon: CheckSquare,
      link: "/tasks",
      color: "from-success/20 to-success/5",
    },
    {
      title: "Tools",
      description: "Calculator, stopwatch & timer",
      icon: Wrench,
      link: "/tools",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Analytics",
      description: "View productivity insights",
      icon: BarChart3,
      link: "/analytics",
      color: "from-warning/20 to-warning/5",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="glass-card glass-card-hover p-8 text-center">
          <h2 className="text-4xl font-bold neon-text mb-3">Welcome Back!</h2>
          <p className="text-muted-foreground text-lg">
            Ready to boost your productivity today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card glass-card-hover p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <CurrentTime />
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.link}>
                <div
                  className={`glass-card glass-card-hover p-6 h-full bg-gradient-to-br ${action.color} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <action.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {action.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
