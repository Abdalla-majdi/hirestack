import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { useState } from "react";
import { HireModal } from "./HireModal";

const features = [
  "Dedicated AI agent with role-specific workflows",
  "Operational dashboard with audit history",
  "Unlimited logic and prompt optimization",
  "Implementation and systems integration included",
  "WhatsApp, Email, and internal tooling connectivity",
  "Priority support and quarterly strategy review",
];

export const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-32" id="pricing">
        <div className="max-w-[720px] mx-auto px-5">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[17px] font-semibold text-primary mb-5 tracking-tight">
              Pricing
            </p>
            <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-[#1D1D1F] leading-[1.07]">
              Simple, transparent pricing.
            </h2>
            <p className="text-[19px] text-[#1D1D1F]/55 mt-5 max-w-[480px] mx-auto leading-[1.47]">
              Predictable monthly retainer with transparent infrastructure
              ownership and no hidden fees.
            </p>
          </div>

          {/* Pricing card */}
          <div className="bg-[#F5F5F7] rounded-[24px] border border-black/[0.06] overflow-hidden shadow-sm">
            {/* Price header */}
            <div className="px-10 pt-10 pb-8 text-center border-b border-black/[0.06]">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-6">
                Standard Agent Retainer
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-[76px] font-bold text-[#1D1D1F] tracking-[-0.05em] leading-none">
                  $150
                </span>
                <span className="text-[22px] text-[#1D1D1F]/40 mb-1">/mo</span>
              </div>
              <p className="text-[14px] text-[#1D1D1F]/45 mt-3">
                6-month minimum term · Billed semi-annually
              </p>
            </div>

            {/* Features + CTA */}
            <div className="px-10 py-8 space-y-8">
              <div className="grid gap-3.5 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[14px] text-[#1D1D1F]/75 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Security note */}
              <div className="flex items-start gap-4 rounded-2xl bg-white border border-black/[0.06] p-5">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-[14px] font-semibold text-[#1D1D1F]">
                    Security & data ownership by design
                  </p>
                  <p className="text-[13px] text-[#1D1D1F]/55 mt-1 leading-[1.5]">
                    API usage and hosting billed directly to your accounts. You
                    keep full ownership of data, keys, and infrastructure — no
                    markup from HireStack.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-full text-[17px] h-[52px] font-medium shadow-sm"
              >
                Start with a discovery call
              </Button>
            </div>
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
