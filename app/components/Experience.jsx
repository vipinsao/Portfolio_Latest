import { experience, education } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/**
 * Two roles, described by mechanism rather than by responsibility. "Owned the
 * analytics pipeline" is unfalsifiable; "the pages overlapped, so the result
 * was 11.4% short" is not.
 *
 * A two-month research internship from 2024 used to sit here. It is on the
 * résumé, where a reader who wants a complete history will look; on a page
 * whose first pass is measured in seconds it was taking room from the two
 * entries that carry evidence.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where the production work happened."
    >
      <div className="space-y-14">
        {experience.map((job) => (
          <Reveal key={job.id} as="article">
            <div className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
              <p className="mono pt-1 text-muted">{job.period}</p>

              <div className="min-w-0">
                <h3 className="text-step-2 text-fg">{job.role}</h3>
                <p className="mt-1 text-step-0 text-muted">
                  {job.company}
                  {job.context && (
                    <>
                      {" — "}
                      <span className="italic">{job.context}</span>
                    </>
                  )}
                </p>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="max-w-measure border-l border-line pl-4 text-step-0 text-fg"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
            <p className="mono pt-1 text-muted">{education.period}</p>
            <p className="text-step-0 text-fg">
              {education.degree}
              <span className="text-muted"> — {education.institution}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
