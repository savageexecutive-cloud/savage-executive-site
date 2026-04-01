type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  children,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-display text-white">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-white/60 font-body">{subtitle}</p>
      )}
    </div>
  );
}
