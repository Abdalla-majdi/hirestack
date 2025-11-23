import { UserCheck, Handshake, BarChart3 } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Select",
      description: "Choose the agent that fits your industry (Sales, HR, or Legal)."
    },
    {
      icon: Handshake,
      title: "We Connect",
      description: "Our team securely connects your data. No technical setup needed from you."
    },
    {
      icon: BarChart3,
      title: "You Monitor",
      description: "Your agent starts working. You track performance via your live dashboard."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Onboard in 3 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A completely done-for-you service. You focus on your business, we handle the AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="relative group"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  
                  <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-5xl font-bold text-muted-foreground/20">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
