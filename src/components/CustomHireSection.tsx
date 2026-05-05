import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HireModal } from "./HireModal";
import { ArrowRight } from "lucide-react";

export const CustomHireSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="custom" className="bg-[#1D1D1F] py-32">
        <div className="max-w-[720px] mx-auto px-5 text-center">
          <p className="text-[17px] font-semibold text-[#2997FF] mb-5 tracking-tight">
            Custom solutions
          </p>

          <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-white leading-[1.07] mb-6">
            Need a different
            <br />
            skill set?
          </h2>

          <p className="text-[19px] text-white/45 leading-[1.47] max-w-[480px] mx-auto mb-12">
            We build custom AI agents tailored to your specific workflows —
            from specialized industry requirements to unique process automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 text-[17px] h-[50px] font-medium bg-white text-[#1D1D1F] hover:bg-white/90 transition-colors"
            >
              Book a strategy call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="text-white/55 hover:text-white hover:bg-transparent text-[17px] h-[50px] px-6 font-medium transition-colors"
            >
              <a href="#agents">View agent catalog ›</a>
            </Button>
          </div>
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
