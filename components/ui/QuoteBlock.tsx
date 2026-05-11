type QuoteBlockProps = {
  quote: string;
  citation?: string;
};

export function QuoteBlock({ quote, citation }: QuoteBlockProps) {
  return (
    <blockquote className="relative border-l-2 border-gold/60 pl-6">
      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-3 text-5xl font-display text-gold/15 leading-none select-none"
      >
        &ldquo;
      </span>
      <p className="text-lg md:text-xl italic font-display text-white/90 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      {citation && (
        <cite className="block mt-4 text-sm text-gold not-italic tracking-wider uppercase">
          &mdash; {citation}
        </cite>
      )}
    </blockquote>
  );
}
