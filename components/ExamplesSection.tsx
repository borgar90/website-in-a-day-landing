import Reveal from '@/components/Reveal'

export default function ExamplesSection() {
  return (
  <section id="eksempler" className="py-16 bg-white scroll-mt-24">
      <div className="container">
        <div className="text-center mb-8">
          <Reveal>
            <h2 className="text-3xl font-bold mb-2">Se Hva Du Får</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-600">Profesjonelle, moderne nettsider - klar på 1 dag</p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Reveal>
            <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-xs bg-primary text-white px-2 py-1 rounded">Demo</div>
              <div className="w-32 h-24 bg-gradient-to-br from-orange-100 to-orange-300 rounded-lg flex items-center justify-center text-4xl">🍕</div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Pizzeria / Restaurant</h3>
              <p className="text-slate-600 mb-2">Komplett nettside med meny, priser, bestillingsskjema og Google Maps.</p>
              <a href="/../demos/pizzeria/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Se Live Demo →</a>
            </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-xs bg-primary text-white px-2 py-1 rounded">Demo</div>
              <div className="w-32 h-24 bg-gradient-to-br from-purple-100 to-purple-300 rounded-lg flex items-center justify-center text-4xl">✂️</div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Frisør / Barbershop</h3>
              <p className="text-slate-600 mb-2">Elegant design med tjenester, prisliste, galleri og kontaktskjema.</p>
              <a href="/../demos/barbershop/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Se Live Demo →</a>
            </div>
            </div>
          </Reveal>
        </div>
        <div className="bg-slate-50 rounded-xl p-6">
          <Reveal>
            <h3 className="font-semibold mb-4">Alle Nettsider Inkluderer:</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              '✓ Responsivt design (mobil, tablet, desktop)',
              '✓ Kontaktskjema med e-postvarsel',
              '✓ Google Maps integrasjon',
              '✓ Sosiale medier lenker',
              '✓ SSL sertifikat (sikker HTTPS)',
              '✓ Grunnleggende SEO',
              '✓ Rask lastetid',
              '✓ Åpningstider og kontaktinfo',
            ].map((t, i) => (
              <Reveal key={i} delay={i * 60}>
                <div>{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
