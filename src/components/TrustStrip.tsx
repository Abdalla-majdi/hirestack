import wevoLogo from "@/assets/wevo-logo.png";
import businessBelArabyLogo from "@/assets/business-bel-araby-logo.jpg";

export const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
            Trusted by forward-thinking market leaders
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Wevo Logo */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img 
                src={wevoLogo} 
                alt="Wevo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            
            {/* Business Bel Araby Logo */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img 
                src={businessBelArabyLogo} 
                alt="Business Bel Araby" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            
            {/* Placeholder Generic Tech Companies */}
            <div className="grayscale opacity-40 h-12 md:h-16 w-32 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">ENTERPRISE</span>
            </div>
            
            <div className="grayscale opacity-40 h-12 md:h-16 w-32 bg-gradient-to-r from-muted-foreground/20 to-muted rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">CORPORATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
