export default function Footer() {
    return (
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Jacob Mooradian</span>
          <div className="flex gap-4">
            <a className="hover:underline underline-offset-4" href="#" target="_blank">LinkedIn</a>
            <a className="hover:underline underline-offset-4" href="#" target="_blank">GitHub</a>
            <a className="hover:underline underline-offset-4" href="#" target="_blank">Figma</a>
          </div>
        </div>
      </footer>
    );
  }