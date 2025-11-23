import dashboardMockup from "@/assets/dashboard-mockup.png";

export const DashboardSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Total Control. Zero Mystery.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor every conversation, track hours saved, and manage your AI agents from a single, powerful dashboard.
            </p>
          </div>
          
          <div className="relative group">
            {/* Glassmorphic container */}
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl backdrop-blur-sm bg-card/50">
              <img 
                src={dashboardMockup} 
                alt="HireStack Dashboard - Live Agent Monitoring"
                className="w-full h-auto"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Always Online</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <p className="text-muted-foreground">Data Ownership</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">Real-time</div>
              <p className="text-muted-foreground">Live Updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
