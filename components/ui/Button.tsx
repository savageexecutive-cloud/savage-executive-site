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
  const base = "inline-flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-all font-medium";

  const variants = {
    primary:
      "px-8 py-3.5 bg-gold text-primary-dark hover:bg-gold-light",
    outline:
      "px-8 py-3.5 border border-gold text-gold hover:bg-gold hover:text-primary-dark",
    text: "text-gold hover:text-gold-light",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {variant === "text" && <span aria-hidden="true">&rarr;</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {variant === "text" && <span aria-hidden="true">&rarr;</span>}
    </Link>
  );
}
