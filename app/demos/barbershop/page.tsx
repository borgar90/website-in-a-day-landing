export default function BarbershopDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <section className="container py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-purple-100 shadow-sm p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl grid place-items-center text-3xl bg-gradient-to-br from-purple-200 to-indigo-300">✂️</div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-indigo-800">Telemark Barbershop</h1>
                <p className="text-slate-600">Klassisk • Moderne • Skjegg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-3">Tjenester</h2>
                <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                  {[
                    { name: 'Herreklipp', desc: 'Vask, klipp og styling', price: '399 kr' },
                    { name: 'Skjeggtrim', desc: 'Form, trim og pleie', price: '299 kr' },
                    { name: 'Maskinklipp', desc: 'Rask og enkel', price: '249 kr' },
                    { name: 'Kombinasjon', desc: 'Klipp + skjegg', price: '649 kr' },
                  ].map((i) => (
                    <li key={i.name} className="flex items-start justify-between gap-4 p-4">
                      <div>
                        <div className="font-medium">{i.name}</div>
                        <div className="text-sm text-slate-600">{i.desc}</div>
                      </div>
                      <div className="tabular-nums font-semibold text-indigo-700">{i.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Åpningstider</h2>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
                  <ul className="space-y-1">
                    <li>Man–Fre: 10:00–18:00</li>
                    <li>Lørdag: 10:00–15:00</li>
                    <li>Søndag: Stengt</li>
                  </ul>
                </div>
                <h2 className="text-xl font-semibold mt-6 mb-3">Kontakt</h2>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm space-y-2">
                  <a href="tel:+4712345678" className="btn btn-primary w-full justify-center">Ring: 123 45 678</a>
                  <a href="mailto:post@barbershop.no" className="btn btn-secondary w-full justify-center">E-post</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
