import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import MarkdownRenderer from '../components/blog/MarkdownRenderer';
import { getPostBySlug, getAllPosts } from '../utils/blogLoader';
import NotFound from './NotFound';

const categoryColors: Record<string, string> = {
  product: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
  company: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
  feature: 'bg-brand-navy/10 text-brand-navy border-brand-navy/20',
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const post = slug ? getPostBySlug(slug, language) : null;
  if (!post) return <NotFound />;

  /* Prev / Next navigation */
  const allPosts = getAllPosts(language);
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'zh' ? 'zh-CN' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return (
    <>
      <Helmet>
        <title>{post.title} — Indexo Health Blog</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={`https://indexo.health/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={`https://indexo.health${post.coverImage}`} />
      </Helmet>

      {/* Cover image — full-width banner */}
      <div className="w-full h-[280px] md:h-[380px] lg:h-[440px] overflow-hidden relative">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
      </div>

      <article className="py-12 lg:py-16 bg-white">
        <div className="w-full max-w-[780px] mx-auto px-4 md:px-10">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand-teal transition-colors mb-8 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
            {t('blog.backToList')}
          </Link>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[post.category] ?? categoryColors.product}`}>
              {t(`blog.category.${post.category}`)}
            </span>
            <span className="text-sm text-text-secondary">{formattedDate}</span>
            <span className="text-sm text-text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {post.readingTime} {t('blog.minRead')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-surface-border">
            <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
              <span className="material-symbols-outlined text-xl">person</span>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-navy">{post.author}</p>
              <p className="text-xs text-text-secondary">Indexo Health</p>
            </div>
          </div>

          {/* Article content */}
          <div className="prose-indexo">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-16 pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="group p-4 rounded-2xl border border-surface-border hover:border-brand-teal/30 hover:shadow-card transition-all"
              >
                <p className="text-xs text-text-secondary mb-1">{t('blog.prev')}</p>
                <p className="text-sm font-bold text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-2">{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="group p-4 rounded-2xl border border-surface-border hover:border-brand-teal/30 hover:shadow-card transition-all text-right"
              >
                <p className="text-xs text-text-secondary mb-1">{t('blog.next')}</p>
                <p className="text-sm font-bold text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-2">{next.title}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>
    </>
  );
}
