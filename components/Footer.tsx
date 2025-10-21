export default function Footer() {
  const linkClass =
    "inline-block pb-0.5 text-slate-300 hover:text-white transition-colors bg-gradient-to-r from-primary to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] duration-300 ease-out";

  return (
    <footer className="bg-slate-950 text-white">
      {/* Top gradient border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" aria-hidden="true" />

      <div className="container max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight">🌐 1-Dags Nettside</h3>
            <p className="mt-2 text-sm text-slate-400">
              Profesjonelle nettsider for små bedrifter i Telemark.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {/* Social icons */}
              <a
                href="#"
                aria-label="Facebook"
                className="group inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-slate-200 group-hover:text-white"
                >
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.78c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.14.19 2.14.19v2.36h-1.21c-1.19 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.91h-2.24V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="group inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-slate-200 group-hover:text-white"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 7.25a.75.75 0 1 1-.75.75A.75.75 0 0 1 18 7.25Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="group inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-slate-200 group-hover:text-white"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.84v2.19h.05c.54-1.02 1.86-2.1 3.83-2.1 4.09 0 4.84 2.7 4.84 6.21V24h-4v-6.92c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.65V24h-4V8Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white/90">Tjenester</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#hvordan" className={linkClass}>
                  Hvordan det fungerer
                </a>
              </li>
              <li>
                <a href="#eksempler" className={linkClass}>
                  Se eksempler
                </a>
              </li>
              <li>
                <a href="#priser" className={linkClass}>
                  Priser
                </a>
              </li>
              <li>
                <a href="#bestill" className={linkClass}>
                  Bestill nettside
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="tel:+4797501753" className={linkClass}>
                  📞 +47 975 01 753
                </a>
              </li>
              <li>
                <a href="mailto:borgar90@gmail.com" className={linkClass}>
                  📧 borgar90@gmail.com
                </a>
              </li>
              <li className="text-slate-400">📍 Skien, Telemark, Norge</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90">Lenker</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/personvern" className={linkClass}>
                  Personvern
                </a>
              </li>
              <li>
                <a href="/vilkar" className={linkClass}>
                  Vilkår
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Borgar Stensrud. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  )
}
