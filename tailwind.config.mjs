/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Colours resolve through CSS custom properties, so a single `.dark`
      // class on <html> re-themes the whole page and no component needs a
      // parallel `dark:` class for every colour it sets.
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
      },
      fontSize: {
        "step--1": "var(--step--1)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
        "step-5": "var(--step-5)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "var(--measure)",
        shell: "62rem",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};

export default config;
