import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/sections/AboutSection";
import { ContactSection } from "@/pages/sections/ContactSection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { ProductsSection } from "@/pages/sections/ProductsSection";
import { ServicesSection } from "@/pages/sections/ServicesSection";
import { StatsSection } from "@/pages/sections/StatsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
