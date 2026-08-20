import Image from "next/image";
import { personalInfo } from "../data/portfolio";
import Section from "./Section";

const channels = [
  { key: "linkedin", label: "LinkedIn", handle: "in/vipinsao" },
  { key: "github", label: "GitHub", handle: "@vipinsao" },
];

/**
 * The last screen answers the two questions a recruiter has left: how do I
 * reach him, and can he work my hours.
 *
 * The timezone detail sits here rather than in the hero — the hero gets the
 * one-line version, this gets the overlap arithmetic, including the hours
 * that are not honestly coverable. Volunteering the gap is cheaper than
 * discovering it on a scheduling call.
 */
export default function Contact() {
  const { email, availability, social, name } = personalInfo;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to remote roles, available now."
    >
      <div className="grid gap-12 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <ul className="divide-y divide-line border-y border-line">
            <li>
              <a
                href={`mailto:${email}`}
                className="flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="mono shrink-0 text-muted sm:w-28">Email</span>
                <span className="text-step-1 text-fg">{email}</span>
              </a>
            </li>
            {channels.map((c) => (
              <li key={c.key}>
                <a
                  href={social[c.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="mono shrink-0 text-muted sm:w-28">
                    {c.label}
                  </span>
                  <span className="text-step-1 text-fg">{c.handle}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-measure">
            <h3 className="mono uppercase tracking-[0.14em] text-muted">
              Hours
            </h3>
            <p className="mt-3 text-step-0 text-fg">{availability.base}</p>
            <ul className="mt-3 space-y-1.5">
              {availability.overlap.map((line) => (
                <li
                  key={line}
                  className="border-l border-line pl-4 text-step-0 text-fg"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-step--1 text-muted">
              {availability.caveat}
            </p>
          </div>
        </div>

        <div className="order-first lg:order-none">
          <Image
            src="/user-vipin.png"
            alt={name}
            width={160}
            height={160}
            sizes="160px"
            className="h-28 w-28 rounded-full border border-line object-cover sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </Section>
  );
}
