import { useState } from "react";
import { AgentCard } from "./AgentCard";
import { HireModal } from "./HireModal";
import { WorkSampleModal } from "./WorkSampleModal";
import adamAvatar from "@/assets/adam-avatar.png";
import sarahAvatar from "@/assets/sarah-avatar.png";
import omarAvatar from "@/assets/omar-avatar.png";

const agents = [
  {
    name: "Adam",
    role: "Revenue Operations Agent",
    level: "Mid-Level · Autonomous Execution",
    industries: "Retail, E-commerce, Food & Beverage",
    description:
      "Automates WhatsApp outreach, cart recovery, and order updates to improve conversion and reduce support load.",
    avatar: adamAvatar,
  },
  {
    name: "Sarah",
    role: "People Operations Agent",
    level: "Junior Associate · Policy-Aware",
    industries: "Corporate, Manufacturing, BPO",
    description:
      "Answers employee policy questions, supports onboarding, and keeps HR communications consistent and available 24/7.",
    avatar: sarahAvatar,
  },
  {
    name: "Omar",
    role: "Legal Operations Agent",
    level: "Junior Analyst · Research Focused",
    industries: "Legal, Real Estate, Advisory",
    description:
      "Searches large contract and legal document sets in seconds to surface clauses, risks, and precedent insights.",
    avatar: omarAvatar,
  },
];

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

  return (
    <>
      <section id="agents" className="bg-white py-32">
        <div className="max-w-[980px] mx-auto px-5">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-[17px] font-semibold text-primary mb-5 tracking-tight">
              AI Agents
            </p>
            <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-[#1D1D1F] leading-[1.07]">
              Your AI workforce,
              <br />
              ready to deploy.
            </h2>
            <p className="text-[19px] text-[#1D1D1F]/55 mt-5 max-w-[520px] mx-auto leading-[1.47]">
              Every agent includes prebuilt workflows, KPI tracking, and
              enterprise-ready handover support.
            </p>
          </div>

          {/* Agent cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
