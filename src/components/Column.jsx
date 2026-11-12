import TaskCard from "./TaskCard";

export default function Column({ column, tasks, columnIndex, totalColumns, onMove, onDelete }) {
  return (
    <section className="kanban-column">
      <div className="column-header">
        <h2>{column.title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>

      <div className="column-body">
        {tasks.length === 0 ? (
          <p className="empty-column">No tasks here</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onMove={onMove}
              onDelete={onDelete}
              canMoveLeft={columnIndex > 0}
              canMoveRight={columnIndex < totalColumns - 1}
            />
          ))
        )}
      </div>
    </section>
  );
}