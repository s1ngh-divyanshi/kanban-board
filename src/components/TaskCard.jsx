import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";

export default function TaskCard({ task, onMove, onDelete, canMoveLeft, canMoveRight }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        <button
          className="icon-btn delete-btn"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          <Trash2 size={15} />
        </button>
      </div>

      <h3 className="task-title">{task.title}</h3>
      {task.description && <p className="task-desc">{task.description}</p>}

      <div className="task-actions">
        <button
          className="move-btn"
          disabled={!canMoveLeft}
          onClick={() => onMove(task.id, -1)}
        >
          <ArrowLeft size={14} /> Move Left
        </button>
        <button
          className="move-btn"
          disabled={!canMoveRight}
          onClick={() => onMove(task.id, 1)}
        >
          Move Right <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}