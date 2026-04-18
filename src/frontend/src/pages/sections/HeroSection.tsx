import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "ISO 27001 Certified" },
  { icon: Zap, label: "24/7 Enterprise Support" },
  { icon: Globe, label: "Global Deployment" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-background/20"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Badge
            variant="outline"
            className="border-accent/60 text-accent-foreground bg-accent/20 px-4 py-1.5 text-xs font-medium tracking-widest uppercase"
          >
            Enterprise IT Solutions
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight tracking-tight max-w-4xl mx-auto mb-6"
        >
          Enterprise IT Solutions{" "}
          <span className="text-accent">for a Connected</span> Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Empowering businesses with premium computer hardware, ergonomic
          accessories, scalable cloud infrastructure, and robust networking
          solutions designed for enterprise performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#products")}
            data-ocid="hero.discover_button"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12 text-base transition-smooth shadow-elevated"
          >
            Discover Our Solutions
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.contact_button"
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 h-12 text-base"
          >
            Talk to an Expert
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-primary-foreground/60"
            >
              <Icon size={16} className="text-accent flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
