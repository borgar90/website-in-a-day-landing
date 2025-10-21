import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://1dagsnettside.no'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
