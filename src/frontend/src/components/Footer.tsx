import { Separator } from "@/components/ui/separator";
import {
  Cpu,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    { label: "Enterprise Laptops", href: "#products" },
    { label: "Servers & Storage", href: "#products" },
    { label: "Networking Equipment", href: "#products" },
    { label: "Accessories", href: "#products" },
  ],
  Services: [
    { label: "Cloud Migration", href: "#services" },
    { label: "Network Design", href: "#services" },
    { label: "IT Consulting", href: "#services" },
    { label: "Managed Services", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

const year = new Date().getFullYear();
const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

function scrollTo(href: string) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 mb-4 hover:opacity-80 transition-smooth"
              data-ocid="footer.logo_link"
            >
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Cpu size={18} className="text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                TechSphere<span className="text-accent">IT</span>
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Empowering enterprises with premium IT hardware, scalable cloud
              infrastructure, and robust networking solutions since 2010.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <span>enterprise@techsphere-it.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <span>+1 (800) TECH-SPH</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="text-accent flex-shrink-0" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                      data-ocid={`footer.link_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} TechSphere IT. All rights reserved. Built with love using{" "}
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-accent hover:bg-muted/60 transition-smooth"
                data-ocid={`footer.social_${label.toLowerCase()}`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
