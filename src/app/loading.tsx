export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[var(--bg)] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[var(--orange)] border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-[var(--text-secondary)] font-mono tracking-wider uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}
