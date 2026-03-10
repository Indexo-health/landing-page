import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import BlogHero from '../components/blog/BlogHero';
import CategoryFilter from '../components/blog/CategoryFilter';
import BlogCard from '../components/blog/BlogCard';
import { getAllPosts } from '../utils/blogLoader';

export default function Blog() {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState('all');

  const allPosts = getAllPosts(language);
  const filtered = category === 'all'
    ? allPosts
    : allPosts.filter((p) => p.category === category);

  return (
    <>
      <Helmet>
        <title>{t('blog.seo.title')}</title>
        <meta name="description" content={t('blog.seo.desc')} />
        <link rel="canonical" href="https://indexo.health/blog" />
        <meta property="og:title" content={t('blog.seo.title')} />
        <meta property="og:description" content={t('blog.seo.desc')} />
      </Helmet>

      <BlogHero />

      <section className="py-16 lg:py-20 bg-background-subtle">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
          {/* Filter bar */}
          <div className="mb-10">
            <CategoryFilter active={category} onChange={setCategory} />
          </div>

          {/* Post grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <div key={post.slug}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-5xl text-gray-200 mb-4 block">article</span>
              <p className="text-text-secondary text-lg font-medium">{t('blog.empty')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
