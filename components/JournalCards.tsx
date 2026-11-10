import { ArrowUpRight } from 'lucide-react';
import { articleImages } from '@/lib/media';
import { publishedArticles } from '@/lib/journal';
import Link from '@/components/PageTransitions';
import Photo from './Photo';

export function JournalCards({ all = false }: { all?: boolean }) {
  const articles = all ? publishedArticles : publishedArticles.slice(0, 3);
  return <div className="journal-grid">{articles.map(article =>
    <article key={article.slug}>
      <Link href={`/journal/${article.slug}`}>
        <Photo name={articleImages[article.slug]} sizes="(max-width: 767px) 88vw, 28vw"/>
        <div className="article-meta"><span>{article.category}</span></div>
        <h3>{article.title} <span><ArrowUpRight size={18} aria-hidden="true"/></span></h3>
        <p>{article.lead}</p>
      </Link>
    </article>
  )}</div>;
}
