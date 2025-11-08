// "use client";
// import "./globals.css";

// import { ModalProvider } from "./context/ModalContext";
// import ModalComponent from "./components/ModalComponent";
// import { ThemeProvider } from "./components/ThemeProvider";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem={false}
//         >
//           <ModalProvider>
//             {children}
//             <ModalComponent />
//           </ModalProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

"use client";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider"; // 👈 use our custom wrapper
import { ModalProvider } from "./context/ModalContext";
import ModalComponent from "./components/ModalComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white dark:bg-neutral-950">
        <ThemeProvider>
          <ModalProvider>
            {children}
            <ModalComponent />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
