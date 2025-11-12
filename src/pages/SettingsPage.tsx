import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Clock, Palette, Database } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold neon-text mb-2">Settings</h2>
          <p className="text-muted-foreground">
            Customize your FlowDesk experience
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Profile Settings
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Display Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  defaultValue="John Doe"
                  className="bg-input border-border"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  defaultValue="john@example.com"
                  className="bg-input border-border"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Save Profile
              </Button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-warning" />
              <h3 className="text-xl font-semibold text-foreground">
                Notifications
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Task Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about upcoming tasks
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Timer Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Sound alert when timer completes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Break Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Remind you to take breaks
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-success" />
              <h3 className="text-xl font-semibold text-foreground">
                Pomodoro Timer
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="workDuration">Work Duration (minutes)</Label>
                <Input
                  id="workDuration"
                  type="number"
                  defaultValue="25"
                  min="1"
                  max="60"
                  className="bg-input border-border"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="shortBreak">Short Break (minutes)</Label>
                <Input
                  id="shortBreak"
                  type="number"
                  defaultValue="5"
                  min="1"
                  max="30"
                  className="bg-input border-border"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="longBreak">Long Break (minutes)</Label>
                <Input
                  id="longBreak"
                  type="number"
                  defaultValue="15"
                  min="1"
                  max="60"
                  className="bg-input border-border"
                />
              </div>
              <Button className="bg-success hover:bg-success/90 text-white">
                Save Timer Settings
              </Button>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">
                Appearance
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animations</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable smooth transitions and effects
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Reduced Motion</Label>
                  <p className="text-sm text-muted-foreground">
                    Minimize animations for better performance
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-semibold text-foreground">
                Data Management
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Manage your stored data and preferences
              </p>
              <div className="flex gap-3">
                <Button variant="outline">Export Data</Button>
                <Button
                  variant="outline"
                  className="text-destructive border-destructive hover:bg-destructive/10"
                >
                  Clear All Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
