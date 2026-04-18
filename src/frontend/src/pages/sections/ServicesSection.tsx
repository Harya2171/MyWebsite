import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  LifeBuoy,
  Network,
  Settings,
} from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Scalable Cloud Infrastructure",
    description:
      "Secure, reliable, and flexible cloud platforms tailored to your enterprise needs — from private cloud to hybrid multi-cloud deployments.",
    features: [
      "Azure, AWS & GCP migration",
      "Private cloud architecture",
      "Disaster recovery & backup",
      "Cloud cost optimisation",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    tagline: "Robust Network Architectures",
    description:
      "Design, implementation, and management of secure, high-performance corporate networks that scale with your business.",
    features: [
      "Campus & data centre networking",
      "SD-WAN implementation",
      "Zero-trust security architecture",
      "Network monitoring & NOC",
    ],
  },
  {
    icon: Settings,
    title: "IT Consulting",
    tagline: "Strategic Technology Advisory",
    description:
      "Expert technology strategy and roadmap planning to align your IT investments with business objectives and drive digital transformation.",
    features: [
      "IT infrastructure assessment",
      "Digital transformation roadmap",
      "Vendor selection & procurement",
      "Compliance & governance",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Managed Services",
    tagline: "24/7 Proactive IT Management",
    description:
      "Fully managed IT operations with proactive monitoring, rapid incident response, and SLA-backed performance guarantees.",
    features: [
      "24/7 monitoring & alerts",
      "Patch & lifecycle management",
      "Help desk & on-site support",
      "Monthly executive reporting",
    ],
  },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-muted/30"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge
            variant="outline"
            className="mb-4 text-accent border-accent/40 bg-accent/5 px-3 py-1 text-xs uppercase tracking-widest"
          >
            Services
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
            End-to-End IT Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial consultation to long-term managed operations — our
            certified engineers deliver measurable results for enterprise IT
            environments.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-ocid="services.list"
        >
          {SERVICES.map(
            ({ icon: Icon, title, tagline, description, features }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <Card className="h-full border-border bg-card hover:shadow-elevated transition-smooth hover:border-accent/30">
                  <CardContent className="p-7">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-accent font-medium uppercase tracking-widest mb-0.5">
                          {title}
                        </p>
                        <h3 className="font-display font-bold text-lg text-foreground leading-snug">
                          {tagline}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {description}
                    </p>
                    <ul className="space-y-2.5">
                      {features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2.5 text-sm text-foreground/80"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-accent flex-shrink-0"
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ),
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            data-ocid="services.cta_button"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12"
          >
            Discuss Your Requirements
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
