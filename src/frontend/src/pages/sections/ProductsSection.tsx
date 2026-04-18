import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Cpu,
  HardDrive,
  Headphones,
  Monitor,
  Network,
  Server,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";

const PRODUCT_CATEGORIES = [
  {
    icon: Monitor,
    title: "Computers & Workstations",
    description:
      "High-performance laptops, desktops, and workstations optimised for enterprise productivity and demanding applications.",
    items: [
      "Business Laptops",
      "Tower Workstations",
      "All-in-One PCs",
      "Mini PCs",
    ],
    badge: "Popular",
  },
  {
    icon: Server,
    title: "Servers & Storage",
    description:
      "Rack servers, blade systems, and NAS solutions engineered for mission-critical enterprise workloads.",
    items: [
      "Rack Servers",
      "Blade Systems",
      "NAS / SAN Storage",
      "UPS Systems",
    ],
    badge: "Enterprise",
  },
  {
    icon: Network,
    title: "Networking Equipment",
    description:
      "Routers, switches, and access points from leading vendors to build reliable, high-speed corporate networks.",
    items: [
      "Managed Switches",
      "Enterprise Routers",
      "Wireless AP",
      "Firewall Appliances",
    ],
    badge: "New",
  },
  {
    icon: Headphones,
    title: "Accessories & Peripherals",
    description:
      "Ergonomic peripherals, displays, docking stations, and workplace accessories to complete every workstation setup.",
    items: [
      "4K Monitors",
      "Ergonomic Keyboards",
      "Docking Stations",
      "Video Conferencing",
    ],
    badge: "",
  },
];

const FEATURED_PRODUCTS = [
  {
    icon: Cpu,
    name: "Dell Precision 7680",
    category: "Workstation",
    spec: "Intel Core i9, 64GB RAM, NVIDIA RTX 4000",
  },
  {
    icon: Server,
    name: "HPE ProLiant DL380",
    category: "Rack Server",
    spec: "2× Intel Xeon, 256GB RAM, 12TB Storage",
  },
  {
    icon: HardDrive,
    name: "NetApp AFF A250",
    category: "All-Flash Storage",
    spec: "100TB NVMe, 99.9999% Availability",
  },
  {
    icon: Wifi,
    name: "Cisco Catalyst 9300",
    category: "Network Switch",
    spec: "48-Port, 10G Uplinks, PoE+",
  },
  {
    icon: Monitor,
    name: "LG UltraFine 5K",
    category: "Display",
    spec: "5120×2880, P3 Color, Thunderbolt 4",
  },
  {
    icon: Network,
    name: "Fortinet FortiGate 200G",
    category: "Next-Gen Firewall",
    spec: "20 Gbps Throughput, AI-Powered Threat Detection",
  },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 bg-background"
      data-ocid="products.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
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
            Products
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
            Enterprise-Grade Hardware
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated portfolio of premium IT hardware from the world's leading
            manufacturers, configured and supported for enterprise deployment.
          </p>
        </motion.div>

        {/* Category cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          data-ocid="products.categories_list"
        >
          {PRODUCT_CATEGORIES.map(
            ({ icon: Icon, title, description, items, badge }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`products.category.${i + 1}`}
              >
                <Card className="h-full border-border hover:border-accent/40 hover:shadow-elevated transition-smooth group cursor-default">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon size={22} className="text-accent" />
                      </div>
                      {badge && (
                        <Badge className="text-xs bg-accent/10 text-accent border-0 font-medium">
                          {badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {description}
                    </p>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ),
          )}
        </div>

        {/* Featured products */}
        <div>
          <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
            Featured Enterprise Products
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="products.featured_list"
          >
            {FEATURED_PRODUCTS.map(
              ({ icon: Icon, name, category, spec }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  data-ocid={`products.featured.${i + 1}`}
                >
                  <Card className="border-border hover:border-accent/30 hover:shadow-subtle transition-smooth group">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                        <Icon
                          size={20}
                          className="text-muted-foreground group-hover:text-accent transition-colors"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display font-semibold text-sm text-foreground truncate">
                          {name}
                        </p>
                        <p className="text-xs text-accent font-medium mb-0.5">
                          {category}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {spec}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#contact")}
            data-ocid="products.enquire_button"
            className="border-accent/40 text-accent hover:bg-accent/5 font-medium"
          >
            Request a Product Quote
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
