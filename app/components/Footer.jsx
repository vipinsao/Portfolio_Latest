export default function Footer() {
  return (
    <footer className="w-full border-t py-8 bg-white text-center">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Vipin Chandra Sao — Built with Next.js
      </p>
    </footer>
  );
}
