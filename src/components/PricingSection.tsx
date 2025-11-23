import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";
import { useState } from "react";
import { HireModal } from "./HireModal";

export const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Dedicated AI Agent",
    "Full Dashboard Access",
    "Unlimited Logic Updates",
    "Setup & Integration Included",
    "WhatsApp/Email Integration",
    "Priority Support"
  ];

  return (
    <>
      <section className="py-20 bg-background" id="pricing">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Simple, Transparent Hiring
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hire your AI agent on a fixed monthly retainer. You own the data, you control the costs.
              </p>
            </div>
            
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              <CardHeader className="relative text-center space-y-2 pb-8">
                <CardTitle className="text-3xl md:text-4xl font-bold">
                  Standard Agent Retainer
                </CardTitle>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-primary">$150</span>
                  <span className="text-2xl text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Billed semi-annually (6-month contract minimum)
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted/50 border border-border rounded-xl p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">100% Data Privacy Guarantee</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To ensure complete data privacy and ownership, API usage credits and hosting fees are billed 
                        directly to your own accounts. You pay actual costs with zero markups. Your data never touches 
                        our infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Start 6-Month Contract
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <HireModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        agentName="Standard Retainer"
        isCustomHire={false}
      />
    </>
  );
};
