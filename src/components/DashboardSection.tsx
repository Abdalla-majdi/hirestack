const metrics = [
  { value: "24/7", label: "Always online" },
  { value: "100%", label: "Data ownership" },
  { value: "Real-time", label: "Live updates" },
];

export const DashboardSection = () => {
  return (
    <section className="bg-[#1D1D1F] py-32 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[17px] font-semibold text-[#2997FF] mb-5 tracking-tight">
            Dashboard
          </p>
          <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-white leading-[1.07]">
            Total control.
            <br />
            <span className="text-white/50">Zero mystery.</span>
          </h2>
          <p className="text-[19px] text-white/45 mt-5 max-w-[520px] mx-auto leading-[1.47]">
            Monitor every conversation, track hours saved, and manage your AI
            agents from one powerful dashboard.
          </p>
        </div>

        {/* Full-width screenshot */}
        <div className="relative group">
          <div className="rounded-[20px] overflow-hidden border border-white/[0.07] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
            <img
              alt="HireStack Dashboard — Live Agent Monitoring"
              className="w-full h-auto block"
              src="/lovable-uploads/592cbae5-17d8-4e40-b193-fe0bdf4c2ac4.png"
            />
          </div>
          {/* Subtle glow */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-3xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Metrics row */}
        <div className="flex flex-col sm:flex-row justify-center gap-16 mt-20 pt-12 border-t border-white/[0.07]">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-[38px] font-bold text-white tracking-[-0.03em] leading-none">
                {m.value}
              </div>
              <div className="text-[14px] text-white/40 mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
