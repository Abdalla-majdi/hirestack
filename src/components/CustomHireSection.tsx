import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HireModal } from "./HireModal";
import { Sparkles } from "lucide-react";

export const CustomHireSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="custom" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4 mx-auto">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-xl">
            <CardContent className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Need a different skill set?
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We can build a custom AI agent tailored to your specific workflow and business needs.
              </p>
              
              <Button 
                size="lg"
                variant="default"
                onClick={() => setIsModalOpen(true)}
                className="text-lg px-8 py-6 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a Consultation Strategy Call
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
