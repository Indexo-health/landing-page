import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Indexo Health</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mb-8">
          <span className="material-symbols-outlined text-brand-teal text-4xl">search_off</span>
        </div>
        <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-navy mb-4">Page Not Found</h2>
        <p className="text-text-secondary text-lg max-w-md mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Back to Home</span>
        </Link>
      </section>
    </>
  );
}
