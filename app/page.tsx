import { AuthModal } from "@/components/ui-sections/AuthModal";
import { BentoGrid } from "@/components/ui-sections/BentoGrid";
import { Footer } from "@/components/ui-sections/Footer";
import { HeroSection } from "@/components/ui-sections/HeroSection";
import { ModernNavbar } from "@/components/ui-sections/ModernNavbar";
import { TrustScaleSection } from "@/components/ui-sections/TrustScaleSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-fouses-ink text-white">
      <ModernNavbar />
      <HeroSection />
      <BentoGrid />
      <TrustScaleSection />
      <Footer />
      <AuthModal />
    </main>
  );
}
