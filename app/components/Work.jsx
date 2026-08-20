import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/**
 * Four case studies rather than a grid of tiles.
 *
 * A tile can only say what something is; the interesting part of every one of
 * these is what was measured and what is still wrong, and neither of those
 * fits on a card. They used to be behind a modal, which meant the evidence
 * was a click away from anyone skimming and invisible to anyone who never
 * clicked. It is on the page now.
 *
 * The order runs from the most measurable to the least.
 */
export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Four projects, and what each one is measured at."
    >
      <p className="-mt-6 mb-14 max-w-measure text-step-0 text-muted">
        Most of what I fix is the class of bug that returns a plausible wrong
        answer instead of an error, so every number below comes out of a
        command in the repository it belongs to. Two of these have no demo
        link on purpose: the deployments that used to be linked run the builds
        these rewrites replaced, and pointing a reader at those would be worse
        than pointing them at nothing.
      </p>

      <div className="space-y-20 sm:space-y-28">
        {caseStudies.map((p) => (
          <Reveal key={p.id} as="article">
            <CaseStudy project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CaseStudy({ project: p }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
      <div className="min-w-0">
        <p className="mono text-muted">{p.index}</p>

        <h3 className="mt-2 text-step-3 text-fg">{p.title}</h3>

        <p className="mt-3 max-w-measure text-step-0 text-muted">{p.summary}</p>

        {/* The headline number, set large enough to be read in a scroll-past
            and in mono so the eye finds it without a colour or a badge. */}
        <p className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-display text-step-4 leading-none text-fg">
            {p.headline.value}
          </span>
          <span className="mono text-accent">{p.headline.unit}</span>
          <span className="text-step--1 text-muted">{p.headline.note}</span>
        </p>

        <dl className="mt-8 space-y-6">
          <Block term="Problem">{p.problem}</Block>
          <Block term="What I built">{p.built}</Block>

          <div>
            <dt className="mono uppercase tracking-[0.14em] text-muted">
              Measured
            </dt>
            <dd className="mt-2">
              <ul className="max-w-measure space-y-2">
                {p.measured.map((m) => (
                  <li
                    key={m}
                    className="border-l border-line-strong pl-4 text-step-0 text-fg"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <Block term="What I would change">{p.change}</Block>
        </dl>

        <p className="mono mt-8 text-muted">{p.stack.join(" · ")}</p>

        {/* py-1/-my-1 rather than a bigger font: these came out 23px tall,
            one pixel under WCAG 2.5.8's 24px target minimum. */}
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link -my-1 inline-block py-1 text-step--1"
          >
            Source
            <ArrowUpRight size={13} aria-hidden="true" className="ml-1 inline -translate-y-px" />
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link -my-1 inline-block py-1 text-step--1"
            >
              Live
              <ArrowUpRight size={13} aria-hidden="true" className="ml-1 inline -translate-y-px" />
            </a>
          )}
        </div>
      </div>

      {/* Screenshots are supporting evidence, not the argument — small, at the
          side on a wide screen, and lazily loaded so they cost a phone
          nothing until they are scrolled to. */}
      {p.image && (
        <div className="order-first lg:order-none">
          <div className="overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src={p.image}
              alt={`${p.title} interface`}
              width={480}
              height={300}
              sizes="(min-width: 1024px) 15rem, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Block({ term, children }) {
  return (
    <div>
      <dt className="mono uppercase tracking-[0.14em] text-muted">{term}</dt>
      <dd className="mt-2 max-w-measure text-step-0 text-fg">{children}</dd>
    </div>
  );
}
