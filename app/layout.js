"use client";
import "./globals.css";

import { ModalProvider } from "./context/ModalContext";
import ModalComponent from "./components/ModalComponent";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        ></ThemeProvider>
        <ModalProvider>
          {children}
          <ModalComponent />
        </ModalProvider>
        <ThemeProvider />
      </body>
    </html>
  );
}
