import { ArrowUpRight } from "lucide-react";
import { openSource, writing } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/**
 * The rarest thing on this page, so it gets a section rather than a badge in
 * a grid of five "achievements" — three of which were counters of things
 * counted elsewhere on the same page.
 *
 * Getting a patch through review on a project you do not maintain is a
 * different skill from shipping to your own repository, and it is the one
 * claim here that a stranger verified.
 *
 * Writing sits underneath as plain links: the posts are real and checkable,
 * but they are not the argument, and each one used to occupy a card the size
 * of a case study.
 */
export default function OpenSource() {
  return (
    <Section
      id="open-source"
      eyebrow="Open source"
      title="Two patches merged into projects I do not maintain."
    >
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
        {openSource.map((c) => (
          <Reveal key={c.pr} as="article">
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full border-t-2 border-fg pt-5"
            >
              <p className="mono flex flex-wrap items-baseline gap-x-3 text-muted">
                <span className="text-accent">{c.pr}</span>
                <span>{c.merged}</span>
              </p>
              <h3 className="mt-3 text-step-2 text-fg">
                {c.project}
                {c.stars && (
                  <span className="mono ml-2 align-middle text-muted">
                    {c.stars}
                  </span>
                )}
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="ml-1.5 inline-block -translate-y-0.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-1"
                />
              </h3>
              <p className="mt-3 text-step-0 text-muted">{c.text}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 border-t border-line pt-8">
          <h3 className="mono uppercase tracking-[0.14em] text-muted">
            Written and published
          </h3>
          <ul className="mt-4 divide-y divide-line">
            {writing.map((w) => (
              <li key={w.href}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="mono shrink-0 text-muted sm:w-52">
                    {w.where} · {w.date}
                  </span>
                  <span className="max-w-measure flex-1 text-step-0 text-fg group-hover:text-accent">
                    {w.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
