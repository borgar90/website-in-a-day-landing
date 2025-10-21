"use client"
import { useId, useState } from 'react'

const faqs = [
  {
    q: 'Hva er inkludert i 4000 kr?',
    a: 'Du får en komplett, profesjonell nettside med inntil 5 sider, responsivt design, kontaktskjema, Google Maps, SSL-sertifikat, og grunnleggende SEO. Første måned hosting er også inkludert.'
  },
  {
    q: 'Tar det virkelig bare 1 dag?',
    a: 'Ja! Vi møtes på formiddagen, og nettsiden er som regel klar samme kveld. Forutsatt at du har materiell (logo, bilder, tekst) klart.'
  },
  {
    q: 'Hva må jeg ha klart før møtet?',
    a: 'Ideelt sett: logo, 5-10 bilder av bedriften/produktene, tekst om bedriften, åpningstider, og kontaktinfo. Hvis du ikke har alt klart, hjelper jeg deg!'
  },
  {
    q: 'Hva koster hosting?',
    a: 'Hosting koster 30 kr per måned og inkluderer serverplass, SSL-sertifikat, daglig backup, og teknisk support. Første måned er gratis.'
  },
  {
    q: 'Kan jeg gjøre endringer selv senere?',
    a: 'Du eier nettsiden og kan flytte den når som helst. Mindre endringer første måned er inkludert. Større endringer senere koster 400 kr/time.'
  },
  {
    q: 'Hjelper du med domenekjøp?',
    a: 'Ja! Jeg hjelper deg gratis med å kjøpe domene (ca. 150 kr/år) og sette opp alt teknisk. Du trenger ikke å kunne noe om dette.'
  },
  {
    q: 'Hva om jeg ikke er fornøyd?',
    a: 'Du godkjenner nettsiden før den går live. Jeg gjør alle nødvendige justeringer til du er fornøyd. Hvis du angrer før vi starter utvikling, får du pengene tilbake.'
  },
  {
    q: 'Fungerer nettsiden på mobil?',
    a: 'Absolutt! Alle nettsider jeg lager er fullt responsiv og ser perfekt ut på mobil, tablet og desktop.'
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)
  const baseId = useId()
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Ofte Stilte Spørsmål</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b py-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-primary py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`${baseId}-panel-${i}`}
              >
                <span>{faq.q}</span>
                <svg className={`h-5 w-5 transition-transform ${open === i ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <div id={`${baseId}-panel-${i}`} className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="mt-2 text-slate-700 text-base animate-fadein">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* Andre tjenester */}
    <section className="pt-10 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-primary text-center">Andre tjenester</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Nettbutikker */}
          <div className="group rounded-2xl border border-primary/10 bg-white/90 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="mb-3 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-orange-200 to-orange-400 text-3xl shadow-sm group-hover:scale-105 transition-transform">🛒</div>
            <div className="font-semibold text-primary text-lg mb-1">Nettbutikker</div>
            <div className="text-slate-700 mb-2 text-sm">Komplett oppsett av moderne nettbutikk med betaling, lager og frakt.</div>
          </div>
          {/* Softwareutvikling */}
          <div className="group rounded-2xl border border-primary/10 bg-white/90 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="mb-3 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-200 to-blue-400 text-3xl shadow-sm group-hover:scale-105 transition-transform">💻</div>
            <div className="font-semibold text-primary text-lg mb-1">Softwareutvikling</div>
            <div className="text-slate-700 mb-2 text-sm">Skreddersydd programvare og integrasjoner for din bedrift.</div>
          </div>
          {/* Agentisk AI-team */}
          <div className="group rounded-2xl border border-primary/10 bg-white/90 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="mb-3 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-400 text-3xl shadow-sm group-hover:scale-105 transition-transform">🤖</div>
            <div className="font-semibold text-primary text-lg mb-1">Agentisk AI-team</div>
            <div className="text-slate-700 mb-2 text-sm">Oppsett av hele kundeservice- eller salgsteam basert på kunstig intelligens.</div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="#bestill" className="btn btn-primary btn-large shadow-md hover:shadow-xl transition">Kontakt for konsultasjon</a>
        </div>
      </div>
    </section>
    </section>
  )
}
