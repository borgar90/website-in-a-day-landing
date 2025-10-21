export default function PersonvernPage() {
  return (
    <main className="container max-w-3xl py-16">
      <h1 className="text-3xl font-bold mb-6">Personvern</h1>
      <p className="mb-4">Vi tar personvern på alvor. Dine opplysninger brukes kun til å kontakte deg om din bestilling og lagres ikke lenger enn nødvendig. Ingen data deles med tredjeparter uten ditt samtykke.</p>
      <ul className="list-disc ml-6 mb-4 text-slate-700">
        <li>Du kan når som helst be om innsyn eller sletting av dine data.</li>
        <li>All kommunikasjon er kryptert og sikker.</li>
        <li>Kontakt oss på <a href="mailto:borgar90@gmail.com" className="text-primary">borgar90@gmail.com</a> for spørsmål om personvern.</li>
      </ul>
      <p className="text-slate-500 text-sm">Sist oppdatert: 21. oktober 2025</p>
    </main>
  );
}
