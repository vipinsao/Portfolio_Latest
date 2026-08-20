"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Every client-side provider the app needs, in one client component.
 *
 * This exists so `app/layout.js` can stay a server component. A layout marked
 * "use client" cannot export `metadata` — the App Router only reads that
 * export from a server module — which is why the site once shipped with no
 * <title>, no description and no Open Graph tags at all.
 *
 * `defaultTheme: "system"` means the page arrives in whatever the reader's OS
 * already asked for. The toggle in the nav writes an override; it is not the
 * primary control and does not need to be.
 */
export default function Providers({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="vipin-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
