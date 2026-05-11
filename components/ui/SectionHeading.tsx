type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  children,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const lineClass =
    align === "center" ? "gold-line gold-line-center" : "gold-line";

  return (
    <div className={`${alignClass} ${className}`}>
      <span className={`${lineClass} mb-6`} />
      <h2 className="text-4xl md:text-5xl font-display text-white">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-white/60 font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
