import { UserCheck, Link2, LineChart } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Discovery & fit",
    description:
      "We map your workflows, compliance requirements, and success KPIs to the right AI agent profile.",
  },
  {
    icon: Link2,
    number: "02",
    title: "Secure integration",
    description:
      "Our team connects your systems and knowledge sources with role-based access and clear governance.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Launch & optimize",
    description:
      "Track outcomes in real time and continuously improve prompts, logic, and automations.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#F5F5F7] py-32">
      <div className="max-w-[980px] mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[17px] font-semibold text-primary mb-5 tracking-tight">
            How it works
          </p>
          <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-[#1D1D1F] leading-[1.07]">
            A deployment model
            <br />
            enterprise teams trust.
          </h2>
          <p className="text-[19px] text-[#1D1D1F]/55 mt-5 max-w-[520px] mx-auto leading-[1.47]">
            Structured onboarding, transparent milestones, and measurable business impact from day one.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-white rounded-[20px] p-8 border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Icon + number row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[48px] font-bold text-[#1D1D1F]/[0.05] leading-none select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#1D1D1F]/55 flex-1">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
