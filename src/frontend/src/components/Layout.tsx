import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16 lg:pt-18">{children}</main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
