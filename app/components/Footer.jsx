export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 py-8 bg-white dark:bg-neutral-950 text-center">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Vipin Chandra Sao — Built with Next.js
      </p>
    </footer>
  );
}
