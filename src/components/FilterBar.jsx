import { Search, X } from "lucide-react";

export default function FilterBar({
  searchQuery,
  onSearchChange,
  priorityFilter,
  onPriorityChange,
}) {
  const hasActiveFilters = searchQuery.trim() !== "" || priorityFilter !== "All";

  function handleClear() {
    onSearchChange("");
    onPriorityChange("All");
  }

  return (
    <div className="filter-bar">
      <div className="search-input-wrapper">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <select
        value={priorityFilter}
        onChange={(e) => onPriorityChange(e.target.value)}
        aria-label="Filter by priority"
      >
        <option value="All">All Priorities</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>

      {hasActiveFilters && (
        <button type="button" className="clear-filters-btn" onClick={handleClear}>
          <X size={14} /> Clear
        </button>
      )}
    </div>
  );
}