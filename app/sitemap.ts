import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://1dagsnettside.no'
  const routes = ['', '/#hvordan', '/#eksempler', '/#priser', '/#bestill', '/#om', '/#faq']
  const now = new Date().toISOString()
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.6,
  }))
}
