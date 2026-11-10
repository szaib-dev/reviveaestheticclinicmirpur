import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Article from '@/components/Article';
import { clinic } from '@/lib/config';
import { publishedArticles } from '@/lib/journal';
import { articleImages, media } from '@/lib/media';
import { canonical, JsonLd, meta } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return publishedArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = publishedArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const metadata = meta(article.title, article.metaDescription, `/journal/${slug}`);
  const image = canonical(media[articleImages[slug]].src);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', images: [{ url: image, alt: article.title }] },
    twitter: { ...metadata.twitter, card: 'summary_large_image', images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = publishedArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const url = canonical(`/journal/${slug}`);
  return <>
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@graph': [{
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        mainEntityOfPage: url,
        url,
        inLanguage: 'en-PK',
        image: canonical(media[articleImages[slug]].src),
        publisher: { '@type': 'Organization', name: clinic.name, url: canonical('/') },
      }, {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: canonical('/') },
          { '@type': 'ListItem', position: 2, name: 'Journal', item: canonical('/journal') },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      }],
    }}/>
    <Article article={article} published/>
  </>;
}
