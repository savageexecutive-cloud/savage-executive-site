import { STATS } from "@/lib/constants";

export function StatBar() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {STATS.map((stat) => (
          <div key={stat.sublabel} className="text-center">
            <p className="text-3xl md:text-4xl font-display text-gold">
              {stat.value}
            </p>
            <p className="text-lg font-display text-white/80 mt-1">
              {stat.label}
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-white/40 mt-1">
              {stat.sublabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
