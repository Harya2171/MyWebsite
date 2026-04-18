import { Button } from "@/components/ui/button";
import { Cpu, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleNav(href: string) {
    setMenuOpen(false);
    setTimeout(() => scrollTo(href), 80);
  }

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-card/95 backdrop-blur-sm border-b border-border/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 transition-smooth hover:opacity-80"
            data-ocid="header.logo_link"
            aria-label="TechSphere IT - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <Cpu className="w-4.5 h-4.5 text-accent-foreground" size={18} />
            </div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight">
              TechSphere<span className="text-accent ml-0.5">IT</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                data-ocid={`header.nav_${link.label.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => scrollTo("#contact")}
              data-ocid="header.cta_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-5"
            >
              Request a Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="header.menu_toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-border bg-card py-3 space-y-1"
            data-ocid="header.mobile_menu"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2 pb-1">
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => handleNav("#contact")}
                data-ocid="header.mobile_cta_button"
              >
                Request a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
