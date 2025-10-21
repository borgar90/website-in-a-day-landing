import Reveal from '@/components/Reveal'

export default function PricingSection() {
  return (
  <section id="priser" className="relative overflow-hidden py-20 bg-slate-50 scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(37,99,235,0.06),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_85%,rgba(16,185,129,0.06),transparent_60%)]"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-5xl font-extrabold mb-3">Nettside på 1 dag</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-slate-600">Enkel, transparent prising – ingen skjulte kostnader</p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Basic Package */}
          <Reveal>
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-2">Nettside</h3>
              <div className="text-xs bg-blue-100 text-primary font-semibold px-3 py-1 rounded-full inline-block">Engangsbetaling</div>
            </div>
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold text-slate-600">kr</span>
                <span className="text-5xl font-extrabold text-slate-900">4000</span>
              </div>
              <span className="text-sm text-slate-500 font-medium">én gang</span>
            </div>
            <ul className="text-sm text-slate-700 space-y-2.5 mb-6">
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Profesjonell nettside</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Klar på 1 dag</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Inntil 5 sider</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Kontaktskjema</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Google Maps</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Mobiloptimalisert</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> SSL sertifikat</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Første måned hosting gratis</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Gratis domenehjelp</li>
            </ul>
            </div>
          </Reveal>

          {/* Featured Package */}
          <Reveal delay={150}>
            <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-blue-50 to-white p-8 relative shadow-xl transform md:-translate-y-4 hover:shadow-2xl transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full shadow-lg text-sm font-bold">
              Mest Populær
            </div>
            <div className="absolute -right-3 top-6 rotate-45 bg-amber-500 text-white text-xs font-bold px-6 py-1 shadow-lg">ANBEFALT</div>
            <div className="text-center mb-4 mt-2">
              <h3 className="text-xl font-bold mb-2">Komplett Pakke</h3>
              <div className="text-xs bg-primary text-white font-semibold px-3 py-1 rounded-full inline-block">Alt inkludert</div>
            </div>
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-2 tabular-nums">
                <span className="text-2xl font-bold text-slate-600">kr</span>
                <span className="text-5xl font-extrabold text-slate-900">4000</span>
              </div>
              <div className="mt-2 text-lg font-semibold text-primary">+ 30 kr/mnd hosting</div>
            </div>
            <ul className="text-sm text-slate-700 space-y-2.5 mb-6">
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Alt fra &ldquo;Nettside&rdquo; pakken</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <strong>Hosting (30 kr/mnd)</strong></li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Daglig backup</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 99.9% oppetid garanti</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Teknisk support</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> SSL-fornyelse</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> E-postsupport</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Mindre oppdateringer 1. måned</li>
            </ul>
              <a href="#bestill" className="btn btn-primary btn-block">Bestill Nå →</a>
            </div>
          </Reveal>

          {/* Support Package */}
          <Reveal delay={250}>
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <div className="text-xs bg-blue-100 text-primary font-semibold px-3 py-1 rounded-full inline-block">Etter lansering</div>
            </div>
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold text-slate-600">kr</span>
                <span className="text-5xl font-extrabold text-slate-900">400</span>
              </div>
              <span className="text-sm text-slate-500 font-medium">/time</span>
            </div>
            <ul className="text-sm text-slate-700 space-y-2.5 mb-6">
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Innholdsoppdateringer</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Design-endringer</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Nye funksjoner</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Ekstra sider</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> SEO-forbedringer</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Bildeoptimalisering</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Responsiv support</li>
              <li className="flex items-start text-slate-400"><span className="mr-2">•</span> Minimum 30 minutter</li>
            </ul>
            </div>
          </Reveal>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold mb-6 text-center">Sammenligning med Alternativer</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="py-3 px-4 font-bold text-slate-700"></th>
                  <th className="py-3 px-4 font-bold text-primary text-center bg-primary/5 rounded-t-lg">1-Dags Nettside</th>
                  <th className="py-3 px-4 font-bold text-slate-700 text-center">Tradisjonelt Byrå</th>
                  <th className="py-3 px-4 font-bold text-slate-700 text-center">DIY (Wix/Squarespace)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200 bg-white">
                  <td className="py-4 px-4 font-semibold">Pris</td>
                  <td className="py-4 px-4 text-center font-bold text-primary bg-primary/5">4000 kr</td>
                  <td className="py-4 px-4 text-center">15 000 - 50 000 kr</td>
                  <td className="py-4 px-4 text-center">1 200 - 3 600 kr/år</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="py-4 px-4 font-semibold">Leveringstid</td>
                  <td className="py-4 px-4 text-center font-bold text-primary bg-primary/5">1 dag</td>
                  <td className="py-4 px-4 text-center">2-8 uker</td>
                  <td className="py-4 px-4 text-center">Uker (gjør det selv)</td>
                </tr>
                <tr className="border-b border-slate-200 bg-white">
                  <td className="py-4 px-4 font-semibold">Personlig service</td>
                  <td className="py-4 px-4 text-center font-bold text-primary bg-primary/5">✓ Lokal &amp; personlig</td>
                  <td className="py-4 px-4 text-center">✓ Profesjonelt</td>
                  <td className="py-4 px-4 text-center">✗ Ingen hjelp</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-4 px-4 font-semibold">Kvalitet</td>
                  <td className="py-4 px-4 text-center font-bold text-primary bg-primary/5">✓ Profesjonell</td>
                  <td className="py-4 px-4 text-center">✓ Profesjonell</td>
                  <td className="py-4 px-4 text-center">~ Variabel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
