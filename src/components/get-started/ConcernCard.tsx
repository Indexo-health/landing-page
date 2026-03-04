import { useLanguage } from '../../contexts/LanguageContext';

interface ConcernCardProps {
  icon: string;
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
  iconColor?: string;
  iconBg?: string;
  selectedLabel?: string;
  viewDetailsLabel?: string;
}

export default function ConcernCard({
  icon,
  title,
  desc,
  selected,
  onClick,
  iconColor = 'text-brand-navy',
  iconBg = 'bg-gray-100',
  selectedLabel,
  viewDetailsLabel,
}: ConcernCardProps) {
  const { t } = useLanguage();

  const selectedText = selectedLabel ?? t('gs.s1.selected');
  const viewDetailsText = viewDetailsLabel ?? t('gs.s1.viewDetails');

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer p-6 rounded-2xl transition-all flex flex-col gap-4 relative ${
        selected
          ? 'bg-white border-2 border-brand-teal shadow-sm'
          : 'bg-white border border-gray-200 hover:shadow-md hover:border-brand-teal/30'
      }`}
    >
      {/* Selected badge on top-right */}
      {selected && (
        <div className="absolute -top-3 right-4 px-3 py-1 bg-brand-teal rounded-md flex items-center justify-center text-white shadow-sm z-10 text-[10px] font-bold tracking-widest uppercase">
          {selectedText}
        </div>
      )}

      {/* Icon */}
      <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center ${iconColor} transition-colors`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="font-bold text-lg text-brand-navy mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
      </div>

      {/* Bottom: Selected state or View Details */}
      <div className="mt-auto pt-2">
        {selected ? (
          <span className="text-sm font-bold text-brand-teal flex items-center gap-1">
            {selectedText} <span className="material-symbols-outlined text-sm">check_circle</span>
          </span>
        ) : (
          <span className="text-sm font-bold text-brand-teal flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            {viewDetailsText} <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
          </span>
        )}
      </div>
    </div>
  );
}
