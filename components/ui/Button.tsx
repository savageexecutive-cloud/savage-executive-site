import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-all duration-300 font-medium";

  const variants = {
    primary:
      "px-8 py-3.5 bg-gold text-primary-dark hover:bg-gold-light btn-glow shadow-[0_2px_12px_rgba(201,162,39,0.15)]",
    outline:
      "px-8 py-3.5 border border-gold text-gold hover:bg-gold hover:text-primary-dark hover:shadow-[0_4px_20px_rgba(201,162,39,0.2)]",
    text: "text-gold hover:text-gold-light group",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const arrow =
    variant === "text" ? (
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    ) : null;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
