import Reveal from '@/components/Reveal'

export default function TimelineSection() {
  const steps = [
    {
      number: 1,
      title: 'Book Gratis Konsultasjon',
      desc: 'Vi møtes (fysisk eller digitalt) for å diskutere dine behov. Ta med logo, bilder og fortell om bedriften din.',
      duration: '📅 1-2 timer',
    },
    {
      number: 2,
      title: 'Jeg Bygger Nettsiden',
      desc: 'Samme dag starter jeg utviklingen. Du får link til forhåndsvisning underveis, så du kan se fremgangen.',
      duration: '⚡ 4-6 timer',
    },
    {
      number: 3,
      title: 'Du Godkjenner',
      desc: 'Gjennomgå nettsiden og gi tilbakemelding. Jeg gjør nødvendige justeringer umiddelbart.',
      duration: '✅ 1 time',
    },
    {
      number: 4,
      title: 'Lansering!',
      desc: 'Nettsiden går live samme kveld! Du får instruksjoner for hvordan dele den på sosiale medier.',
      duration: '🚀 Samme dag',
    },
  ]
  return (
  <section id="hvordan" className="relative overflow-hidden py-16 bg-slate-50 scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.06),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(16,185,129,0.06),transparent_60%)]"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-8">
          <Reveal>
            <h2 className="text-3xl font-bold mb-2">Slik Fungerer Det</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-600">Fra idé til ferdig nettside på 24 timer</p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          {steps.map(step => (
            <Reveal key={step.number} delay={150 + step.number * 100}>
              <div className="flex flex-col items-center bg-white rounded-xl border p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-2">{step.number}</div>
              <h3 className="font-semibold mb-1 text-center">{step.title}</h3>
              <p className="text-slate-600 text-sm mb-2 text-center">{step.desc}</p>
              <span className="text-xs text-primary font-medium">{step.duration}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
