"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-skills)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <p className="text-sm text-[var(--text-secondary)]">
          &copy; {year} Ahmad Hassan
        </p>

        <div className="flex items-center gap-5">
          {[
            { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-h01" },
            { icon: "fab fa-github", label: "GitHub", href: "https://github.com/Ahmadhassan011" },
            { icon: "fas fa-envelope", label: "Email", href: "mailto:ahmadhassan6531@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
              aria-label={s.label}
            >
              <i className={s.icon} />
            </a>
          ))}
          <button
            onClick={scrollToTop}
            title="Back to top"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
            aria-label="Back to top"
          >
            &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
