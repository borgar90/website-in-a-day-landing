"use client"
import { useState } from 'react'
import Reveal from '@/components/Reveal'

export default function BookingSection() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setLoading(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any)
    const required = ['name','company','email','phone','date','time','meeting']
    const newErrors: Record<string,string> = {}
    required.forEach(key => { if (!data[key]) newErrors[key] = 'Påkrevd' })
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      setLoading(false)
      return
    }
    // Send booking to API
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setErrors({ api: result.error || 'Noe gikk galt. Prøv igjen.' });
      }
    } catch (err) {
      setErrors({ api: 'Serverfeil. Prøv igjen senere.' });
    }
    setLoading(false);
  }
  const resetForm = () => setSuccess(false)
  return (
  <section id="bestill" className="py-16 bg-white scroll-mt-24">
      <div className="container grid md:grid-cols-2 gap-12">
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold mb-2">Bestill Din Nettside i Dag</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-600 mb-6">Book en gratis konsultasjon - ingen forpliktelser</p>
          </Reveal>
          <div className="space-y-6">
            <div>
              <Reveal>
                <h3 className="font-semibold mb-1">Hva skjer når du booker?</h3>
              </Reveal>
              <ol className="list-decimal ml-6 text-slate-700 space-y-1">
                <li>Du velger tid og får bekreftelse på e-post.</li>
                <li>Du får et enkelt spørreskjema for å forberede møtet.</li>
                <li>Vi møtes og diskuterer design og funksjonalitet.</li>
                <li>Nettsiden bygges samme dag, du får forhåndsvisning.</li>
              </ol>
            </div>
            <div>
              <Reveal>
                <h3 className="font-semibold mb-1">✓ 100% Risikofritt</h3>
              </Reveal>
              <p className="text-slate-600">Første konsultasjon er gratis og uten forpliktelser. Du bestemmer om vi går videre.</p>
            </div>
            <div>
              <Reveal>
                <h3 className="font-semibold mb-1">Foretrekker å ringe?</h3>
              </Reveal>
              <p className="text-slate-600">Ring meg direkte på <a href="tel:+4797501753" className="text-primary">+47 975 01 753</a></p>
              <p className="text-slate-600">Eller send e-post: <a href="mailto:borgar90@gmail.com" className="text-primary">borgar90@gmail.com</a></p>
            </div>
          </div>
        </div>
        <div>
          {!success ? (
            <Reveal delay={100}>
              <form className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all" onSubmit={handleSubmit} noValidate>
              <h3 className="font-semibold mb-4">Book Gratis Konsultasjon</h3>
              <div className="grid gap-4">
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Navn *</span>
                  <input name="name" className={`rounded-lg border p-3 ${errors.name ? 'border-red-500' : ''}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
                  {errors.name && <span id="err-name" className="text-xs text-red-600">{errors.name}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Bedriftsnavn *</span>
                  <input name="company" className={`rounded-lg border p-3 ${errors.company ? 'border-red-500' : ''}`} aria-invalid={!!errors.company} aria-describedby={errors.company ? 'err-company' : undefined} />
                  {errors.company && <span id="err-company" className="text-xs text-red-600">{errors.company}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">E-post *</span>
                  <input name="email" type="email" className={`rounded-lg border p-3 ${errors.email ? 'border-red-500' : ''}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
                  {errors.email && <span id="err-email" className="text-xs text-red-600">{errors.email}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Telefon *</span>
                  <input name="phone" type="tel" className={`rounded-lg border p-3 ${errors.phone ? 'border-red-500' : ''}`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'err-phone' : undefined} />
                  {errors.phone && <span id="err-phone" className="text-xs text-red-600">{errors.phone}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Type bedrift *</span>
                  <select name="business" className="rounded-lg border p-3">
                    <option value="">Velg</option>
                  <option>Restaurant / Pizzeria / Kafé</option>
                  <option>Frisør / Barbershop / Skjønnhetssalong</option>
                  <option>Butikk / Detaljhandel</option>
                  <option>Håndverker (Rørlegger, Elektriker, etc.)</option>
                  <option>Treningssenter / Gym</option>
                  <option>Annet</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Foretrukket møtedato *</span>
                  <input name="date" className={`rounded-lg border p-3 ${errors.date ? 'border-red-500' : ''}`} type="date" aria-invalid={!!errors.date} aria-describedby={errors.date ? 'err-date' : undefined} />
                  {errors.date && <span id="err-date" className="text-xs text-red-600">{errors.date}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Foretrukket tid *</span>
                  <select name="time" className={`rounded-lg border p-3 ${errors.time ? 'border-red-500' : ''}`} aria-invalid={!!errors.time} aria-describedby={errors.time ? 'err-time' : undefined}>
                    <option value="">Velg</option>
                  <option>09:00 - Morgen</option>
                  <option>10:00 - Formiddag</option>
                  <option>11:00 - Formiddag</option>
                  <option>12:00 - Lunsjtid</option>
                  <option>13:00 - Tidlig ettermiddag</option>
                  <option>14:00 - Ettermiddag</option>
                  <option>15:00 - Ettermiddag</option>
                  <option>16:00 - Sen ettermiddag</option>
                  <option>17:00 - Kveld</option>
                  </select>
                  {errors.time && <span id="err-time" className="text-xs text-red-600">{errors.time}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Møtetype *</span>
                  <select name="meeting" className={`rounded-lg border p-3 ${errors.meeting ? 'border-red-500' : ''}`} aria-invalid={!!errors.meeting} aria-describedby={errors.meeting ? 'err-meeting' : undefined}>
                    <option value="">Velg</option>
                  <option>Fysisk møte (Telemark)</option>
                  <option>Videomøte (Zoom/Teams)</option>
                  <option>Telefonsamtale</option>
                  </select>
                  {errors.meeting && <span id="err-meeting" className="text-xs text-red-600">{errors.meeting}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Fortell kort om bedriften (valgfritt)</span>
                  <textarea name="about" className="rounded-lg border p-3" rows={4} />
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="logo" className="accent-primary" /> Jeg har logo klart
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="bilder" className="accent-primary" /> Jeg har bilder klart
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" required className="accent-primary" /> Jeg godtar at mine opplysninger brukes til å kontakte meg *
                </label>
                <button type="submit" disabled={loading} className="btn btn-primary btn-block">
                  {loading ? 'Sender...' : '📅 Book Gratis Konsultasjon'}
                </button>
                <p className="text-xs text-slate-500">* Vi tar kontakt innen 24 timer for å bekrefte tiden</p>
              </div>
              </form>
            </Reveal>
          ) : (
            <Reveal>
              <div className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all flex flex-col items-center">
              <div className="text-4xl text-primary mb-2">✓</div>
              <h3 className="font-semibold mb-2">Takk for din booking!</h3>
              <p className="text-slate-600 mb-2">Vi har mottatt din forespørsel og sender deg en bekreftelse på e-post innen 24 timer.</p>
              <p className="text-slate-600 mb-4">Sjekk også spam-mappen om du ikke finner e-posten.</p>
              <button onClick={resetForm} className="rounded-lg bg-primary px-5 py-2 text-white font-semibold hover:bg-blue-600">Book en til</button>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
