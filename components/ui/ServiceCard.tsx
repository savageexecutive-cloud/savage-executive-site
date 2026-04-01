import { Button } from "./Button";

type ServiceCardProps = {
  tag: string;
  title: string;
  description: string;
  features: readonly string[];
  price: string;
  priceNote: string;
  cta: string;
  href: string;
};

export function ServiceCard({
  tag,
  title,
  description,
  features,
  price,
  priceNote,
  cta,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10 flex flex-col h-full">
      <span className="inline-block text-xs tracking-[0.2em] uppercase text-white/50 border border-white/20 rounded-full px-4 py-1.5 self-start mb-6">
        {tag}
      </span>

      <h3 className="text-3xl font-display text-white mb-4">{title}</h3>

      <p className="text-white/60 leading-relaxed mb-8">{description}</p>

      <div className="space-y-4 mb-8 flex-1">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gold mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white/70">{feature}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8">
        <p className="text-4xl font-display text-white mb-1">{price}</p>
        <p className="text-sm text-white/40 mb-6">{priceNote}</p>
        <Button href={href} variant="outline" className="w-full">
          {cta}
        </Button>
      </div>
    </div>
  );
}
