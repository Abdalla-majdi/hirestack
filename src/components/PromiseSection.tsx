import { Users, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Human-centric design",
    description:
      "We enhance your team's capabilities, not replace them. AI handles the repetitive work so your people can focus on what matters most.",
  },
  {
    icon: Zap,
    title: "Instant impact",
    description:
      "AI agents start delivering value from day one — no long training periods, no ramp-up time, no disruption to existing workflows.",
  },
  {
    icon: Clock,
    title: "Always available",
    description:
      "24/7 operation means your business never stops. Your AI workforce is live even when your team is off the clock.",
  },
];

export const PromiseSection = () => {
  return (
    <section className="bg-[#F5F5F7] py-32">
      <div className="max-w-[980px] mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[17px] font-semibold text-primary mb-5 tracking-tight">
            Our promise
          </p>
          <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-[#1D1D1F] leading-[1.07]">
            We don't replace humans.
            <br />
            <span className="text-[#1D1D1F]/40">We give them superpowers.</span>
          </h2>
          <p className="text-[19px] text-[#1D1D1F]/55 mt-5 max-w-[520px] mx-auto leading-[1.47]">
            HireStack agents handle the grunt work so your team can focus on
            growth, creativity, and strategic thinking.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-[20px] p-8 border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.02em]">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#1D1D1F]/55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
