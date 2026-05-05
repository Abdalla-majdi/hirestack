const productLinks = [
  { href: "#agents", label: "Agent Catalog" },
  { href: "#process", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

const companyLinks = [
  { href: "#custom", label: "Solutions" },
  { href: "#custom", label: "Contact Sales" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] border-t border-black/[0.06]">
      <div className="max-w-[980px] mx-auto px-5 py-14">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="space-y-3 max-w-[280px]">
            <div className="text-[17px] font-semibold text-[#1D1D1F] tracking-tight">
              HireStack
            </div>
            <p className="text-[13px] text-[#1D1D1F]/50 leading-[1.6]">
              AI agents for enterprise operations — built for visibility,
              governance, and measurable outcomes.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 text-[13px]">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D1D1F]/35">
                Product
              </p>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#1D1D1F]/55 hover:text-[#1D1D1F] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D1D1F]/35">
                Company
              </p>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#1D1D1F]/55 hover:text-[#1D1D1F] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/[0.06] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#1D1D1F]/35">
            © 2025 HireStack. All rights reserved.
          </p>
          <p className="text-[12px] text-[#1D1D1F]/35">
            Built for modern operations teams.
          </p>
        </div>
      </div>
    </footer>
  );
};
