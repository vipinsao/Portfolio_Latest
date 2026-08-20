"use client";

import ThemeProvider from "./ThemeProvider";
import { ModalProvider } from "../context/ModalContext";
import ModalComponent from "./ModalComponent";

/**
 * Every client-side provider the app needs, in one client component.
 *
 * This exists so `app/layout.js` can stay a server component. A layout marked
 * "use client" cannot export `metadata` — the App Router only reads that export
 * from a server module — which is why the site shipped with no <title>, no
 * description and no Open Graph tags at all.
 */
export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        {children}
        <ModalComponent />
      </ModalProvider>
    </ThemeProvider>
  );
}
