import Image from 'next/image'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-emerald-100 py-12 min-h-[85vh] lg:py-0 lg:min-h-screen lg:h-screen flex flex-col scroll-mt-24"
    >
      {/* Subtle brand-colored radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_55%)]"></div>
      {/* Soft noise grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:6px_6px]"></div>

      {/* Large brand watermark using the actual logo image (mobile/tablet only) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:hidden" aria-hidden>
        <div className="relative w-[120vmin] h-[120vmin] opacity-[0.06]">
          <div className="absolute inset-0 bg-[url('/logo.png')] bg-no-repeat bg-center bg-contain [mask-image:radial-gradient(white,transparent_70%)]" />
        </div>
      </div>

      {/* Subtle motifs using the actual logo image (kept minimal now to avoid clutter with left column visual) */}
      <div className="hidden" aria-hidden></div>
      
      <div className="container relative z-10 min-h-full">
        <div className="grid min-h-full items-center lg:grid-cols-12 gap-10 lg:pt-24 lg:pb-10">
          {/* Left column: bold logo visual on large screens */}
          <div className="relative hidden lg:block lg:col-span-5">
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl opacity-70 rounded-[3rem]" aria-hidden />
            <div className="relative mx-auto aspect-square w-[80%] overflow-hidden rounded-[2rem] ring-1 ring-black/5 shadow-xl bg-white/50 backdrop-blur">
              <div className="absolute inset-0 bg-[url('/logo.png')] bg-no-repeat bg-center bg-contain scale-110" />
            </div>
          </div>

          {/* Right column: content */}
          <div className="flex min-h-full flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-4xl mx-auto lg:mx-0 lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100 mb-4">
              <span className="text-sm font-medium text-slate-600">✨ Profesjonell • Rask • Rimelig</span>
            </div>
          </Reveal>
          
          <div className="mb-6 flex flex-col items-center">
            {/* Brand logo placed above the main headline, sized responsively (kept on mobile/tablet) */}
            <div className="lg:hidden">
              <Reveal delay={60}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  height={180}
                  width={180}
                  priority
                  className="block h-20 w-auto md:h-28"
                />
              </Reveal>
              <Reveal delay={120}>
                <span className="mt-2 text-slate-600 text-sm md:text-base font-medium">Borgar Flaen Stensrud</span>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <h1 className="mt-2 lg:mt-0 text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-balance">
                Din Bedrift Fortjener<br />en Profesjonell Nettside
              </h1>
            </Reveal>
          </div>
          
          <Reveal delay={260}>
            <p className="text-xl md:text-xl text-slate-700 mb-6 max-w-3xl font-medium">
              Få en moderne, mobiloptimalisert nettside på bare <span className="text-primary font-bold">1 dag</span> for kun <span className="text-primary font-bold">4000 kr</span>
            </p>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8 w-full max-w-3xl lg:max-w-none">
            {[
              { icon: '⚡', text: 'Klar på 24 timer' },
              { icon: '💰', text: '4000 kr fast pris' },
              { icon: '📱', text: 'Mobiloptimalisert' },
              { icon: '🏔️', text: 'Lokal i Telemark' }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col items-center gap-2 p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={300}>
            <div className="relative flex flex-wrap gap-4 justify-center lg:justify-start mb-4">
              {/* Soft glow behind primary CTA */}
              <div className="pointer-events-none absolute -inset-x-6 -top-2 -bottom-2 mx-auto max-w-md blur-2xl opacity-40 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/20 rounded-full" aria-hidden />
              <a href="#bestill" className="btn btn-primary btn-large">
                <span>📅 Book Gratis Konsultasjon</span>
              </a>
              <a href="#eksempler" className="btn btn-secondary btn-large">
                <span>👀 Se Eksempler</span>
              </a>
            </div>
          </Reveal>
          
          <Reveal delay={350}>
            <p className="text-sm text-slate-500 flex items-center gap-3 flex-wrap justify-center lg:justify-start">
              <span>✓ Ingen binding</span>
              <span>•</span>
              <span>✓ Ingen skjulte kostnader</span>
              <span>•</span>
              <span>✓ Garantert resultat</span>
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-3 text-slate-600 flex items-center gap-4 flex-wrap justify-center lg:justify-start text-sm">
              <span className="inline-flex items-center gap-2 bg-white/70 border border-slate-200 rounded-full px-3 py-1">
                <span>📍</span> Lokal i Telemark
              </span>
              <span className="inline-flex items-center gap-2 bg-white/70 border border-slate-200 rounded-full px-3 py-1">
                <span>🔒</span> SSL & sikker hosting
              </span>
              <span className="inline-flex items-center gap-2 bg-white/70 border border-slate-200 rounded-full px-3 py-1">
                <span>⚡</span> Rask levering
              </span>
            </div>
          </Reveal>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce lg:hidden">
  <a href="#problemer" className="flex flex-col items-center text-primary hover:text-primary-dark transition-colors">
          <span className="text-xs font-medium mb-1">Se hvordan</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  )
}
