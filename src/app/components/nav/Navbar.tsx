import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          jacobmooradian<span className="text-neutral-400">/</span>portfolio
        </Link>

        <nav className="hidden sm:flex gap-6 text-sm">
          {/* Home (route) */}
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
          {/* Keep in-page anchor for Projects on the homepage */}
          <Link href="/projects" className="hover:underline underline-offset-4">Projects</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
}