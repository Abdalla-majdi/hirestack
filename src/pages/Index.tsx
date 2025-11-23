import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ProcessSection } from "@/components/ProcessSection";
import { AgentsSection } from "@/components/AgentsSection";
import { DashboardSection } from "@/components/DashboardSection";
import { PricingSection } from "@/components/PricingSection";
import { CustomHireSection } from "@/components/CustomHireSection";
import { PromiseSection } from "@/components/PromiseSection";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProcessSection />
        <AgentsSection />
        <DashboardSection />
        <PricingSection />
        <CustomHireSection />
        <PromiseSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
