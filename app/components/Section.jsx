/**
 * One shell for every section: the same measure, the same rhythm, the same
 * hairline between them. Whitespace is the only separator — no cards inside
 * cards, no alternating background colours.
 *
 * The eyebrow is a <p>, not a heading, so the document outline stays
 * h1 → h2 → h3 with nothing skipped.
 */
export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`border-t border-line scroll-mt-20 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 sm:mb-14">
          {eyebrow && (
            <p className="mono mb-3 uppercase tracking-[0.14em] text-muted">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="max-w-measure text-step-4 text-fg"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
