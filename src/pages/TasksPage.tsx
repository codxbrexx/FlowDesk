import { Navigation } from "@/components/Navigation";
import { TodoList } from "@/components/TodoList";

const TasksPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold neon-text mb-2">Task Management</h2>
          <p className="text-muted-foreground">
            Organize and track your daily tasks efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TodoList />
          </div>

          <div className="space-y-6">
            <div className="glass-card glass-card-hover p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Task Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Tasks</span>
                  <span className="text-2xl font-bold text-foreground">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="text-2xl font-bold text-success">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active</span>
                  <span className="text-2xl font-bold text-primary">6</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <div className="mt-2 bg-muted/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-success to-primary h-full rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <span className="text-sm text-success font-semibold mt-1 block">
                    75%
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6">
              <h3 className="text-lg font-semibold text-warning mb-4">
                Quick Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-success">•</span>
                  <span>Break large tasks into smaller subtasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">•</span>
                  <span>Prioritize 3 important tasks each day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">•</span>
                  <span>Review and update tasks regularly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
