import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HireModal } from "./HireModal";
import { Sparkles } from "lucide-react";

export const CustomHireSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="custom" className="py-20 relative overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container px-4 mx-auto relative z-10">
          <Card className="max-w-4xl mx-auto border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Need a different skill set?
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We can build a custom AI agent tailored to your specific workflow and business needs. 
                From specialized industry requirements to unique process automation.
              </p>
              
              <Button 
                size="lg"
                variant="default"
                onClick={() => setIsModalOpen(true)}
                className="text-lg px-8 py-6 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Strategy Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <HireModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        agentName=""
        isCustomHire={true}
      />
    </>
  );
};
