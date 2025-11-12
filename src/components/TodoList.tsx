import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckSquare, X } from "lucide-react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckSquare className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold neon-text">Todo List</h2>
      </div>

      <div className="flex gap-2 mb-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
          className="flex-1 bg-input border-border"
        />
        <Button onClick={addTodo} className="bg-success hover:bg-success/90 text-white">
          Add
        </Button>
      </div>

      <div className="flex gap-2 mb-4">
        {(["all", "active", "completed"] as Filter[]).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f)}
            className="flex-1 capitalize"
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-muted-foreground italic py-8">No tasks found</p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-2 bg-muted/20 rounded-lg px-3 py-2 group hover:bg-muted/30 transition-colors"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-4 h-4 rounded accent-primary cursor-pointer"
              />
              <span className={`flex-1 ${todo.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                {todo.text}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">{todos.length} tasks</span>
        {todos.some((t) => t.completed) && (
          <Button variant="ghost" size="sm" onClick={clearCompleted} className="text-destructive hover:text-destructive">
            Clear Completed
          </Button>
        )}
      </div>
    </div>
  );
};
export default TodoList;