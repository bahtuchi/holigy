import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://holigy.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['de', 'en'];
  const routes = ['', '/impressum', '/datenschutz'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.5,
    }))
  );
}
