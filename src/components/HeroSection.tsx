import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

export const HeroSection = () => {
  const scrollToAgents = () => {
    const agentsSection = document.getElementById("agents");
    agentsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Expand Your Workforce.
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Not Your Payroll.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                Hire specialized AI agents on a fixed monthly retainer. 100% data ownership. Instant onboarding.
              </p>
              
              <Badge variant="secondary" className="text-base px-4 py-2">
                Fixed Retainer: $150/mo
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToAgents}
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Meet Your New Team
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="relative">
              <img 
                src={heroVisual} 
                alt="AI Agent Technology - WhatsApp and Document Processing"
                className="w-full h-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
