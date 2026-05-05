import wevoLogo from "@/assets/wevo-logo.png";
import businessBelArabyLogo from "@/assets/business-bel-araby-logo.jpg";

const assurances = [
  "Security-first deployment",
  "Enterprise SLAs",
  "Dedicated implementation support",
];

export const TrustStrip = () => {
  return (
    <section className="bg-white border-y border-black/[0.06] py-20">
      <div className="max-w-[980px] mx-auto px-5 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1D1D1F]/40 mb-10">
          Trusted by operations leaders
        </p>

        {/* Client logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-14">
          <img
            src={wevoLogo}
            alt="Wevo"
            className="h-9 w-auto object-contain opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={businessBelArabyLogo}
            alt="Business Bel Araby"
            className="h-9 w-auto object-contain opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Assurance pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {assurances.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#F5F5F7] px-4 py-2 text-[13px] text-[#1D1D1F]/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
