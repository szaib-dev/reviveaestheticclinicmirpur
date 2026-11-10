import articles from './articles.json';

export const publishedArticles = articles.filter(article => article.status === 'published');
