import { ArrowUpRight } from "lucide-react";
import { personalInfo, proof } from "../data/portfolio";

/**
 * The first screen has one job: make someone who already has the link decide
 * to keep reading. So it carries the name, one sentence that says what the
 * work actually is, and two facts that can be clicked and checked — nothing
 * else competes for the space.
 *
 * What is deliberately not here: a photograph (it pushed the proof below the
 * fold at 375px, and the face is in the contact section instead), a stack
 * badge grid, and a "passionate about" sentence.
 */
export default function Hero() {
  const { name, title, lead, availability, resumeUrl, email } = personalInfo;

  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-shell px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        <p className="mono uppercase tracking-[0.14em] text-muted">
          {title} · Remote, UTC+5:30
        </p>

        <h1
          id="hero-heading"
          className="mt-4 text-step-5 tracking-tight text-fg"
        >
          {name}
        </h1>

        <p className="mt-5 max-w-measure text-step-1 leading-relaxed text-muted">
          {lead}
        </p>

        {/* The proof strip. Two rows, both links, both checkable in one
            click. This is the whole reason the hero exists. */}
        <ul className="mt-9 max-w-measure divide-y divide-line border-y border-line">
          {proof.map((p) => (
            <li key={p.label}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:gap-5"
              >
                <span className="mono shrink-0 text-accent sm:w-32">
                  {p.label}
                </span>
                <span className="flex-1 text-step-0 text-fg">
                  {p.text}
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="ml-1.5 inline-block shrink-0 -translate-y-px text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-fg px-5 py-2.5 text-step--1 font-medium text-bg transition-opacity hover:opacity-85"
          >
            Résumé
          </a>
          <a
            href={`mailto:${email}`}
            className="rounded-md border border-line-strong px-5 py-2.5 text-step--1 font-medium text-fg transition-colors hover:border-fg"
          >
            {email}
          </a>
        </div>

        <p className="mt-6 max-w-measure text-step--1 text-muted">
          {availability.short}
        </p>
      </div>
    </section>
  );
}
