"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

// useLayoutEffect has no meaning on the server and React says so loudly.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * The only animation on this page: twelve pixels up, fading in, 0.45s, once,
 * on entering the viewport. No bounce, no spring, no stagger cascade, no
 * parallax, no auto-typing — a reader who arrived from a recruiter's inbox is
 * trying to read, and anything moving while they do that works against the
 * page.
 *
 * It is written this way, rather than as a `<motion.div initial={{opacity:0}}>`,
 * because that is what the site used to do and it had a real defect: motion
 * renders `initial` into the server HTML, so the prerendered page shipped
 * `style="opacity:0"` on every revealed block. If the JavaScript chunk failed
 * to load — flaky hotel wifi, a corporate proxy, an extension — the whole
 * page was blank text on a blank background. On a page whose entire job is
 * being read, that is not a trade worth making for a fade.
 *
 * So the server HTML is visible, always. Three gates decide whether anything
 * animates at all, and every one of them fails towards "readable":
 *
 *   1. `useReducedMotion()` — the OS setting. Has to be checked in JS as well
 *      as CSS, because this component writes a class the CSS then reads.
 *   2. The layout effect only *arms* a block that is below the fold at
 *      hydration. Something already on screen is never hidden, so there is no
 *      flash — the case a plain mount effect gets wrong.
 *   3. `useInView(..., { once: true })` disarms it and it stays disarmed.
 *
 * The transition itself is CSS (see globals.css), so it is also covered by
 * the `prefers-reduced-motion` block there.
 */
export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [armed, setArmed] = useState(false);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  useIsomorphicLayoutEffect(() => {
    if (reduced || inView) return;
    const el = ref.current;
    if (!el) return;
    // 0.9 rather than 1.0: something peeking into the bottom of the viewport
    // is close enough to being read that hiding it would be noticed.
    if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
      setArmed(true);
    }
    // Intentionally hydration-only: re-arming on a later render would hide
    // something the reader is already looking at.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const state = armed && !inView ? "hidden" : "shown";

  return (
    <Tag ref={ref} data-reveal={state} className={className}>
      {children}
    </Tag>
  );
}
