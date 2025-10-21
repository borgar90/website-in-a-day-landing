export default function NotFoundPage() {
  return (
    <main className="min-h-[60vh] grid place-items-center bg-slate-50 px-6 py-20 text-center">
      <div>
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Siden ble ikke funnet</h1>
        <p className="mt-3 text-slate-600">Beklager, vi finner ikke siden du leter etter.</p>
        <div className="mt-6">
          <a href="/" className="btn btn-primary">Tilbake til forsiden</a>
        </div>
      </div>
    </main>
  )
}
