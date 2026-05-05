import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5 days", label: "Average onboarding" },
  { value: "24/7", label: "Agent availability" },
  { value: "100%", label: "Client data ownership" },
];

export const HeroSection = () => {
  return (
    <section className="relative bg-[#F5F5F7] overflow-hidden">
      {/* Text content */}
      <div className="max-w-[980px] mx-auto px-5 pt-40 pb-20 text-center">
        {/* Eyebrow */}
        <p className="text-[17px] font-semibold text-primary mb-5 tracking-tight">
          Enterprise AI Workforce
        </p>

        {/* Headline */}
        <h1 className="text-[56px] sm:text-[72px] md:text-[80px] font-bold tracking-[-0.04em] text-[#1D1D1F] leading-[1.04] mb-7">
          Expand your workforce.
          <br />
          <span className="text-[#1D1D1F]/40">Not your payroll.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[19px] md:text-[21px] leading-[1.4] text-[#1D1D1F]/60 max-w-[600px] mx-auto mb-10">
          Deploy specialized AI agents for customer support, HR, legal review, and revenue ops — with full governance, observability, and secure integrations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 text-[17px] h-[50px] font-medium shadow-sm"
          >
            <a href="#custom">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-primary hover:text-primary/80 hover:bg-transparent text-[17px] h-[50px] px-6 font-medium"
          >
            <a href="#agents">Explore agents ›</a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 mt-20 pt-12 border-t border-black/[0.08]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[34px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-none">
                {stat.value}
              </div>
              <div className="text-[14px] text-[#1D1D1F]/50 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product screenshot — full-width reveal below the fold */}
      <div className="max-w-[1100px] mx-auto px-5 pb-0">
        <div className="relative rounded-t-[24px] overflow-hidden shadow-[0_-2px_0_0_rgba(0,0,0,0.04),0_20px_60px_-10px_rgba(0,0,0,0.18)] border border-b-0 border-black/[0.06]">
          <img
            src="/lovable-uploads/28565372-09ee-4ff0-99e2-e634d5042955.png"
            alt="HireStack AI agent command center"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
