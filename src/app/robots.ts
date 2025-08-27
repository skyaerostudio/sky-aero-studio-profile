import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://skyaero.studio'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/private/',
        '/admin/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}