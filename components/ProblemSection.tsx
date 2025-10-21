import Reveal from '@/components/Reveal'

export default function ProblemSection() {
  return (
  <section id="problemer" className="py-20 bg-white scroll-mt-24">
      <div className="container">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Har Du Utsatt å Lage Nettside?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-600">Her er de vanligste grunnene mange småbedrifter utsetter det</p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '⏰', title: 'Mangel på Tid', text: 'Hverdagen er travel – å bygge nettside havner nederst på lista.' },
            { icon: '💸', title: 'Usikker på Kostnader', text: 'Byråer er dyre, og DIY verktøy blir ofte merarbeid.' },
            { icon: '🤔', title: 'Hvor Starter Jeg?', text: 'Domene, hosting, design – det virker uoversiktlig.' },
          ].map((item, i) => (
            <Reveal key={i} delay={150 + i * 100}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.text}</p>
                <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 text-left">
                  <div className="text-xs text-slate-500">Løsning</div>
                  <div className="font-semibold text-green-600">1-dags sprint, alt inkludert</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
