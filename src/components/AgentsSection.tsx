import { useState } from "react";
import { AgentCard } from "./AgentCard";
import { HireModal } from "./HireModal";
import { WorkSampleModal } from "./WorkSampleModal";
import adamAvatar from "@/assets/adam-avatar.png";
import sarahAvatar from "@/assets/sarah-avatar.png";
import omarAvatar from "@/assets/omar-avatar.png";

export const AgentsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");

  const handleHire = (agentName: string) => {
    setSelectedAgent(agentName);
    setIsModalOpen(true);
  };

  const handleViewSample = (agentName: string) => {
    setSelectedAgent(agentName);
    setIsSampleModalOpen(true);
  };

  const agents = [
    {
      name: "Adam",
      role: "E-commerce Specialist",
      level: "Mid-Level (Reliable & Autonomous)",
      industries: "Retail, Fashion, Food & Beverage",
      description: "Manages WhatsApp outreach, recovers abandoned carts, and updates customers on order status automatically.",
      avatar: adamAvatar,
    },
    {
      name: "Sarah",
      role: "HR Assistant",
      level: "Junior Associate (Fast Learner)",
      industries: "Corporate, Factories, Outsourcing Agencies",
      description: "Instantly answers employee FAQs based on your company policy (PDFs) and handles onboarding basics.",
      avatar: sarahAvatar,
    },
    {
      name: "Omar",
      role: "Junior Paralegal",
      level: "Junior (Research Focused)",
      industries: "Law Firms, Real Estate, Consultancy",
      description: "Scans thousands of uploaded documents/contracts to find clauses, precedents, and specific answers in seconds.",
      avatar: omarAvatar,
    },
  ];

  return (
    <>
      <section id="agents" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet Your Digital Workforce
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each AI agent is pre-trained, industry-ready, and available for immediate hire.
              </p>
            </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {agents.map((agent) => (
              <AgentCard
                key={agent.name}
                {...agent}
                onHire={() => handleHire(agent.name)}
                onViewSample={() => handleViewSample(agent.name)}
              />
            ))}
          </div>
          </div>
        </div>
      </section>
      
      <HireModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        agentName={selectedAgent}
        isCustomHire={false}
      />
      
      <WorkSampleModal
        open={isSampleModalOpen}
        onOpenChange={setIsSampleModalOpen}
        agentName={selectedAgent}
      />
    </>
  );
};
