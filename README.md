# Kanban Productivity Board

A responsive, single-page Kanban board built with **React 18** and **Vite**. Organize tasks across workflow columns, filter by keyword or priority in real time, and persist your board automatically in the browser.

---

## Features

- **Multi-Column Workflow**: Manage tasks across **To Do**, **In Progress**, and **Done** columns with live task counters.
- **Task Management**: Create tasks with priority levels (`Low`, `Medium`, `High`), move cards between columns, or delete completed items.
- **Instant Search & Filtering**: Filter cards across all columns by title, description, or priority using derived state (`useMemo`).
- **Automatic Persistence**: Saves and restores board state via `window.localStorage`.
- **Clean Light Theme**: Styled with CSS custom properties (Crisp Light Gray, Deep Indigo, Electric Violet, and Coral Pink accents) and `lucide-react` icons.

---

## Tech Stack

- **Frontend**: React 18+ (Functional Components & Hooks)
- **Build Tool**: Vite
- **Icons**: `lucide-react`
- **Styling**: CSS3 (CSS Grid, Flexbox, Custom Properties)
- **Linting**: ESLint

---

## Project Structure

```text
kanban-board/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Column.jsx          # Status column container
│   │   ├── FilterBar.jsx       # Search input & priority dropdown
│   │   └── TaskCard.jsx        # Individual task card with controls
│   ├── data/
│   │   └── initialTasks.js     # Column definitions & seed data
│   ├── App.jsx                 # Main board state & persistence
│   ├── App.css                 # Theme variables & grid layout
│   └── main.jsx                # React entry point
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML shell
├── package.json                # Dependencies & scripts
└── vite.config.js              # Vite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher) and **npm**

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/s1ngh-divyanshi/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open the local URL printed in your terminal (typically `http://localhost:5173`).

### Production Build & Linting

```bash
# Build optimized production bundle into dist/
npm run build

# Preview the production build locally
npm run preview

# Run ESLint checks
npm run lint
```

---

## License

Distributed under the [MIT License](https://www.google.com/search?q=LICENSE).
