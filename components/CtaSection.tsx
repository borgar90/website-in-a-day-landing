export default function CtaSection() {
  return (
    <section className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' }}>
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-2">Klar for å Komme på Nett?</h2>
        <p className="mb-4">Book en gratis konsultasjon i dag - ingen forpliktelser</p>
        <a href="#bestill" className="rounded-lg bg-white text-primary px-5 py-3 font-semibold shadow hover:bg-slate-100">📅 Book Gratis Konsultasjon</a>
        <p className="mt-4 text-sm">✓ Gratis første møte • ✓ Ingen binding • ✓ Klar på 1 dag</p>
      </div>
    </section>
  )
}
