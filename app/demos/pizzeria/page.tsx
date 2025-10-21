export default function PizzeriaDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <section className="container py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-orange-100 shadow-sm p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl grid place-items-center text-3xl bg-gradient-to-br from-orange-200 to-orange-300">🍕</div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-orange-800">Telemark Pizzeria</h1>
                <p className="text-slate-600">Steinovn • Takeaway • Levering</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-3">Meny</h2>
                <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                  {[
                    { name: 'Margherita', desc: 'Tomat, mozzarella, basilikum', price: '149 kr' },
                    { name: 'Pepperoni', desc: 'Tomat, mozzarella, pepperoni', price: '169 kr' },
                    { name: 'Prosciutto', desc: 'Tomat, mozzarella, skinke, ruccola', price: '179 kr' },
                    { name: 'Vegetar', desc: 'Tomat, mozzarella, paprika, løk, sopp', price: '169 kr' },
                  ].map((i) => (
                    <li key={i.name} className="flex items-start justify-between gap-4 p-4">
                      <div>
                        <div className="font-medium">{i.name}</div>
                        <div className="text-sm text-slate-600">{i.desc}</div>
                      </div>
                      <div className="tabular-nums font-semibold text-orange-700">{i.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Åpningstider</h2>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
                  <ul className="space-y-1">
                    <li>Man–Tor: 11:00–21:00</li>
                    <li>Fre–Lør: 11:00–22:00</li>
                    <li>Søndag: 12:00–21:00</li>
                  </ul>
                </div>
                <h2 className="text-xl font-semibold mt-6 mb-3">Kontakt</h2>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm space-y-2">
                  <a href="tel:+4712345678" className="btn btn-primary w-full justify-center">Ring: 123 45 678</a>
                  <a href="mailto:post@pizzeria.no" className="btn btn-secondary w-full justify-center">E-post</a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Kart"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10354.379!2d9.65!3d59.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNTnCsDEzJzEwLjAiTiA5wrAzOScwMC4wIkU!5e0!3m2!1sno!2sno!4v1680000000000">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
