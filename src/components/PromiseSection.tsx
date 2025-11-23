import { Users, Zap, Clock } from "lucide-react";

export const PromiseSection = () => {
  const features = [
    {
      icon: Users,
      title: "Human-Centric Approach",
      description: "We enhance your team's capabilities rather than replacing them",
    },
    {
      icon: Zap,
      title: "Instant Impact",
      description: "AI agents start delivering value from day one with zero training time",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 operation means your business never stops, even when you rest",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We don't replace humans; we give them superpowers.
            </h2>
            <p className="text-xl text-muted-foreground">
              HireStack agents handle the grunt work so your team can focus on growth, 
              creativity, and strategic thinking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
