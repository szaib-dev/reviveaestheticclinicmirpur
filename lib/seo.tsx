import type { Metadata } from 'next';
import { clinic } from './config';

export function canonical(path: string) {
  return new URL(path, clinic.domain).href;
}

export function meta(title: string, description: string, path: string, noindex = false): Metadata {
  const image = {
    url: canonical('/images/clinic-reception-retouched.png'),
    alt: 'Retouched photograph of the reception at Revive Aesthetics Clinic in Mirpur',
  };
  const pageTitle = title.endsWith('| Revive Aesthetics') ? title : `${title} | Revive Aesthetics`;
  return {
    applicationName: clinic.name,
    title: { absolute: pageTitle },
    description,
    ...(noindex ? { robots: { index: false, follow: true } } : { alternates: { canonical: canonical(path) } }),
    openGraph: { title: pageTitle, description, type: 'website', url: canonical(path), siteName: clinic.name, locale: 'en_PK', images: [image] },
    twitter: { card: 'summary_large_image', title: pageTitle, description, images: [image] },
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
