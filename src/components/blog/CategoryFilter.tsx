import { useLanguage } from '../../contexts/LanguageContext';

const categories = ['all', 'product', 'company', 'feature'] as const;

interface Props {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
            active === cat
              ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20'
              : 'bg-white border border-surface-border text-text-secondary hover:border-brand-teal/30 hover:text-brand-teal'
          }`}
        >
          {t(`blog.filter.${cat}`)}
        </button>
      ))}
    </div>
  );
}
