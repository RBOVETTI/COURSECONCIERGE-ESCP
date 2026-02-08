import { MetadataRoute } from 'next';
import { getLectureSlugs } from '@/lib/utils/lectures';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aibd-course.vercel.app';
  const lectureSlugs = getLectureSlugs();

  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Main pages
    routes.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/${locale}/overview`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/syllabus`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/lectures`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/resources`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/${locale}/ai-assistant`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    );

    // Lecture pages
    lectureSlugs.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/lectures/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return routes;
}
