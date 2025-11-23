import { useState } from "react";
import { AgentCard } from "./AgentCard";
import { HireModal } from "./HireModal";
import adamAvatar from "@/assets/adam-avatar.png";
import sarahAvatar from "@/assets/sarah-avatar.png";
import omarAvatar from "@/assets/omar-avatar.png";

export const AgentsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");

  const handleHire = (agentName: string) => {
    setSelectedAgent(agentName);
    setIsModalOpen(true);
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
      <section id="agents" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The Talent Pool
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our specialized AI agents, ready to join your team today
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {agents.map((agent) => (
              <AgentCard
                key={agent.name}
                {...agent}
                onHire={() => handleHire(agent.name)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <HireModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        agentName={selectedAgent}
      />
    </>
  );
};
