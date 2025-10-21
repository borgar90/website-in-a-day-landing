import Reveal from '@/components/Reveal'

export default function AboutSection() {
  return (
  <section id="om" className="py-16 bg-white scroll-mt-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Reveal>
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-6xl">👨‍💻</div>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold mb-2">Hei, jeg er Borgar</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-slate-700 mb-2">Jeg hjelper små bedrifter i Telemark å komme på nett - raskt og rimelig.</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mb-2">Med flere års erfaring innen webutvikling har jeg sett at mange lokale bedrifter ikke har råd til de dyre byråene, eller tid til å lære WordPress selv.</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-4">Derfor laget jeg denne tjenesten: <strong>Profesjonelle nettsider på 1 dag for 4000 kr</strong>.</p>
          </Reveal>
          <div className="flex gap-8 mb-4">
            {[
              ['50+', 'Fornøyde kunder'],
              ['24t', 'Leveringstid'],
              ['100%', 'Tilfredshet']
            ].map(([num, label], i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{num}</div>
                  <div className="text-xs text-slate-600">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250}>
            <a href="#bestill" className="rounded-lg bg-primary px-5 py-3 text-white font-semibold shadow hover:bg-blue-600">Book Møte Med Meg</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
