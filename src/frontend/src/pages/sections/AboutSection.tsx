import { Badge } from "@/components/ui/badge";
import { Award, Globe2, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const VALUES = [
  {
    icon: Award,
    title: "Certified Excellence",
    description:
      "Our engineers hold certifications from Cisco, Microsoft, AWS, and VMware — ensuring best-in-class solutions delivery.",
  },
  {
    icon: Users,
    title: "Client-First Culture",
    description:
      "We build lasting partnerships with transparent communication, honest assessments, and a commitment to your success.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Serving enterprise clients across North America, Europe, and APAC with localised support teams in 12 countries.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description:
      "Our clients see average 40% reduction in IT operational costs and 99.9% uptime across managed infrastructure.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-background"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 text-accent border-accent/40 bg-accent/5 px-3 py-1 text-xs uppercase tracking-widest"
            >
              About Us
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 tracking-tight leading-tight">
              Trusted IT Partner for Forward-Thinking Enterprises
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2010, TechSphere IT has grown from a regional hardware
              reseller into a full-service enterprise IT solutions provider. We
              partner with Fortune 500 companies, mid-market businesses, and
              government agencies to design, deploy, and manage technology that
              drives operational excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our vendor-agnostic approach means we recommend the right
              technology for your needs — not just what we stock. From initial
              assessment through deployment and ongoing managed services, we are
              your single point of accountability.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-5 pt-5 border-t border-border">
              {[
                { value: "500+", label: "Enterprise Clients" },
                { value: "120+", label: "Certified Engineers" },
                { value: "12", label: "Global Offices" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display font-bold text-2xl text-accent">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: value cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            data-ocid="about.values_list"
          >
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`about.value.${i + 1}`}
                className="p-5 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-elevated transition-smooth"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
