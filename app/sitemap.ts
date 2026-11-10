import type { MetadataRoute } from 'next';
import { canonical } from '@/lib/seo';
import { services } from '@/lib/services';
import { reviews } from '@/lib/trust';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/treatments', '/about', '/specialists', '/contact', '/online-consultation'];
  if (reviews.some(review => review.permissionVerified && review.sourceUrl && review.text && review.attribution)) paths.push('/reviews');
  return [...paths, ...services.map(service => `/treatments/${service.slug}`)].map(path => ({ url: canonical(path) }));
}
