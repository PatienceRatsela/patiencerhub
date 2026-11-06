export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1100px] px-6 pb-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="script text-xl text-cream">Patience R.</span>
            <span>© {new Date().getFullYear()} — All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="/#essentials" className="hover:text-gold">Essentials</a>
            <a href="/#registration" className="hover:text-gold">Registration</a>
            <a
              href="https://ratselaacademy.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Ratsela Academy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
