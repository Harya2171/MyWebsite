import { motion } from "motion/react";

const STATS = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "15+", label: "Years of Experience" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Coverage" },
];

export function StatsSection() {
  return (
    <section
      className="bg-card border-b border-border py-12"
      data-ocid="stats.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center py-4 md:py-0 text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <span className="font-display font-bold text-3xl md:text-4xl text-accent leading-none mb-1">
                {value}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
