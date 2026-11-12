import { useState, useEffect, useMemo } from "react";
import { Plus } from "lucide-react";
import { COLUMNS, INITIAL_TASKS } from "./data/initialTasks";
import Column from "./components/Column";
import FilterBar from "./components/FilterBar";
import "./App.css";

const STORAGE_KEY = "kanban_tasks_v1";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  const [newTitle, setNewTitle] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");

  // 1. Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // 2. Derived state: compute matching tasks across all columns
  const filteredTasks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      const matchesSearch =
        query === "" ||
        task.title.toLowerCase().includes(query) ||
        (task.description && task.description.toLowerCase().includes(query));

      return matchesPriority && matchesSearch;
    });
  }, [tasks, searchQuery, priorityFilter]);

  function handleAddTask(e) {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      description: "",
      priority: newPriority,
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);
    setNewTitle("");
  }

  function handleMoveTask(taskId, direction) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;
        const currentIndex = COLUMNS.findIndex((c) => c.id === task.status);
        const nextColumn = COLUMNS[currentIndex + direction];
        return nextColumn ? { ...task, status: nextColumn.id } : task;
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  return (
    <div className="app-shell">
      <header className="board-header">
        <h1>Kanban Board</h1>

        <form className="add-task-form" onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="New task title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" className="add-btn">
            <Plus size={16} /> Add Task
          </button>
        </form>
      </header>

      {/* 3. Render FilterBar above the columns */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
      />

      {/* 4. Pass filteredTasks instead of tasks */}
      <main className="board-columns">
        {COLUMNS.map((col, idx) => (
          <Column
            key={col.id}
            column={col}
            tasks={filteredTasks.filter((t) => t.status === col.id)}
            columnIndex={idx}
            totalColumns={COLUMNS.length}
            onMove={handleMoveTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </main>
    </div>
  );
}