type QuoteBlockProps = {
  quote: string;
  citation?: string;
};

export function QuoteBlock({ quote, citation }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-2 border-gold pl-6">
      <p className="text-lg md:text-xl italic font-display text-white/90 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      {citation && (
        <cite className="block mt-3 text-sm text-gold not-italic tracking-wider uppercase">
          {citation}
        </cite>
      )}
    </blockquote>
  );
}
