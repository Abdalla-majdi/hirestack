import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AgentsSection } from "@/components/AgentsSection";
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
        <AgentsSection />
        <CustomHireSection />
        <PromiseSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
