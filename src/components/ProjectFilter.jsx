const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'java', label: 'Java' },
  { id: 'react', label: 'React' },
  { id: 'ai', label: 'AI' },
];

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="project-filter" role="tablist" aria-label="Filter projects by category">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          role="tab"
          aria-selected={active === f.id}
          className={`project-filter__chip ${active === f.id ? 'is-active' : ''}`}
          onClick={() => onChange(f.id)}
        >
          {f.label}
        </button>
      ))}

      <style>{`
        .project-filter {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 44px;
        }
        .project-filter__chip {
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 14px; font-weight: 600;
          background: var(--surface); border: 1px solid var(--border);
          color: var(--text-2); cursor: pointer;
          transition: all 0.25s var(--ease);
        }
        .project-filter__chip:hover { border-color: var(--primary); color: var(--text); }
        .project-filter__chip.is-active {
          background: linear-gradient(100deg, var(--blue), var(--cyan));
          color: #fff; border-color: transparent;
        }
      `}</style>
    </div>
  );
}

export { FILTERS };
