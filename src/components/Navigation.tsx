import { NavLink } from "@/components/NavLink";
import { Home, Timer, CheckSquare, Wrench, BarChart3, Settings } from "lucide-react";

export const Navigation = () => {
  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/time-tracker", icon: Timer, label: "Time Tracker" },
    { to: "/tasks", icon: CheckSquare, label: "Tasks" },
    { to: "/tools", icon: Wrench, label: "Tools" },
    { to: "/analytics", icon: BarChart3, label: "Analytics" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="glass-card mb-8 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-2xl font-bold text-white">F</span>
          </div>
          <h1 className="text-2xl font-bold neon-text hidden sm:block">FlowDesk</h1>
        </div>

        <div className="flex gap-1 md:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all"
              activeClassName="bg-primary/20 text-primary font-semibold border border-primary/30"
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden md:inline text-sm">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
