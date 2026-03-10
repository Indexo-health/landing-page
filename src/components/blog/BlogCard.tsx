import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { BlogPostMeta } from '../../types/blog';

const categoryColors: Record<string, string> = {
  product: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
  company: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
  feature: 'bg-brand-navy/10 text-brand-navy border-brand-navy/20',
};

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const { t } = useLanguage();

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="bg-white rounded-[24px] overflow-hidden border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {/* Cover image */}
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category badge + date */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[post.category] ?? categoryColors.product}`}>
              {t(`blog.category.${post.category}`)}
            </span>
            <span className="text-xs text-text-secondary">
              {new Date(post.date).toLocaleDateString(post.lang === 'zh' ? 'zh-CN' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </span>
          </div>
          {/* Title */}
          <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors tracking-tight">
            {post.title}
          </h3>
          {/* Summary */}
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 flex-grow">{post.summary}</p>
          {/* Reading time */}
          <div className="flex items-center gap-1 mt-4 text-xs text-text-secondary">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {post.readingTime} {t('blog.minRead')}
          </div>
        </div>
      </div>
    </Link>
  );
}
