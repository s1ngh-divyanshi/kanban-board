export const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" }
];

export const INITIAL_TASKS = [
  {
    id: "1",
    title: "Set up React + Vite project",
    description: "Initialize repository and install lucide-react icons.",
    priority: "High",
    status: "done"
  },
  {
    id: "2",
    title: "Build Kanban Column layout",
    description: "Render To Do, In Progress, and Done columns side by side.",
    priority: "Medium",
    status: "in-progress"
  },
  {
    id: "3",
    title: "Add localStorage persistence",
    description: "Save tasks automatically whenever a card is moved or added.",
    priority: "Low",
    status: "todo"
  }
];