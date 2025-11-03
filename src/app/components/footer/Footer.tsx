export default function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Jacob Mooradian</span>
        <div className="flex gap-4">
          <a
            className="hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/jacob-mooradian/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jacob Mooradian on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            className="hover:underline underline-offset-4"
            href="https://github.com/jacobmooradian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jacob Mooradian on GitHub"
          >
            GitHub
          </a>
          <a
            className="hover:underline underline-offset-4"
            href="/resume/Jacob_Mooradian_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Jacob Mooradian resume (PDF)"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}