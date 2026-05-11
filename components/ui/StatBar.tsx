import { STATS } from "@/lib/constants";

export function StatBar() {
  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top decorative line */}
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {STATS.map((stat) => (
            <div key={stat.sublabel} className="text-center stat-divider px-4">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-gradient-gold">
                {stat.value}
              </p>
              <p className="text-lg font-display text-white/80 mt-2">
                {stat.label}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-white/40 mt-1">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
